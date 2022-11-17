import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import profile from '../public/images/edw.jpg';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import hygraphcms from '/public/images/logos/hygraphcms.webp';
import Head from 'next/head';

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
      title: 'React Js',
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
      title: 'Redux',
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
      title: 'Tailwindcss',
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
      title: 'GIT',
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
      title: 'Javascript',
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
      title: 'HTML',
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
      title: 'CSS',
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
      title: 'NextJS',
    },
    {
      icon: <Image src={hygraphcms} alt="cms" width={100} height={100} />,
      title: 'Hygraphcms',
    },
    {
      icon: (
        <SiTypescript
          className="w-full "
          size={'100'}
          color={'#2F74C0'}
          title="react"
        />
      ),
      title: 'Typescript',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <title>About Me</title>
      </header>
      <div className=" w-full h-full flex flex-col items-center pt-20 ">
        <div className="flex -tablet:flex-col items-center">
          <div className=" w-1/2 m-3 flex mx-0 items-center justify-end">
            <Image
              src={profile}
              alt={'me'}
              className="rounded"
              height={500}
              width={350}
            />
          </div>
          <div className="  w-1/2 -tablet:w-full mt-2 flex px-8 flex-col ">
            <span className="h3-title  text-white mt-10 ">Edwin Nuñez</span>
            <span className="text-white font-light mt-20 -tablet:w-full w-1/2 -tablet:mt-10">
              <span className="flex mb-5">
                Edwin is a front-end developer who builds web apps with React
                and frameworks like NextJS, as well as state management tools
                like Redux. He has a wide range of skills, including designing,
                building and implementing user interfaces besides a good English
                level due to previous experience working with native speakers
                from USA and UK.
              </span>
              He enjoys playing video games and attending dev classes. He enjoys
              studying new technology and figuring out how to apply them in
              real-world tasks.
              <span className="flex mt-5">
                {`I like the idea of working in a team, I think ${`it's`} a way to
                  connect with new skills and bring my knowledge to the team to
                  improve productivity in the development of any digital product.
                  I like to discover new things every day and be a valuable asset
                  in any team in which I develop, so I am constantly learning and`}
                researching new technologies.
              </span>
              <a
                className="flex mt-4 underline text-purple-portofolio "
                href="mailto:edwinjunior2000@outlook.com"
              >
                Edwinjunior2000@outlook.com{' '}
              </a>
            </span>
          </div>
        </div>

        <div className="h4 text-white w-full text-center my-5 pt-20 ">
          My top skills
        </div>
        <div className=" grid grid-cols-4 -tablet:grid-cols-2  w-1/2 -tablet:w-full justify-center items-center">
          {skills.map(({ icon, title }, index) => {
            return (
              <div
                key={index}
                className=" flex justify-center items-center w-32 h-36 bg-fill-portofolio rounded-lg mx-4 my-4  justify-items-center justify-self-center"
              >
                <motion.div
                  style={{
                    borderRadius: 30,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2 }}
                  className={'flex  flex-col  items-center justify-center '}
                  title={title}
                >
                  {icon}
                  <span className="text-white ">{title}</span>
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
