import {useEffect, useState} from 'react';
import {ChainGPTLogo} from './components/ChainGPTLogo/ChainGPTLogo.tsx';
import {TipBox} from './components/TipBox/TipBox.tsx';
import {CustomChatBox} from './components/CustomChatBox/CustomChatBox.tsx';
import styles from './style.module.css';
import preflightStyles from '../../styles/tailwindPreflight.module.scss';

export default {
  TipBox, ChainGPTLogo, CustomChatBox, ChatBoxButton
};

export function ChatBoxButton({
                                apiUri,
                                historyLimit = 200
}: {
  apiUri: string,
  historyLimit?: number
}) {
  const [hiddenTip, setHiddenTip] = useState(true);
  const [hiddenChat, setHiddenChat] = useState(true);
  const [tipReadyToShow, setTipReadyToShow] = useState(false);
  useEffect(() => {
    const chainGPTTalked = localStorage.getItem('chainGPT');
    if (!chainGPTTalked) {
      setHiddenTip(false);
      setTimeout(() => {
        localStorage.setItem('chainGPT', 'chainGPT talked');
      }, 200);
    }
    setTimeout(() => {
      setTipReadyToShow(true);
    }, 5000);
  }, []);

  const showTip: boolean = !hiddenTip && tipReadyToShow;

  return <div className={`${preflightStyles.tailwindContainer} ${styles.chatCon}`}>
    <div className={`${styles.tipConPosition} ${hiddenTip && styles.tipConPositionHidden}`}>
      <div className={`${styles.tipCon} ${showTip && styles.tipConShow}`}><TipBox /></div>
    </div>
    <div
      className={`${styles.chatBlock} ${styles.logoCon} ${!hiddenChat && styles.logoConHidden}`}
      onClick={() => {
        setHiddenTip(true);
        setHiddenChat(false);
        localStorage.setItem('chainGPT', 'chainGPT talked');
      }}><ChainGPTLogo className={`${styles.cursorPointer} ${styles.logo}`}/></div>
    <div className={`${styles.chatBlock} ${styles.chatBoxCon} ${hiddenChat && styles.chatBoxConHidden}`}>
      <CustomChatBox
        onClose={() => {
          setHiddenChat(true);
        }}
        apiUri={apiUri}
        historyLimit={historyLimit}
      />
    </div>
  </div>
}
