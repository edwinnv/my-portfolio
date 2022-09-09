import Image from 'next/image';
import React from 'react';
import linkdin from '../public/images/logos/linkdin.svg';
import instagram from '../public/images/logos/instagram.svg';

const Footer = () => {
  return (
    <div className="w-full flex justify-center item-center flex-col text-center">
      <div className="w-full text-white  border-t-1 border-b-1 border-gray-portofolio">
        <div className="flex -tablet:flex-col w-full justify-around py-8">
          <span className=" flex text-white font-poppins h2  mb-3 text-center justify-center ">
            EdwinNv  <span className='text-purple-portofolio text-sm'>{'</>'} </span>
          </span>

          <div className="flex flex-col">
            <span className="w-full text-acento-portofolio font-semibold">
              Home Page
            </span>
            <span className="w-full text-white font-light my-4">About Me</span>
            <span className="w-full text-white font-light mb-4">Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="w-full text-acento-portofolio font-semibold">
              Contant Me
            </span>
            <span className="w-full text-white font-light my-4">Email</span>
            <span className="w-full text-white font-light mb-4">LinkdIn</span>
          </div>
          <div className="flex flex-col">
            <span className="w-full text-acento-portofolio font-semibold">
              Social
            </span>
            <div className="flex w-full justify-center my-4">
              <a
                className="flex cursor-pointer"
                href="https://www.linkedin.com/in/edwin-nv-155883238/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={linkdin} alt={'linkdin'} />
              </a>
              <a
                className="flex ml-4 cursor-pointer"
                href="https://www.instagram.com/edwin_nv/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={instagram} alt={'instagram'} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="text-white font-sans w-full mt-3 pb-4">
        © 2022 Edwin Nuñez{' '}
      </span>
    </div>
  );
};

export default Footer;
