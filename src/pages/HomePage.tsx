import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersQuery } from '../redux/usersApi';
import { archiveUser, hideUser, setUsers, unarchiveUser } from '../redux/usersSlice';
import UserCard from '../components/UserCard';
import { RootState } from '../redux/store';
import Loader from '../components/Loader';
import styles from './HomePage.module.css'; // Импортируем стили как модуль

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { archived, visible } = useSelector((state: RootState) => state.users);
  const { data: users, isLoading } = useGetUsersQuery();

  // Обновляем глобальное состояние только если users не undefined
  useEffect(() => {
    if (users) {
      dispatch(setUsers(users));
    }
  }, [users, dispatch]); // Добавляем users в зависимости

  if (isLoading) return <Loader />;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Активные</h1>
      <div className={styles.userList}>
        {visible.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onArchive={() => dispatch(archiveUser(user))}
            onHide={() => dispatch(hideUser(user))}
          />
        ))}
      </div>

      <h2 className={styles.subTitle}>Архив</h2>
      <div className={styles.userList}>
        {archived.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onUnarchive={() => dispatch(unarchiveUser(user))}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
