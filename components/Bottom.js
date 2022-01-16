import React from 'react';
import data from '../public/myData.json';
import styles from '../styles/Navbar.module.css';
import {SocialIcon} from 'react-social-icons';

const social_default = {
  bgColor: '#00000000',
  fgColor: '#fff',
  style: {height: 40, width: 40},
};
const isMobile = false//['Android', 'iPhone'].includes(navigator?.platform);

function Bottom() {
  // console.log({navigator})
  return (
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
  );
}

export default Bottom;
