import '../styles/globals.css';
import {useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

function MyApp({Component, pageProps, router}) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return (
    <AnimatePresence
      initial={false}
      presenceAffectsLayout
      exitBeforeEnter={true}>
      <motion.div
        key={router.route}
        transition={{duration: 10.2, easings: 'circOut'}}
        initial={{opacity: 0, translateY: 0, display: 'flex'}}
        animate={{opacity: 1, translateY: 0, display: 'flex'}}
        exit={{opacity: 1, translateY: '100%', display: 'flex'}}>
        <Component key={router.route} {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
