import {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import useWindowDimensions from '../hooks/useWindowDimensions';
import data from '../public/myData.json';

const social_default = {
  style: {position: 'absolute'},
  fgColor: 'black',
  bgColor: 'white',
};

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const {height, width} = useWindowDimensions();

  return (
    <div className={styles.container}>
      <Head>
        <title>Hola amigos ✨🎀</title>
        <meta name="description" content="Hi there, I'm Dipesh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.home_first}>
          <Fade cascade right={width > 767} when={loaded}>
            <div className={styles.home_content}>
              <div className={styles.domains}>hi!, i&apos;m</div>
              <div className={`${styles.colorful} ${styles.domains}`}>
                {data.name.toLowerCase()}
              </div>
              <div className={styles.domains}>a full-stack dev</div>
            </div>
          </Fade>
          <Fade delay={500} bottom={width < 767} when={loaded}>
            <div className={styles.my_image}>
              <Image
                priority={true}
                layout="fill"
                objectFit="contain"
                src="/me.png"
                alt="das me!"
                loading="eager"
                onLoadingComplete={() => {
                  setLoaded(true);
                }}
              />
            </div>
          </Fade>
        </div>
      </Layout>

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
