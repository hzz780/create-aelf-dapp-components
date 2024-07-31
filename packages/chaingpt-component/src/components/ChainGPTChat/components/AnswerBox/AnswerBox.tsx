import React from 'react';
import styles from './styles.module.css';
import ChainGPTIcon from '../../assets/icon-2.svg';

export function AnswerBox({
                            children,
                            className
                          }: {
  children: React.ReactNode,
  className?: string
}) {
  return <div className={`${styles.container} ${className}`}>
    <div className={styles.innerContainer}>
      <div><ChainGPTLogo/></div>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  </div>
}

function ChainGPTLogo() {
  return <>
    <img
      src={ChainGPTIcon}
      alt="chainGPT close"
      className={styles.logoImage}
    />
  </>
}
