import '../styles/globals.css';
import {useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

function MyApp({Component, pageProps, router}) {
  useEffect(resize, []);

  return (
    <AnimatePresence key={router.route} exitBeforeEnter>
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

const resize = () => {
  let vh = window?.innerHeight * 0.01;
  document?.documentElement?.style?.setProperty?.('--vh', `${vh}px`);

  window?.addEventListener('resize', () => {
    // We execute the same script as before
    let vh1 = window?.innerHeight * 0.01;

    if (Math.abs(vh1 - vh) > 0.4) {
      document?.documentElement?.style?.setProperty?.('--vh', `${vh1}px`);
      vh = vh1;
    }
  });

  return () => {};
};
