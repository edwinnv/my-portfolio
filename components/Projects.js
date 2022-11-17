import React from 'react';
import treeApp from '../public/images/treeapp.png';
import makers from '../public/images/makers.png';
import warehouse from '../public/images/warehouse.png';
import arrow from '../public/images/icons/arrow-right.png';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      nameProject: 'TreeApp',
      url: 'https://treeapp.co/',
      image: treeApp,
    },
    {
      nameProject: 'Warehouse',
      url: 'https://www.warehousebox.net/',
      image: warehouse,
    },
    {
      nameProject: 'Makers',
      url: 'https://makersshoes.com/',
      image: makers,
    },
  ];
  return (
    <>
      <div className="text-white h4 pb-4 ">Projects</div>
      <div className=" w-full flex flex-col items-center">
        {projects.map(({ image, url }, index) => {
          return (
            <>
              <div
                className="flex justify-center items-center my-7 cursor-pointer desktop:w-1/2"
                key={index}
              >
                <a href={url} target="_blank" rel="noreferrer">
                  <Image
                    src={image}
                    alt={'project'}
                    className="rounded"
                    height={1000}
                  />
                </a>
              </div>
            </>
          );
        })}
        <button className="btn btn-primary h-[46px]  flex items-center mb-6 tablet:w-44 w-full ">
          <span className="mr-2 font-sans">See more </span>{' '}
          <Image src={arrow} alt={'arrow'} />
        </button>
      </div>
    </>
  );
};

export default Projects;
