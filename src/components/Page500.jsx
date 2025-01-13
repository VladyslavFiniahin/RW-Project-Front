import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pageerrors.module.css'; 

const IntError = () => {
    return (
        <div className={styles.notfound}>
            <h1>500</h1>
            <h2>Щось пішло не так. Ми вже працюємо над цим!</h2>
            <Link to="/" className={styles.back}>
                Повернутися на головну
            </Link>
        </div>
    );
}

export default IntError;