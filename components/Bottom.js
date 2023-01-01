import React from 'react';
import data from '../public/myData.json';
import styles from '../styles/Navbar.module.css';
import {SocialIcon} from 'react-social-icons';
import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

// const isMobile = ['Android', 'iPhone'].includes(navigator?.platform);

function Bottom({containerStyle}) {
  return (
    <div className={styles.bottom} style={containerStyle}>
      <Button1 url={data.links['instagram']} color="#ffdf9e" />
      <Button1 url={data.links['facebook']} color="#4267B2" />
      <Button1 url={data.links['linkedin']} color="#0e76a8" />
      <Button1 url={data.links['github']} color="#fff800" />
      <Button1 url={`tel:${data.phone}`} color="#AAFF00" />
      <Button1 url={`mailto:${data.email}`} color="#Bf0f1f" />
    </div>
  );
}

const Button1 = ({url, color}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {}, [active]);

  return (
    <motion.div
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: 20}}
      className={styles.icon}>
      <SocialIcon
        url={url}
        bgColor="#00000000"
        style={{height: 40, width: 40}}
        fgColor={!active ? '#ffffff' : color}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        target="_blank"
      />
    </motion.div>
  );
};

export default Bottom;
