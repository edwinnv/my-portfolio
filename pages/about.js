import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import profile from '../public/images/edw.jpg';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';

function About() {
  const skills = [
    {
      icon: (
        <FaReact
          className="w-full "
          size={'100'}
          color={'#60DAFB'}
          title="react"
        />
      ),
    },
    {
      icon: (
        <SiRedux
          className="w-full "
          size={'100'}
          color={'#7146B5'}
          title="react"
        />
      ),
    },

    {
      icon: (
        <SiTailwindcss
          className="w-full "
          size={'100'}
          color={'#35B4EC'}
          title="react"
        />
      ),
    },
    {
      icon: (
        <FaGitAlt
          className="w-full "
          size={'100'}
          color={'#E44B30'}
          title="react"
        />
      ),
    },
    {
      icon: (
        <SiJavascript
          className="w-full "
          size={'100'}
          color={'#EBD41C'}
          title="react"
        />
      ),
    },
    {
      icon: (
        <AiFillHtml5
          className="w-full "
          size={'100'}
          color={'#E5542F'}
          title="react"
        />
      ),
    },
    {
      icon: (
        <FaCss3Alt
          className="w-full "
          size={'100'}
          color={'#0277BB'}
          title="react"
        />
      ),
    },
    {
      icon: (
        <SiNextdotjs
          className="w-full "
          size={'100'}
          color={'#F2F2F2'}
          title="react"
        />
      ),
    },
  ];

  return (
    <Layout>
      <header>
        <title>About Me</title>
      </header>
      <div className="h-full flex flex-col">
        <div className=" m-3 flex  ">
          <Image src={profile} alt={'me'} className="rounded" width={400} height={600} />
        </div>
        <div className="ml-2 mt-2 flex flex-col">
          <span className="h3 text-white ">Edwin Nuñez</span>
          <span className="text-white font-light mt-4">
            <span className="flex mb-5">
              Edwin is a front-end developer who builds web apps with React and
              frameworks like NextJS, as well as state management tools like
              Redux. He has a wide range of skills, including building user
              interfaces. He also keeps improving his basic skills on Ruby on
              Rails.
            </span>
            In his leisure time, he enjoys playing video games and attending dev
            classes. He enjoys studying new technology and figuring out how to
            apply them in real-world tasks.
            <a
              className="flex mt-4 underline text-purple-portofolio "
              href="mailto:edwinjunior2000@outlook.com"
            >
              edwinjunior2000@outlook.com{' '}
            </a>
          </span>
        </div>
        <div className="h4 text-white w-full text-center my-5">
          My top skills
        </div>
        <div className=" grid grid-cols-2  w-full justify-center items-center">
          {skills.map(({ icon }, index) => {
            return (
              <div
                key={index}
                className=" flex justify-center items-center w-32 h-28 bg-fill-portofolio rounded-lg mx-4 my-4 justify-items-center justify-self-center"
              >
                <motion.div
                  style={{
                    borderRadius: 30,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2 }}
                  className={'flex'}
                >
                  {icon}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default About;
