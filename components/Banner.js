import React from 'react';

const Banner = () => {
  return (
    <div className="h-[512px] flex  text-white items-center justify-center flex-col mb-32 -tablet:mb-20 -z-10">
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
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Banner;
