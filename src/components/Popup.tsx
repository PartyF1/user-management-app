import React from 'react';
import styles from './Popup.module.css';

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.closeButton} onClick={onClose}>
          <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.7433 16.494C26.085 16.1523 26.085 15.5982 25.7433 15.2565C25.4016 14.9148 24.8476 14.9148 24.5059 15.2565L20.9998 18.7626L17.4937 15.2565C17.152 14.9148 16.598 14.9148 16.2563 15.2565C15.9146 15.5982 15.9146 16.1523 16.2563 16.494L19.7624 20L16.2563 23.5061C15.9146 23.8478 15.9146 24.4018 16.2563 24.7435C16.598 25.0852 17.152 25.0852 17.4937 24.7435L20.9998 21.2375L24.5059 24.7435C24.8476 25.0853 25.4016 25.0853 25.7433 24.7435C26.085 24.4018 26.085 23.8478 25.7433 23.5061L22.2372 20L25.7433 16.494Z" fill="#595959" />
          </svg>
        </div>
        <div className={styles.iconContainer}>
          <svg width="85" height="84" viewBox="0 0 85 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.1087 13.1907C36.9151 11.983 48.085 11.983 58.8914 13.1907C62.9487 13.6442 66.5103 15.8383 68.7633 19.0246L40.7501 47.0378L32.1063 38.394C31.0812 37.3688 29.4191 37.3688 28.394 38.394C27.3688 39.4191 27.3688 41.0811 28.394 42.1063L38.894 52.6063C39.9191 53.6314 41.5812 53.6314 42.6063 52.6063L71.0103 24.2023C71.089 24.5857 71.1517 24.9751 71.1979 25.3698C72.4902 36.419 72.4902 47.5812 71.1979 58.6304C70.4459 65.0598 65.2838 70.095 58.8914 70.8095C48.085 72.0173 36.9151 72.0173 26.1087 70.8095C19.7164 70.095 14.5542 65.0598 13.8022 58.6304C12.5099 47.5812 12.5099 36.419 13.8022 25.3698C14.5542 18.9404 19.7164 13.9052 26.1087 13.1907Z" fill="#C6F4C6" />
          </svg>

          {/* <img src="/path/to/check-icon.svg" alt="Success" className={styles.icon} /> */}
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
