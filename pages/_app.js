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
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        transition={{duration: 1.2, easings: 'circOut'}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{translateY: '100%'}}>
        <Component key={router.route} {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
