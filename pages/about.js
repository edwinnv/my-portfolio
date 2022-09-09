import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import profile from '../public/images/edw.jpeg';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { GrGatsbyjs } from 'react-icons/gr';
import { DiNodejsSmall } from 'react-icons/di';
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
      <div className="h-full flex flex-col">
        <div className=" m-3 flex ">
          <Image src={profile} alt={'me'} className="rounded" />
        </div>
        <div className="ml-2 mt-2 flex flex-col">
          <span className="h3 text-white ">Edwin Nuñez</span>
          <span className="text-white font-light mt-4">
            <span className="flex mb-5">
              Soy Diseñador UI, actualmente vivo en Turbaco-Bolivar, un pueblo a
              las afueras de Cartagena (Colombia).
            </span>
            Me agrada la idea de trabajar en equipo, pienso que es una manera de
            conectar con nuevas habilidades y de brindar mi conocimiento al
            equipo con el fin de mejorar la productividad en el desarrollo de
            algun producto digital. Me gusta descubrir cosas nuevas a diario y
            ser un activo valioso en cualquier equipo en el que me desarrolle,
            por lo que estoy aprendiendo constantemente e investigando acerca de
            las nuevas tendencias. Trato de buscar todo el Feedback posible en
            los proyectos, con el fin de mejorar y poder hacer diseños que no
            solo sean atractivos esteticamente sino que sean accesibles y
            funcionales por lo que me gusta trabajar muy de la mano con los
            stakeholders. Hablemos!
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
