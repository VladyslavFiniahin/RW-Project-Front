import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pageerrors.module.css'; 

const NotFound = () => {
    return (
        <div className={styles.notfound}>
            <h1>404</h1>
            <h2>Сторінку не знайдено</h2>
            <Link to="/" className={styles.back}>
                Повернутися на головну
            </Link>
        </div>
    );
}

export default NotFound;
