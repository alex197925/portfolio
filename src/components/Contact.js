/** @format */

import React from "react";

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
      <form
        method='POST'
        action='https://getform.io/f/68d0c65a-72c0-4d01-a82a-c6fc5520954b'
        className='flex flex-col max-w-[600px] w-full'>
        <div className='pt-40'>
          <p className='text-3xl font-bold inline border-b-4 border-[#B9464C] text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Submit the form below or shoot me an email -
            tolok.oleksandr@gmail.com
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'></textarea>
        <button className='text-white  border-2 hover:bg-[#B9464C] duration-150 hover:border-[#B9464C] px-4 py-3 my-8 flex mx-auto items-center'>
          Le's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
