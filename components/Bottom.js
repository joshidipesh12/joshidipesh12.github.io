import React from 'react';
import data from '../public/myData.json';
import styles from '../styles/Navbar.module.css';
import {SocialIcon} from 'react-social-icons';
import Fade from 'react-reveal/Fade';
import {useEffect, useState, useRef} from 'react';

// const isMobile = ['Android', 'iPhone'].includes(navigator?.platform);

function Bottom({containerStyle}) {
  const [entry, setEntry] = useState(false);

  useEffect(() => {
    setEntry(true);
    return () => {};
  }, []);

  return (
    <div className={styles.bottom} style={containerStyle}>
      <Button1 e={entry} url={data.links['instagram']} color="#ffdf9e" />
      <Button1 e={entry} url={data.links['facebook']} color="#4267B2" />
      <Button1 e={entry} url={data.links['linkedin']} color="#0e76a8" />
      <Button1 e={entry} url={data.links['github']} color="#fff800" />
      <Button1 e={entry} url={`tel:${data.phone}`} color="#AAFF00" />
      <Button1 e={entry} url={`mailto:${data.email}`} color="#Bf0f1f" />
    </div>
  );
}

const Button1 = ({url, color, e}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {}, [active]);

  return (
    <Fade when={e} cascade bottom>
      <div className={styles.icon}>
        <SocialIcon
          url={url}
          bgColor="#00000000"
          style={{height: 40, width: 40}}
          fgColor={!active ? '#ffffff' : color}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          target="_blank"
        />
      </div>
    </Fade>
  );
};

export default Bottom;
