/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
  return (
    <div className="w-full ">
      <div className="flex bg-border-portofolio mx-[537px] rounded-md p-4">
        <div className="w-1/4 m-3 rounded-md h-full flex ">
          <img src={'images/edw.jpeg'} alt={'me'} height={200} />
        </div>
        <div className="w-1/2  text-white body-14-regular pl-4">
          <div className="h2 pt-2 mb-4">About Me</div>
          Hola! mi nombre es Edwin y tengo gran afinidad hacía el trabajo
          colaborativo, me gusta crear diseños que inspiren e involucren a las
          personas. Como diseñador UI, considero que un buen producto no solo
          brinda una solución sino que permite crear una experiencia emocional
          en las personas que lo usan.
          <div className="mt-4">
            {' '}
            En mi proceso creativo utilizo herramientas como Figma, Adobe XD,
            Photoshop e Illustrator que me ayudan en el flujo de trabajo para la
            producción de interfaces de usuario.
            <button className="btn btn-secondary mt-3 body-14-regular h-10">Mas acerca de mi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
