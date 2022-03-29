import React, {FC} from 'react';
import styles from "./FakeAid.module.css";

const FakeAid: FC = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.fakeTitle}></div>
                <div className={styles.fakeText}></div>
                <div className={styles.fakeText}></div>
                <div className={styles.fakeText}></div>
                <div className={styles.fakeText}></div>
            </div>
            <div className={styles.fakeBlock}></div>
        </div>
    );
};

export default FakeAid;