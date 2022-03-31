import React from 'react';
import Navbar from './Navbar';
import Bottom from './Bottom';
import styles from '../styles/Home.module.css';

const Layout = ({children}) => {
  return (
    <div className={styles.main}>
      <Navbar />
      <main>{children}</main>
      <Bottom />
    </div>
  );
};
export default Layout;
