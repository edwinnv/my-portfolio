import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <main className="flex flex-col w-full bg-primary-portofolio ">
        <Header />
        <div className="flex flex-col px-20 -tablet:px-5  w-full pb-12 z-0 no-scrollbar">{children}</div>
        <Footer/>
      </main>
    </>
  );
};

export default Layout;
