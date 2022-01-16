import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout';
import styles from "../styles/Home.module.css"

function projects({}) {
  return (
    <Layout>
      <div className={styles.home_first}>
        <div></div>
        <div className={styles.my_image}></div>
      </div>
    </Layout>
  );
}

export default projects;
