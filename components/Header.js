import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Header = () => {
  const [opened, setOpened] = useState(false);

  const resetScroll = () => {
    document.body.style['overflow-y'] = 'auto';
  };

  const handleSidebar = () => {
    setOpened(false === opened ? true : false);
    if (!opened) {
      document.body.style['overflow-y'] = 'hidden';
    } else {
      resetScroll();
    }
    setOpened(!opened);
  };

  return (
    <>
      <header className=" flex flex-col w-full bg-primary-portofolio h-16  ">
        <nav className="flex flex-col w-full h-full  border-b border-b-border-portofolio">
          <div className="flex flex-wrap items-center justify-between h-full px-20 -tablet:px-5">
            <Link href="/">
              <span className="flex self-center text-white-portofolio h4 font-semibold whitespace-nowrap font-sans cursor-pointer">
                EdwinNv
                <span className="flex text-purple-portofolio text-sm ">{'</>'} </span>
              </span>
            </Link>
            <div
              className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
              id="mobile-menu-3"
            >
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    href="#"
                    className=" md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-white md:p-0 rounded hover:text-purple-portofolio"
                    aria-current="page"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:text-white md:p-0 hover:text-purple-portofolio"
                  >
                    About me
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:text-white md:p-0 hover:text-purple-portofolio"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:text-white md:p-0 hover:text-purple-portofolio"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={classNames(
                `tham tham-e-squeeze tham-w-6 tablet:hidden `,
                {
                  'tham-active': opened,
                },
              )}
              onClick={() => handleSidebar()}
            >
              <div className="tham-box ">
                <div className="tham-inner bg-white" />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <div
        className={` ${
          !opened
            ? 'hidden'
            : 'flex flex-col px-4 pt-5 w-full  h-screen z-50 transition ease-in-out duration-300 '
        }`}
      >
        <a className="flex text-white font-montserrat cursor-pointer hover:text-purple-portofolio">
          Home Page
        </a>
        <a className="flex text-white font-montserrat mt-10 cursor-pointer hover:text-purple-portofolio">
          About Me
        </a>
        <a className="flex text-white font-montserrat mt-10 cursor-pointer hover:text-purple-portofolio">
          Projects
        </a>
        <a className="flex text-white font-montserrat mt-10 cursor-pointer hover:text-purple-portofolio">
          Contact Me
        </a>
      </div> */}
      <Sidebar opened={opened} setOpened={setOpened}/>
    </>
  );
};

export default Header;
