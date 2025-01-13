import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pageerrors.module.css'; 

const NotAuth = () => {
    return (
        <div className={styles.notfound}>
            <h1>401</h1>
            <h2>Please log in to get access to this page.</h2>
            <Link to="/login" className={styles.back}>
                Log in
            </Link>
        </div>
    );
}

export default NotAuth;
