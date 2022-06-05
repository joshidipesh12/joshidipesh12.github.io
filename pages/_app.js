import '../styles/globals.css';
import {useEffect} from 'react';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';

function MyApp({Component, pageProps, router}) {
  const controls = useAnimation();

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh1 = window.innerHeight * 0.01;
      controls.start({'--vh': vh1});
      vh = vh1;
    });
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        layout
        key={router.route}
        transition={{when: 'afterChildren'}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
