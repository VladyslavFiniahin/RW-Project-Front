import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pageerrors.module.css'; 

const NotAuth = () => {
    return (
        <div className={styles.notfound}>
            <h1>401</h1>
            <h2>Будь ласка, увійдіть, щоб отримати доступ до цієї сторінки</h2>
            <Link to="/" className={styles.back}>
                Увійти
            </Link>
        </div>
    );
}

export default NotAuth;
