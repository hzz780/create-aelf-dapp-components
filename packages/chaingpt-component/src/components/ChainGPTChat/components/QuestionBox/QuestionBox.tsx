import React from 'react';
import styles from './style.module.css';
export function QuestionBox({
    children, // will be a page or nested layout
  }: {
  children: React.ReactNode
}) {
  return <div className={styles.questionBox}>
    <div className={styles.questionInnerBox}>
      {children}
    </div>
  </div>
}
