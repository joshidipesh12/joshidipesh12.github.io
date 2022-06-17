import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import {Head, Bottom, Navbar} from '../components';
import styles from '../styles/Project.module.css';
import config from '../public/myData.json';
import useIsMobile from '../hooks/useIsMobile';
import {motion} from 'framer-motion';

function Projects() {
  const data = config.projects;
  const [activeCard, setActive] = useState();

  return (
    <div className={styles.snapContainer}>
      <Head title="Projects" />
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
                key={`${k}${i.title}`}
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
    <button
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
          alt="chevron"
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
          alt={item.title}
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{item.title}</h2>
        <p className={styles.cardDescp}>{item.subtitle}</p>
        <div className={styles.cardLinks}>
          {item.links.map((link, i) => (
            <motion.a
              key={i}
              className={styles.cardLink}
              href={link.url}
              target="_blank"
              whileHover={{filter: 'invert(1) drop-shadow(0 0 0.2em #fff)'}}
              style={{filter: 'invert(1)'}}>
              <Image
                alt={link.type}
                title={link.type}
                src={`stack/${link.icon}`}
                priority
                role="link"
                layout="fill"
                draggable="false"
                objectFit="contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </button>
  );
};

export default Projects;
