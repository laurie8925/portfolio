import React, { useEffect } from 'react';
import { gsap, Power1, Elastic } from 'gsap'; // Assuming you're using GSAP for animations

const SparkleAnimation = () => {
  useEffect(() => {
    const twinkle1 = document.querySelectorAll('#sparkle1 > .st6, #sparkle1 > .st7');
    const twinkle2 = document.querySelectorAll('#sparkle2 > .st6, #sparkle2 > .st7');
    const twinkle3 = document.querySelectorAll('#sparkle3 > .st6, #sparkle3 > .st7');
    const twinkle4 = document.querySelectorAll('#sparkle4 > .st6, #sparkle4 > .st7');

    const sparkleTl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      onComplete: function() {
        this.restart();
      }
    });

    sparkleTl.to(twinkle1, { duration: 1, scale: 0, transformOrigin: 'center center', ease: Power1.easeOut }, 'sparkle')
      .to(twinkle2, { duration: 1, scale: 0, transformOrigin: 'center center', ease: Power1.easeOut }, 'sparkle+=0.3')
      .to(twinkle3, { duration: 1, scale: 0, transformOrigin: 'center center', ease: Power1.easeOut }, 'sparkle+=0.6')
      .to(twinkle4, { duration: 1, scale: 0, transformOrigin: 'center center', ease: Power1.easeOut }, 'sparkle+=0.9')
      .to(twinkle1, { duration: 1, scale: 1, transformOrigin: 'center center', ease: Elastic.easeOut }, 'sparkleshow')
      .to(twinkle2, { duration: 1, scale: 1, transformOrigin: 'center center', ease: Elastic.easeOut }, 'sparkleshow+=0.3')
      .to(twinkle3, { duration: 1, scale: 1, transformOrigin: 'center center', ease: Elastic.easeOut }, 'sparkleshow+=0.6')
      .to(twinkle4, { duration: 1, scale: 1, transformOrigin: 'center center', ease: Elastic.easeOut }, 'sparkleshow+=0.9');

    sparkleTl.timeScale(2);

    // Cleanup function
    return () => {
      sparkleTl.kill();
    };
  }, []); // Empty dependency array to run the effect only once after mounting

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full w-full relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 92.5 132.2"
          className="absolute inset-0 w-full h-full"
        >
          <style type="text/css">
            {`
              .st6{fill:#FF9F9F;} 
              .st7{fill:#ffd2d2;}
            `}
          </style>
          <g id="sparkle1" className='translate-y-6.5 md:-translate-x-0.5 lg:-translate-x-8'>
            <path className="st6" d="M11,100.2c0,0,2-10.4,3.8,0c0,0,10,1.8,0,3.6c0,0-1.8,10.6-3.8,0C5,102.7,5.3,101.5,11,100.2z" />
            <path className="st6" d="M6.3,85.1c0,0,1.2-6.4,2.4,0c0,0,6.2,1.1,0,2.2c0,0-1.1,6.6-2.4,0C2.6,86.6,2.7,85.8,6.3,85.1z" />
            <path className="st6" d="M31.2,108.9c0,0,1.2-6.4,2.4,0c0,0,6.2,1.1,0,2.2c0,0-1.1,6.6-2.4,0C27.5,110.4,27.6,109.6,31.2,108.9z" />
            <circle className="st7" cx="6.6" cy="96.8" r="1.2" />
            <ellipse transform="matrix(0.6415 -0.7671 0.7671 0.6415 -64.7766 45.2241)" className="st7" cx="16" cy="91.9" rx="1.2" ry="1.2" />
            <circle className="st7" cx="37.5" cy="104.8" r="1.2" />
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 92.5 132.2"
          className="absolute inset-0 w-full h-full"
        >
          <g id="sparkle2" className='translate-x-2 -translate-y-3 md:-translate-x-0.5 lg:-translate-x-7'>
            <path className="st6" d="M17.4,31.5c0,0,2-10.4,3.8,0c0,0,10,1.8,0,3.6c0,0-1.8,10.6-3.8,0C11.4,33.9,11.7,32.7,17.4,31.5z" />
            <path className="st6" d="M8.2,24.9c0,0,1.2-6.4,2.4,0c0,0,6.2,1.1,0,2.2c0,0-1.1,6.6-2.4,0C4.5,26.4,4.6,25.6,8.2,24.9z" />
            <circle className="st7" cx="1.2" cy="26.4" r="1.2" />
            <circle className="st7" cx="25.7" cy="26" r="1.2" />
            <ellipse transform="matrix(0.6415 -0.7671 0.7671 0.6415 -23.9199 18.6547)" className="st7" cx="8" cy="34.9" rx="1.2" ry="1.2" />
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 92.5 132.2"
          className="absolute inset-0 w-full h-full"
        >
          <g id="sparkle3" className='-translate-x-4.75 translate-y-5 sm:translate-y-5 md:-translate-x-0.5 lg:translate-x-7'>
            <path className="st6" d="M82,4.2c0,0,0.7-3.7,1.4,0c0,0,3.6,0.6,0,1.3c0,0-0.7,3.8-1.4,0C79.9,5.1,79.9,4.6,82,4.2z" />
            <path className="st6" d="M64.2,2.9c0,0,1.2-6.4,2.4,0c0,0,6.2,1.1,0,2.2c0,0-1.1,6.6-2.4,0C60.5,4.4,60.6,3.6,64.2,2.9z" />
            <path className="st6" d="M76.1,13.8c0,0,0.9-4.7,1.7,0c0,0,4.5,0.8,0,1.6c0,0-0.8,4.8-1.7,0C73.4,14.9,73.6,14.4,76.1,13.8z" />
            <circle className="st7" cx="71.6" cy="8.8" r="1.2" />
            <circle className="st7" cx="84.5" cy="11.8" r="1.2" />
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 92.5 132.2"
          className="absolute inset-0 w-full h-full"
        >
          <g id="sparkle4" className='-translate-x-6 translate-y-4.5 sm:translate-y-5 sm:-translate-x-1 md:-translate-x-0.5 lg:translate-x-7'>
            <path className="st6" d="M86.7,92.1c0,0,1.7-8.9,3.3,0c0,0,8.6,1.5,0,3.1c0,0-1.6,9.1-3.3,0C81.6,94.2,81.8,93.2,86.7,92.1z" />
            <path className="st6" d="M82,101.2c0,0,0.7-3.7,1.4,0c0,0,3.6,0.6,0,1.3c0,0-0.7,3.8-1.4,0C79.9,102.1,79.9,101.6,82,101.2z" />
            <circle className="st7" cx="97.5" cy="92.8" r="1.2" />
            <circle className="st7" cx="75.5" cy="103.8" r="1.2" />
            <ellipse transform="matrix(0.6415 -0.7671 0.7671 0.6415 -47.4552 106.2907)" className="st7" cx="90" cy="103.9" rx="1.2" ry="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SparkleAnimation;
