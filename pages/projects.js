import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import {Head, Bottom, Navbar} from '../components';
import styles from '../styles/Project.module.css';
import config from '../public/myData.json';
import {useIsMobile} from '../hooks';
import {motion} from 'framer-motion';

function Projects() {
  const data = config.projects;
  const isMobile = useIsMobile();
  const [activeCard, setActive] = useState();

  return (
    <div className={styles.snapContainer}>
      <Head title="Projects">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Grape+Nuts&display=swap"
          rel="stylesheet"
        />
      </Head>
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
        {/* comming soon animated typography 3d */}
        <div
          style={{
            position: 'relative',
            minHeight: '80vh',
          }}>
          <div className="stage">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
          </div>
        </div>
        <Bottom />
      </div>
      <style jsx>{`
        * *,
        *::before,
        *::after {
          animation-play-state: running !important;
        }
        @import url('//fonts.googleapis.com/css?family=Pacifico&text=Pure');
        @import url('//fonts.googleapis.com/css?family=Roboto:700&text=css');
        @import url('//fonts.googleapis.com/css?family=Kaushan+Script&text=!');

        // body {
        //   min-height: 450px;
        //   height: 100vh;
        //   margin: 0;
        //   background: radial-gradient(circle, #0077ea, #1f4f96, #1b2949, #000);
        // }

        .stage {
          height: 300px;
          width: 500px;
          margin: auto;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: -30%;
          perspective: 9999px;
          transform-style: preserve-3d;
        }

        .layer {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
          animation: ಠ_ಠ 5s infinite alternate ease-in-out -7.5s;
          animation-fill-mode: forwards;
          transform: rotateY(40deg) rotateX(33deg) translateZ(0);
        }

        .layer:after {
          font: 150px/0.65 'Pacifico', 'Kaushan Script', Futura, 'Roboto',
            'Trebuchet MS', Helvetica, sans-serif;
          content: 'Source Code <>\a  Coming Soon.';
          white-space: pre;
          text-align: center;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 50px;
          color: whitesmoke;
          letter-spacing: -2px;
          text-shadow: 4px 0 10px rgba(0, 0, 0, 0.13);
        }

        .layer:nth-child(1):after {
          transform: translateZ(0px);
        }

        .layer:nth-child(2):after {
          transform: translateZ(-1.5px);
        }

        .layer:nth-child(3):after {
          transform: translateZ(-3px);
        }

        .layer:nth-child(4):after {
          transform: translateZ(-4.5px);
        }

        .layer:nth-child(5):after {
          transform: translateZ(-6px);
        }

        .layer:nth-child(6):after {
          transform: translateZ(-7.5px);
        }

        .layer:nth-child(7):after {
          transform: translateZ(-9px);
        }

        .layer:nth-child(8):after {
          transform: translateZ(-10.5px);
        }

        .layer:nth-child(9):after {
          transform: translateZ(-12px);
        }

        .layer:nth-child(10):after {
          transform: translateZ(-13.5px);
        }

        .layer:nth-child(11):after {
          transform: translateZ(-15px);
        }

        .layer:nth-child(12):after {
          transform: translateZ(-16.5px);
        }

        .layer:nth-child(13):after {
          transform: translateZ(-18px);
        }

        .layer:nth-child(14):after {
          transform: translateZ(-19.5px);
        }

        .layer:nth-child(15):after {
          transform: translateZ(-21px);
        }

        .layer:nth-child(16):after {
          transform: translateZ(-22.5px);
        }

        .layer:nth-child(17):after {
          transform: translateZ(-24px);
        }

        .layer:nth-child(18):after {
          transform: translateZ(-25.5px);
        }

        .layer:nth-child(19):after {
          transform: translateZ(-27px);
        }

        .layer:nth-child(20):after {
          transform: translateZ(-28.5px);
        }

        .layer:nth-child(n + 10):after {
          -webkit-text-stroke: 3px rgba(0, 0, 0, 0.25);
        }

        .layer:nth-child(n + 11):after {
          -webkit-text-stroke: 15px dodgerblue;
          text-shadow: 6px 0 6px #00366b, 5px 5px 5px #002951, 0 6px 6px #00366b;
        }

        .layer:nth-child(n + 12):after {
          -webkit-text-stroke: 15px #0077ea;
        }

        .layer:last-child:after {
          -webkit-text-stroke: 17px rgba(0, 0, 0, 0.1);
        }

        .layer:first-child:after {
          color: #fff;
          text-shadow: none;
        }

        @keyframes ಠ_ಠ {
          100% {
            transform: rotateY(-40deg) rotateX(-43deg);
          }
        }
      `}</style>
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
      {!isActive ? (
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
      ) : null}
    </button>
  );
};

export default Projects;
