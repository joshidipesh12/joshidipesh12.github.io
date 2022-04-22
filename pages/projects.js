import Image from 'next/image';
import React from 'react';
import Bottom from '../components/Bottom';
import Navbar from '../components/Navbar';
import styles from '../styles/Project.module.css';
import config from '../public/myData.json';
import {motion} from 'framer-motion';

function Projects() {
  const data = config.projects;
  // const [active, setActive] = useState(second)

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
              <ProjectCard key={_} item={i} />
            ))}
          </div>
        </div>
      ))}
      <div className={styles.section}>
        <h2 className={`${styles.sectionHead} ${styles.neonText}`}>
          Source Code
        </h2>
        <div className={styles.content}>
          <div style={{flex: 1, backgroundColor: 'grey'}}></div>
        </div>
        <Bottom />
      </div>
    </div>
  );
}

const ProjectCard = ({item}) => {
  return (
    <motion.div key={item.title} className={styles.projectCard}>
      <div className={styles.cardImage}>
        <Image
          draggable="false"
          src={item.image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{item.title}</h2>
        <p className={styles.cardDescp}>{item.subtitle}</p>
        <div>
          <a className={styles.cardLink}></a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
