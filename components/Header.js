import React from 'react';

const Header = () => {
  return (
    <div className=" w-full bg-primary-portofolio h-16 ">
      <nav className="w-full h-full  border-b border-b-border-portofolio">
        <div className="flex flex-wrap items-center justify-between h-full mx-20">
          <span className="self-center text-white-portofolio h4 font-semibold whitespace-nowrap">
            Edwin Portofolio
          </span>
          <div
            className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className=" md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-white md:p-0 rounded"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:text-white md:p-0"
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:text-white md:p-0"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:text-white md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
