/** @format */

import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-3xl font-bold inline border-b-4 border-[#B9464C]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>
              Hi. I'm Oleksandr, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Super delighted I made the choice for a career switch some 2 years
              ago. Got accepted at the Becode School bootcamp in Belgium and
              loving life ever since. Finally something I’m passionate about and
              where I’m challenged every single day. Originally from Ukraine. I
              was always curious about technologies. Today, I can say I am
              totally addicted to Coding!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
