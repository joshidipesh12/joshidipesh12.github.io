import React from 'react';
import styles from '../styles/test.module.css';

function test() {
  return (
    <div className={styles.container}>
      <div className={styles.containerinside}>
        <div className={styles.circlesmall}></div>
        <div className={styles.circlemedium}></div>
        <div className={styles.circlelarge}></div>
        <div className={styles.circlexlarge}></div>
        <div className={styles.circlexxlarge}></div>
      </div>
    </div>
  );
}

export default test;
