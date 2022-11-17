import Head from 'next/head';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full h-full pt-32">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="text-white  h1">{`¡Let's talk!`}</span>
          <span className="text-white pt-5 text-center body-14-regular px-10 w-1/3 tablet:w-1/2 -tablet:w-full ">
            If you are interested in my work or have any questions, do not
            hesitate to write me feel free to contact anytime!
          </span>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
