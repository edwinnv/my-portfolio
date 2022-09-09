/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import arrow from '../public/images/icons/arrow-right.png';

const AboutMe = () => {
  return (
    <div className="w-full flex  justify-center mb-[128px] -tablet:mb-[48px]">
      <div className="flex w-1/2 -tablet:flex-col  mx-20 -tablet:w-full -tablet:mx-0 bg-border-portofolio rounded-md p-4">
        <div className=" w-1/2 m-3 flex ">
          <img src={'images/edw.jpeg'} alt={'me'} className="rounded" />
        </div>
        <div className="w-full  text-white body-14-regular pl-4">
          <div className=" w-full h2 pt-2 mb-4 font-sans -tablet:h4">
            About Me
          </div>
          Edwin is a front-end developer who builds web apps with React and
          frameworks like NextJS, as well as state management tools like Redux.
          He has a wide range of skills, including building user interfaces. He
          enjoys playing video games and attending dev classes. He enjoys
          studying new technology and figuring out how to apply them in
          real-world tasks.
          <div className="mt-4">
            {' '}
            ...
            <Link href={`/about`}>
              <button className="btn btn-secondary mt-3 body-14-regular h-10 w-48">
                <span className="mr-2">More about me</span>
                <Image src={arrow} alt={'arrow'} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
