import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import Bottom from '../components/Bottom';
import Navbar from '../components/Navbar';
import styles from '../styles/Project.module.css';
import config from '../public/myData.json';
import useIsMobile from '../hooks/useIsMobile';

function Projects() {
  const data = config.projects;
  const [activeCard, setActive] = useState(null);

  return (
    <html className={styles.snapContainer} onClick={() => setActive(null)}>
      <Navbar containerStyle={{position: 'absolute', top: 0}} />
      {data.map((project, index) => (
        <div key={index} className={styles.section}>
          <h2 className={`${styles.sectionHead} ${styles.neonText}`}>
            {project.title}
          </h2>
          <div className={styles.content}>
            {project.p.map((i, k) => (
              <ProjectCard
                onClick={() => setActive(i)}
                key={k}
                active={activeCard}
                item={i}
              />
            ))}
          </div>
        </div>
      ))}
      <div className={styles.section}>
        <h2 className={`${styles.sectionHead} ${styles.neonText}`}>
          Source Code
        </h2>
        <div className={styles.content}></div>
        <Bottom />
      </div>
    </html>
  );
}

const ProjectCard = ({item, onClick, active}) => {
  const isMobile = useIsMobile();

  return (
    <a
      onClick={e => {
        isMobile ? null : onClick();
      }}
      onContextMenu={e => {
        onClick();
        e.preventDefault();
      }}
      className={`${styles.projectCard} ${
        item === active ? styles.activeCard : ''
      }`}>
      <div className={styles.cardImage}>
        <Image
          draggable="false"
          src={item.image}
          layout="fill"
          objectFit="cover"
          sizes="20vw"
          priority={true}
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{item.title}</h2>
        <p className={styles.cardDescp}>{item.subtitle}</p>
        <div className={styles.cardLinks}>
          {/* <a className={styles.cardLink}></a> */}
        </div>
      </div>
    </a>
  );
};

export default Projects;
