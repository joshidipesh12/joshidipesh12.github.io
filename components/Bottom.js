import React from 'react';
import data from '../public/myData.json';
import styles from '../styles/Navbar.module.css';
import {SocialIcon} from 'react-social-icons';
import Fade from 'react-reveal/Fade';
import {useEffect, useState} from 'react';

const social_default = {
  bgColor: '#00000000',
  fgColor: '#fff',
  style: {height: 40, width: 40},
};
const isMobile = false; //['Android', 'iPhone'].includes(navigator?.platform);

function Bottom() {
  const [entry, setEntry] = useState(false);

  useEffect(() => {
    setEntry(true);
    return () => {};
  }, []);

  return (
    <Fade when={entry} cascade bottom>
      <div className={styles.bottom}>
        <SocialIcon url={data.links['linkedin']} {...social_default} />
        <SocialIcon url={data.links['instagram']} {...social_default} />
        <SocialIcon url={data.links['facebook']} {...social_default} />
        <SocialIcon url={data.links['github']} {...social_default} />
        <SocialIcon
          url={isMobile ? data.links['whatsapp'] : `tel:${data.phone}`}
          {...social_default}
        />
        <SocialIcon url={`mailto:${data.email}`} {...social_default} />
      </div>
    </Fade>
  );
}

export default Bottom;
