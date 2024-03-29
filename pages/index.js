import {useState} from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import styles from '../styles/Home.module.css';
import {useIsMobile} from '../hooks';
import data from '../public/myData.json';
import {Head, Navbar, Bottom, Loader} from '../components';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className={styles.container}>
      <Head />
      <Navbar containerStyle={{position: 'absolute', top: 0}} />
      <div className={styles.main}>
        <div className={styles.home_first}>
          <Loader visible={!loaded} />
          <Fade cascade when={loaded}>
            <div className={styles.home_content}>
              <div className={`${styles.domains}`}>hi!, i&apos;m</div>
              <div
                className={`${styles.colorful} ${styles.color1} ${styles.domains}`}>
                {data.name.toLowerCase()}
              </div>
              <div className={`${styles.domains}`}>a web developer</div>
            </div>
          </Fade>
          <Fade delay={500} bottom={isMobile} when={loaded}>
            <div className={styles.my_image}>
              <Image
                priority={true}
                layout="fill"
                objectFit="contain"
                src="/me.webp"
                alt="My Image"
                title="das me!"
                sizes="(max-width: 710px) 30vh, 30vw"
                onLoadingComplete={() => setLoaded(true)}
              />
            </div>
          </Fade>
        </div>
        <Bottom />
      </div>

      <footer className={styles.footer}>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
