import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
  
      <main className="flex flex-col w-full bg-primary-portofolio ">
        <Header />
        <div className="flex flex-col w-full pb-12 z-0 no-scrollbar">{children}</div>
        <Footer/>
      </main>
    </>
  );
};

export default Layout;
