import React, {useEffect, useState} from 'react';
import {Fade} from 'react-reveal';

function Loader({visible = true}) {
  const [vis, setVis] = useState(true);

  useEffect(() => {
    if (!visible) {
      setTimeout(() => setVis(false), 310);
    }
    return () => {};
  }, [visible]);

  return vis ? (
    <div className="container">
      <Fade delay={100} when={visible} duration={200} className="loader">
        <div className="loader">
          <img alt="logo" src="icons/vercel.ico" className="logo" />
        </div>
      </Fade>
      <style jsx>{`
        .container {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(1rem, 30vw, 8rem);
          height: clamp(1rem, 30vw, 8rem);
          transform: translate(-50%, -50%);
        }

        .loader {
          width: clamp(1rem, 30vw, 8rem);
          height: clamp(1rem, 30vw, 8rem);
          border-radius: 50%;
          background-color: white;
          background: linear-gradient(
            45deg,
            transparent,
            transparent 40%,
            #e5f403
          );
          animation: loading 1s linear infinite;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes loading {
          0% {
            transform: rotate(0deg);
            filter: hue-rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
            filter: hue-rotate(360deg);
          }
        }

        .loader::before {
          content: '';
          position: absolute;
          top: 6px;
          right: 6px;
          left: 6px;
          bottom: 6px;
          background-color: black;
          border-radius: 50%;
          z-index: 1;
        }

        .loader::after {
          content: '';
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background: linear-gradient(
            45deg,
            transparent,
            transparent 40%,
            #e5f403
          );
          border-radius: 50%;
          z-index: 1;
          z-index: 0;
          filter: blur(30px);
        }

        .logo {
          z-index: 1;
          height: 5vh;
          animation: loading 1s linear infinite reverse;
        }
        }
      `}</style>
    </div>
  ) : null;
}

export default Loader;
