import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="flex w-full h-full pt-32">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="text-white  h1">¡Hablemos!</span>
          <span className="text-white pt-5 text-center body-14-regular">
            Si estás interesado en mi trabajo o tienes alguna inquietud, no
            dudes en escribirme!
          </span>
          <form className="flex flex-col h-[546px] bg-fill-portofolio -tablet:w-[328px]  w-[447px] rounded-lg mt-12 px-6 pt-6">
            <span className="text-white font-dmsans spacin body-1">
              Tu nombre
            </span>
            <input
              className="rounded-md bg-primary-portofolio border-1 border-gray-form h-[60px] p-3 mt-2"
              placeholder="Nombre"
            />
            <span className="text-white font-dmsans spacin body-1 pt-8">
              Tu E-mail
            </span>
            <input
              className="rounded-md bg-primary-portofolio border-1 border-gray-form h-[60px] p-3 mt-2"
              placeholder="Ejemplo@gmail.com"
            />
            <span className="text-white font-dmsans spacin body-1 pt-8">
              Tu mensaje
            </span>
            <textarea
              className="rounded-md bg-primary-portofolio border-1 border-gray-form h-[150px] p-3 mt-4"
              placeholder="Hey..."
            />
            <button type="submit" className="btn btn-primary h-[58px] my-6">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
