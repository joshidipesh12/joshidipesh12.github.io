import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import Bottom from '../components/Bottom';
import Navbar from '../components/Navbar';
import styles from '../styles/Project.module.css';
import config from '../public/myData.json';
import useIsMobile from '../hooks/useIsMobile';

function Projects() {
  const data = config.projects;
  const [activeCard, setActive] = useState();

  return (
    <div className={styles.snapContainer}>
      <Navbar containerStyle={{position: 'absolute', top: 0}} />
      {data.map((project, index) => (
        <div key={index} className={styles.section}>
          <h2 className={`${styles.sectionHead} ${styles.neonText}`}>
            {project.title}
          </h2>
          <div className={styles.content}>
            {project.p.map((i, k) => (
              <ProjectCard
                activate={rev => setActive(rev ?? i.title)}
                key={k}
                isActive={activeCard === i.title}
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
    </div>
  );
}

const ProjectCard = ({item, activate, isActive = false}) => {
  const isMobile = useIsMobile();

  return (
    <div
      onContextMenu={e => {
        activate();
        e.preventDefault();
      }}
      className={`${styles.projectCard} ${
        isActive ? styles.activeCard : '' //styles.nonActive
      }`}>
      <div
        className={styles.expand}
        onClick={e => {
          activate(isActive ? isActive : null);
        }}>
        <Image
          layout="fixed"
          height="40px"
          width="40px"
          src="/icons/chevron-down.svg"
        />
      </div>
      <div className={styles.cardImage}>
        <Image
          draggable="false"
          src={item.image}
          layout="fill"
          objectFit="cover"
          priority
          role="img"
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{item.title}</h2>
        <p className={styles.cardDescp}>{item.subtitle}</p>
        <div className={styles.cardLinks}>
          {/* <a className={styles.cardLink}></a> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
