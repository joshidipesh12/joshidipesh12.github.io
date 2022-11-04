import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';

const ContactMe = () => {
  const imgRef = useRef();
  const [anchor, setAnchor] = useState({x: 0, y: 0});

  useEffect(() => {
    const rekt = imgRef.current.getBoundingClientRect();
    setAnchor({x: rekt.left + rekt.width / 2, y: rekt.top + rekt.height / 2});
  }, []);

  return (
    <section className="container">
      <div ref={imgRef} className="rnm">
        <Image layout="fill" objectFit="contain" src="/images/ricknmorty.svg" />
      </div>
      <Eye x={331} y={355} a={anchor} />
      <Eye x={318} y={430} a={anchor} />
      <Eye x={165} y={535} a={anchor} />
      <Eye x={160} y={610} a={anchor} />
      <style jsx>{`
        .container {
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          position: relative;
        }
        .rnm {
          position: relative;
          height: 100%;
          width: 100%;
          z-index: 2;
        }
      `}</style>
    </section>
  );
};

const Eye = ({x, y, a}) => {
  const eyeRef = useRef();
  useEffect(() => {
    document.addEventListener('mousemove', e => {
      const angle = getAngle(e.clientX, e.clientY, a.x, a.y);
      eyeRef.current.style.transform = `rotate(${90 + angle}deg)`;
    });
  }, [eyeRef]);

  return (
    <div
      ref={eyeRef}
      style={{
        display: 'flex',
        position: 'absolute',
        top: x,
        left: y,
        height: '14vh',
        width: '14vh',
      }}>
      <svg
        width="91"
        height="91"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="0.336914"
          y="0.526001"
          width="90"
          height="90"
          rx="45"
          fill="white"
        />
        <circle r="4.8" transform="matrix(1 0 0 -1 60.8 45.8)" fill="black" />
      </svg>
    </div>
  );
};

const getAngle = (cx, cy, ex, ey) => {
  const rad = Math.atan2(ey - cy, ex - cx);
  return (rad * 180) / Math.PI;
};

export default ContactMe;
