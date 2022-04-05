import Link from 'next/link';
import React from 'react';
import Bottom from '../components/Bottom';
import Navbar from '../components/Navbar';
import styles from '../styles/Project.module.css';

function Projects() {
  return (
    <div className={styles.snapContainer}>
      <div
        style={{backgroundColor: 'magenta'}}
        className={styles.section}>
        <Navbar containerStyle={{position: 'absolute', top: 0}} />
        <div className={styles.content}>Cooking up Fun Stuff.!</div>
      </div>
      <div
        style={{backgroundColor: 'yellow'}}
        className={styles.section}>
        <div className={styles.content}>Cooking up Fun Stuff.!</div>
        </div>
      <div
        style={{backgroundColor: 'green'}}
        className={styles.section}>
        <div className={styles.content}>Cooking up Fun Stuff.!</div>
        </div>
      <div
        style={{backgroundColor: 'red'}}
        className={styles.section}>
        <div className={styles.content}>Cooking up Fun Stuff.!</div>
        <Bottom />
      </div>
    </div>
  );
}

export default Projects;
