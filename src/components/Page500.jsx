import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pageerrors.module.css'; 

const IntError = () => {
    return (
        <div className={styles.notfound}>
            <h1>500</h1>
            <h2>Something went wrong. We are working on it!</h2>
            <Link to="/" className={styles.back}>
                Back to main page.
            </Link>
        </div>
    );
}

export default IntError;
