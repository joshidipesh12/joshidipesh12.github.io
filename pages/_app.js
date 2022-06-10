import '../styles/globals.css';
import {useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

function MyApp({Component, pageProps, router}) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh1 = window.innerHeight * 0.01,
        diff = vh1 - vh;
      for (
        let i = 0;
        Math.abs(i) <= Math.abs(diff);
        i = diff > 0 ? i + 0.1 : i - 0.1
      ) {
        console.log('here');
        document.documentElement.style.setProperty('--vh', `${vh + i}px`);
      }
    });
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
