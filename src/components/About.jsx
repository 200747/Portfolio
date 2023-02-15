import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#21223e] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, my name is Johan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building all kinds of websites that improves the lives around me. I always had a passion for coding since i was a kid. Over the years I have been educated to being a front and back-end developer.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About