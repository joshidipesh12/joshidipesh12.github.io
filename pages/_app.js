import '../styles/globals.css';
import {useEffect} from 'react';

function MyApp({Component, pageProps}) {
  useEffect(resize, []);

  return <Component {...pageProps} />;
}

export default MyApp;

const resize = () => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window?.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document?.documentElement?.style?.setProperty?.('--vh', `${vh}px`);

  window?.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window?.innerHeight * 0.01;
    document?.documentElement?.style?.setProperty?.('--vh', `${vh}px`);
  });

  return () => {};
};
