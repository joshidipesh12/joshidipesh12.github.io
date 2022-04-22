import Image from 'next/image';
import React, {useState} from 'react';
import Bottom from '../components/Bottom';
import Navbar from '../components/Navbar';
import styles from '../styles/Project.module.css';
import config from '../public/myData.json';

function Projects() {
  const data = config.projects;
  const [activeCard, setActive] = useState(null);

  return (
    <div className={styles.snapContainer}>
      <Navbar containerStyle={{position: 'absolute', top: 0}} />
      {data.map((project, index) => (
        <div key={index} className={styles.section}>
          <h2 className={`${styles.sectionHead} ${styles.neonText}`}>
            {project.title} Projects
          </h2>
          <div className={styles.content}>
            {project.p.map((i, _) => (
              <ProjectCard
                onClick={() => setActive(i)}
                key={_}
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
    </div>
  );
}

const ProjectCard = ({item, onClick, active}) => {
  return (
    <a
      onClick={onClick}
      onTouchStart={onClick}
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
          <a className={styles.cardLink}></a>
        </div>
      </div>
    </a>
  );
};

export default Projects;
