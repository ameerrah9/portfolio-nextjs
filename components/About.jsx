import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#00DF9A]'>
            About
          </p>
          <h2 className='py-4'>Hello 👋🏾</h2>
          <p className='py-2 text-gray-600'>
            I creatively develop intuitive software solutions
          </p>
          <p className='py-2 text-gray-600'>
            My name is Ghameerah (Juh-meer-ruh) McCullers, and I'm driven by a
            commitment to creating impactful, user-centric solutions. With a
            robust background in software engineering & development, I excel in
            crafting high-quality, performant code. Proficient in JavaScript
            technologies such as React.js and TypeScript for building scalable
            frontend applications, alongside a solid foundation in backend
            development using Python, including expertise in RESTful API
            creation with Flask and Django. Leveraging over 2 years of
            specialized Software development experience, I bring a deep
            understanding of backend technologies, automated testing, and a
            passion for developing scalable, efficient solutions.
          </p>
          <p className='py-2 text-gray-600'>
            My background actually begins as a student-athlete. I attended
            Central State University, which happens to be one of the first
            Historically Black Colleges/Universities. I graduated in 2017 with
            Cum Laude honors and won a Women’s basketball championship. I then
            started my career as a cook and manager at Waffle House & after two
            years, I decided to transition into tech!
          </p>
          <p className='py-2 text-gray-600'>
            💬 Ask me about Computer Science, JavaScript, Programming, Full
            Stack Engineering, and Breaking into Tech.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <img
            src='/assets/laptopDesk.jpg'
            alt='/'
            className='shadow-xl shadow-gray-400 rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
