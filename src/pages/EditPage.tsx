import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetUserByIdQuery } from '../redux/usersApi';
import Popup from '../components/Popup';
import styles from './EditPage.module.css'; // Подключение CSS-модуля

const EditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading } = useGetUserByIdQuery(Number(id));
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    username: user?.username || '',
    email: user?.email || '',
    city: user?.address.city || '',
    phone: user?.phone || '',
    companyName: user?.company.name || '',
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!user && !isLoading) {
      navigate('/');
    }
    setFormData({
      name: user?.name || '',
      username: user?.username || '',
      email: user?.email || '',
      city: user?.address.city || '',
      phone: user?.phone || '',
      companyName: user?.company.name || '',
    })
  }, [user, isLoading, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  const handleSave = () => {
    if (validateForm()) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    } else {
      alert('Все поля обязательны для заполнения');
    }
  };

  // Добавляем функцию для перехода на главную страницу
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.editPage}>
      {/* Кнопка "Назад" */}
      <div className={styles.goBackButtonContainer}>
        <button onClick={handleGoBack} className={styles.goBackButton}>
          ← Назад
        </button>
      </div>

      <div className={styles.profileContainer}>
        <div className={styles.profileSidebar}>
          <img src="/path/to/profile-image.jpg" alt="Profile" className={styles.profileImage} />
          <div className={styles.profileOptions}>
            <p>Данные профиля</p>
            <p>Рабочее пространство</p>
            <p>Приватность</p>
            <p>Безопасность</p>
          </div>
        </div>
        <div className={styles.profileForm}>
          <h2 className={styles.formTitle}>Данные профиля</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Никнейм</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Почта</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="city">Город</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Телефон</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="companyName">Название компании</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={handleSave} className={styles.saveButton}>
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {showPopup && <Popup message="Изменения сохранены!" onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default EditPage;
