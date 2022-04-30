import {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import styles from '../styles/Home.module.css';
import {useIsMobile} from '../hooks';
import data from '../public/myData.json';
import Navbar from '../components/Navbar';
import Bottom from '../components/Bottom';
import Loader from '../components/Loader';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className={styles.container}>
      <Head>
        <title>Hola amigos ✨🎀</title>
        <meta name="description" content="Hi there, I'm Dipesh" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Navbar containerStyle={{position: 'absolute', top: 0}} />
        <div className={styles.home_first}>
          <Loader visible={!loaded} />
          <Fade cascade right={!isMobile} when={loaded}>
            <div className={styles.home_content}>
              <div className={styles.domains}>hi!, i&apos;m</div>
              <div className={`${styles.colorful} ${styles.domains}`}>
                {data.name.toLowerCase()}
              </div>
              <div className={styles.domains}>a full-stack dev</div>
            </div>
          </Fade>
          <Fade delay={500} bottom={isMobile} when={loaded}>
            <div className={styles.my_image}>
              <Image
                priority={true}
                layout="fill"
                objectFit="contain"
                src="/me.webp"
                alt="das me!"
                loading="eager"
                onLoadingComplete={() => {
                  setLoaded(true);
                }}
              />
            </div>
          </Fade>
        </div>
        <Bottom containerStyle={{position: 'absolute', bottom: 0}} />
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
