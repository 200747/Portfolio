import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import IrlPic from '../assets/irlpic.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-[1000px] bg-[#21223e] text-gray-300 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-1 px-4'>
            <div className='sm:text-right  font-bold'>
            <div className='sm:text-right pb-8 pl-4'>
            <p className='text-pink-600'>My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Johan</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a web developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a web developer based in The Netherlands. I'm focused on building responsive full-stack websites.  My primary skills are working with front-end.</p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 flex my-2 first-letter: items-center hover:bg-pink-600 hover:border-pink-600'>
              View work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />            
              </span>
            </button>
          </Link>
        </div>
          </div>
            </div>
            <div>
            <p style={{backgroundImage: `url(${IrlPic})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex  mx-auto irl-aaa'></p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home