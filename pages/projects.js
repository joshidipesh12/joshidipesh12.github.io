import Link from 'next/link';
import React from 'react';
import Bottom from '../components/Bottom';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import styles from '../styles/Project.module.css';

function projects({}) {
  return (
    <main className={styles.main}>
      <Navbar />
      <Bottom />
    </main>
  );
}

export default projects;
