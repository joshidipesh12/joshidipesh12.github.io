import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import Bottom from '../components/Bottom';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import styles from '../styles/Resume.module.css';

function Resume() {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.main}>
      <Navbar containerStyle={{position: 'sticky', top: 0}} />
      <Loader visible={loading} />
      <div className={styles.resume}>
        <iframe
          loading="eager"
          onLoad={e => {
            console.log(e);
          }}
          className={styles.pdf}
          // src="https://docs.google.com/document/d/e/2PACX-1vQs9FdG0TZFr8F3A06znseyRHyAKCnsvZ9NR553iTCKoOFLWhV_RZgLqOwnd8hYV_fXg-eYu5QJKLqe/pub?embedded=true"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQzs0kvGeQeRyf7BR1JgvCz%2FDIPESH-JOSHI---CV%3Fnode-id%3D399%253A3"
          allowFullScreen></iframe>
      </div>
      <Bottom />
    </div>
  );
}

export default Resume;
