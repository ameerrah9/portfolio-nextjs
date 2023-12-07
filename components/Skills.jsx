import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full '>
        <p className='text-xl tracking-widest uppercase text-[#00DF9A]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do 🔧</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto px-2'>
                <Image
                  alt='/'
                  src='/assets/skills/icons8-amazon-web-services-240.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase p-2'>Amazon Web Services</h3>
              </div>
            </div>
          </div>
          <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto px-2'>
                <Image
                  alt='/'
                  src='/assets/skills/icons8-bash-144.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase p-2 p-2'>Command Line</h3>
              </div>
            </div>
          </div>
          <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto px-2'>
                <Image
                  alt='/'
                  src='/assets/skills/icons8-python-200.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase p-2'>Python</h3>
              </div>
            </div>
          </div>
          <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto px-2'>
                <Image
                  alt='/'
                  src='/assets/skills/icons8-nodejs-240.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase p-2'>NodeJS</h3>
              </div>
            </div>
          </div>
          <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto px-2'>
                <Image
                  alt='/'
                  src='/assets/skills/icons8-javascript-144.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase p-2'>Javascript</h3>
              </div>
            </div>
          </div>
          <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto px-2'>
                <Image
                  alt='/'
                  src='/assets/skills/icons8-html-240.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase p-2'>HTML5</h3>
              </div>
            </div>
          </div>
          <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto px-2'>
                <Image
                  alt='/'
                  src='/assets/skills/icons8-github-256.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase p-2'>GitHub</h3>
              </div>
            </div>
          </div>
          <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto px-2'>
                <Image
                  alt='/'
                  src='/assets/skills/icons8-react-480.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase p-2'>React</h3>
              </div>
            </div>
          </div>
          <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto px-2'>
                <Image
                  alt='/'
                  src='/assets/skills/icons8-tailwind-css-240.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase p-2'>Tailwindcss</h3>
              </div>
            </div>
          </div>
          <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto px-2'>
                <Image
                  alt='/'
                  src='/assets/skills/icons8-css-300.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase p-2'>CSS3</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
