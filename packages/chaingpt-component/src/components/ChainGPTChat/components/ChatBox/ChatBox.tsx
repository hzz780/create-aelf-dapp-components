import { QuestionBox } from '../QuestionBox/QuestionBox';
import { AnswerBox } from '../AnswerBox/AnswerBox.tsx';
import React, { useEffect, useRef, useState } from 'react';
import {DotTyping} from '../DotTyping';
import {ChatInput} from '../ChatInput/ChatInput';
import styles from './styles.module.css';
import { fetchEventSource } from '@microsoft/fetch-event-source';

interface IChatItem {
  text: string | React.FC;
  type: 'question' | 'answer';
}

// TODO: Virtual list to hold the messages
// import VirtualList from 'rc-virtual-list';
export default function ChatBox({
                                  defaultList = [],
                                  Welcome,
                                  apiUri,
                                  historyLimit = 200
                                }: {
  defaultList?: IChatItem[],
  Welcome?: React.FC,
  apiUri: string
  historyLimit?: number
}) {
  const [chatList, setChainList] = useState<IChatItem[]>(defaultList);
  const [searchDisable, setSearchDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSearch = async (value: string) => {
    console.log('value: ', value);
    if (value.trim().length <= 0) {
      return;
    }
    const question: IChatItem = {
      text: value,
      type: 'question'
    };
    const _list = [...chatList, question];
    setChainList(_list);
    setSearchDisable(true);
    setLoading(true);

    let answerMessage = '';
    await fetchEventSource(apiUri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: value,
      }),
      onmessage(ev) {
        answerMessage += ev.data;
        const answer: IChatItem = {
          text: answerMessage,
          type: 'answer'
        };
        if (answerMessage) {
          setSearchDisable(false);
          setChainList([..._list, answer]);
        }
      },
      onclose() {
        console.log('close');
        setSearchDisable(false);
        setLoading(false);
      },
      onerror(err) {
        console.error(err);
        answerMessage = 'Please try again';
        const answer: IChatItem = {
          text: answerMessage,
          type: 'answer'
        };
        setChainList([..._list, answer]);
        setSearchDisable(false);
        setLoading(false);
        throw new Error(`Response Error`);
      }
    });
  };

  console.log('chatList', chatList, JSON.stringify(chatList));
  const bottomRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (bottomRef.current && 'scrollIntoView' in bottomRef.current) {
      bottomRef.current.scrollIntoView({behavior: "smooth"});
    }
    if (chatList && chatList.length) {
      const listToBeStored = chatList.length > historyLimit
        ? chatList.slice(chatList.length - historyLimit) : chatList;
      localStorage.setItem('chainGPTChatHistory', JSON.stringify(listToBeStored));
    }
  }, [chatList]);

  useEffect(() => {
    const history = localStorage.getItem('chainGPTChatHistory');
    if (history) {
      setChainList(JSON.parse(history));
    }
  }, []);

  return <>
    <div className={styles.container}>
      <div className={styles.messageBox}>
        {/*<div className={styles.messageBoxOverflow}>*/}
        <div className={styles.messageBoxInner}>
            {Welcome && <Welcome />}
            {chatList.map((item, index) => (
              <div key={index}>
                {item.type === 'question'
                  ? <QuestionBox>{Render(item.text)}</QuestionBox> : <AnswerBox>{Render(item.text)}</AnswerBox>}
                {/*// : index === chatList.length - 1*/}
                {/*//   ? <AnswerBox>{Render(item.text)}<DotTyping loading={loading}/></AnswerBox>*/}
                {/*//   : <AnswerBox>{Render(item.text)}</AnswerBox>*/}
              </div>
            ))}
            <AnswerBox className={searchDisable && loading ? styles.answerBlock: styles.answerHidden}>
              <DotTyping loading={searchDisable}/>
            </AnswerBox>
            <div ref={bottomRef}></div>
          </div>
        {/*</div>*/}
      </div>
      <div className={styles.inputBox}>
        <ChatInput sendMessage={onSearch}/>
      </div>
    </div>
  </>
}

function Render(input: any) {
  if (typeof input === 'string') {
    return input
  }
  return <input />
}
