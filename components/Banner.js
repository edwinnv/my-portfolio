import React from 'react';

const Banner = () => {
  return (
    <div className="w-full h-[832px] flex  text-white items-center justify-center flex-col">
      <div className="h1">
        I{`'`}m{' '}
        <span className="text-purple-portofolio h1 "> Edwin Nuñez.</span>
      </div>
      <div className="mt-5 h1">front-end</div>
      <div className="h5 mt-2">Este es mi Portafolio web!</div>
      <div className="w-full justify-center flex mt-3">
        <button className="btn btn-primary my-4 mr-3 px-4 py-2">
          Ver Proyectos
        </button>
        <button className="btn btn-secondary my-4 px-4 py-2">Descargar CV</button>
      </div>
    </div>
  );
};

export default Banner;
