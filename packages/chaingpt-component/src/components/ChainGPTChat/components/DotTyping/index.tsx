import styles from './styles.module.css';

export function DotTyping({
  loading = true
                          }: {
  loading?: boolean
}) {
  return <div className={
    `${styles.chainGptDotTypingStage} 
    ${loading ? styles.loadingFlex : styles.loadingHidden}`}>
    <div className={styles.chainGptDotTyping} ></div>
  </div>
}
