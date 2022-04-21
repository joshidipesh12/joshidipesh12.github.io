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
      {data.map(project => (
        <div className={styles.section}>
          <h2 className={`${styles.sectionHead} ${styles.neonText}`}>
            {project.title} Projects
          </h2>
          <motion.div
            drag="x"
            dragConstraints={{right: 0, left: 0}}
            whileDrag={{cursor: 'grabbing'}}
            whileHover={{cursor: 'grab'}}
            className={styles.content}>
            {project.p.map(i => (
              <ProjectCard key={i.title} item={i} />
            ))}
          </motion.div>
        </div>
      ))}
      <div className={styles.section}>
        <h2 className={styles.sectionHead}>Source Code</h2>
        <div className={styles.content}>Cooking up Fun Stuff.!</div>
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
