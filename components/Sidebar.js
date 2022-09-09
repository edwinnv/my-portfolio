import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const Sidebar = ({ opened, setOpened }) => {
  return (
    <AnimatePresence>
      {opened && (
        <>
          <motion.div
            initial={{ x: '100%' }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '100%',
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed bg-primary-portofolio text-white shadow-lg top-16 right-0 w-full  h-full p-5 z-20"
          >
            <div
              className={` 
            'flex flex-col  pt-5 w-full  h-screen z-50   '
        }`}
            >
              <Link href={`/`}>
                <span className="     flex text-white font-montserrat cursor-pointer hover:text-purple-portofolio">
                  Home Page
                </span>
              </Link>
              <Link href={`/about`}>
                <span className="flex text-white font-montserrat mt-10 cursor-pointer hover:text-purple-portofolio">
                  About Me
                </span>
              </Link>
              <Link href={`/contact`}>
                <span className="flex text-white font-montserrat mt-10 cursor-pointer hover:text-purple-portofolio">
                  Projects
                </span>
              </Link>
              <Link href={`/contact`}>
                <span className="flex text-white font-montserrat mt-10 cursor-pointer hover:text-purple-portofolio">
                  Contact Me
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
            onClick={() => setOpened((opened) => !opened)}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
