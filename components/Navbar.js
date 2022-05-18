import Link from 'next/link';
import React, {useState} from 'react';
import data from '../public/myData.json';
import styles from '../styles/Navbar.module.css';

function Navbar({containerStyle}) {
  const twoWord = useState(
    data.twoWords[Math.floor(Math.random() * data.twoWords.length)],
  )[0];

  return (
    <header style={containerStyle} className={styles.container}>
      <div className={styles.name}>
        <Link href="/">{`${twoWord}.`}</Link>
      </div>
      <section className={styles.links}>
        <div className={styles.link}>
          <Link href="/resume">RÉSUMÉ</Link>
        </div>
        <div className={styles.link}>
          <Link href="/projects">PROJECTS</Link>
        </div>
        <div className={styles.link}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gdsc.community.dev/department-of-computer-science-university-of-delhi-delhi/">
            LATEST
          </a>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
