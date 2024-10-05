import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../redux/usersApi';
import styles from './UserCard.module.css'; // Импортируем стили как модуль

interface UserCardProps {
  user: User;
  onArchive?: () => void;
  onHide?: () => void;
  onUnarchive?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onArchive, onHide, onUnarchive }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <div className={styles.userCard}>
      <div className={styles.avatarContainer}>
        <img
          src="https://placekitten.com/200/200" // Используйте реальный URL для аватара пользователя
          alt="Avatar"
          className={styles.avatar}
        />
      </div>
      <div className={styles.userInfo}>
        <h3 className={styles.username}>{user.username}</h3>
        <p className={styles.status}>{user.company.name}</p>
        <p className={styles.location}>{user.address.city}</p>
      </div>
      <div className={styles.options}>
        <div className={styles.menuIcon} onClick={toggleDropdown}>
          ⋮
        </div>
        {isDropdownOpen && (
          <div className={styles.dropdown}>
            <Link to={`/edit/${user.id}`} className={styles.dropdownButton}>
              Редактировать
            </Link>
            {onArchive && (
              <button className={styles.dropdownButton} onClick={onArchive}>
                Архивировать
              </button>
            )}
            {onHide && (
              <button className={styles.dropdownButton} onClick={onHide}>
                Спрятать
              </button>
            )}
            {onUnarchive && (
              <button className={styles.dropdownButton} onClick={onUnarchive}>
                Разархивировать
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
