import Link from 'next/link';
import React from 'react';
import Wave from 'react-wavify';

const Banner = () => {
  return (
    <div className="h-[532px] flex  text-white items-center justify-center flex-col mb-32 -tablet:mb-20 z-10">
      <div className="flex w-full justify-center items-center text-center">
        <div className="h1 font-sans w-full ">
          I{`'`}m{' '}
          <span className="  w-full text-purple-portofolio h1">
            {' '}
            Edwin Nuñez.
          </span>
        </div>
      </div>
      <div className=" h1 w-full text-center">front-end developer</div>
      <div className="h5 mt-2">This is my portfolio WEB!</div>
      <div className="w-full justify-center flex mt-3">
        <button className="btn btn-primary my-4 mr-3 px-4 py-2">
          See Projects
        </button>
        <button className="btn btn-secondary my-4 px-4 py-2">
          <a href="/curriculum.pdf" target="_blank">
            Download CV
          </a>
        </button>
      </div>
      <div className={'w-full'}>
        <Wave
          fill="#5C62EC"
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.35,
            points: 3,
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
