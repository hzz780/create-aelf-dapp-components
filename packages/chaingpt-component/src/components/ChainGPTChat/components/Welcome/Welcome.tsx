import {AnswerBox} from '../AnswerBox/AnswerBox.tsx';
import React from 'react';
import styles from './welcome.module.css';
function TextList({
                    children,
                  }: {
  children: React.ReactNode,
}) {
  return <p className={styles.textListFlex}>
    <span className={styles.textListSpan}>·</span>{children}
  </p>
}
export function Welcome() {
  return <AnswerBox>
    <div>
      Hi there! I&apos;m your AI assistant, here to help you explore and understand all about aelf!
      Ready to dive in? Here are a few things I can assist you with:
    </div>
    <div className={styles.blank}></div>
    <div>
      <TextList> 🌟 “Tell me about aelf’s features.”</TextList>
      <TextList> 📈 “How can aelf improve my blockchain project?”</TextList>
      <TextList> 🛠️ “What tools and resources are available?”</TextList>
      <TextList> 🤝 “How do I get started with aelf?”</TextList>
    </div>
    <div className={styles.blank}></div>
    <div>
      Ask me anything, and let’s get started!
    </div>
  </AnswerBox>
}
