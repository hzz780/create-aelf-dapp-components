import { useState } from 'react';
import styles from './styles.module.css';
import SendWait from '../../assets/send-wait.svg';
import SendReady from '../../assets/send-ready.svg';

export const ChatInput = ({
                     sendMessage
                   }: {
  sendMessage: (message: string) => void
}) => {
  const [message, setMessage] = useState('');
  const handleInputChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (message.trim() === '') {
      return;
    }
    sendMessage(message);
    setMessage('');
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.chainGptInputPlaceholder}
          type="text"
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
        />
      </div>
      <div className={styles.image}>
        <img
          onClick={handleSend}
          src={message.trim() ? SendReady : SendWait}
          alt="send ready"
          className={styles.cursorPointer}
        />
      </div>
    </div>
  );
};
