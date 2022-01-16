import Link from 'next/link';
import React from 'react';
import data from '../public/myData.json';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const twoWord =
    data.twoWords[Math.floor(Math.random() * data.twoWords.length)];
  return (
    <header className={styles.container}>
      <div className={styles.name}>
        <Link href="/">{`${twoWord}.`}</Link>
      </div>
      <section className={styles.links}>
        <div className={styles.link}>
          <Link href="/projects">RESUME</Link>
        </div>
        <div className={styles.link}>
          <Link href="/projects">PROJECTS</Link>
        </div>
        <div className={styles.link}>
          <Link href="/projects">LATEST</Link>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
