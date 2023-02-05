import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
<<<<<<< HEAD
    <div className='w-full h-screen bg-black'>

=======
    <div name='home' className='w-full h-screen bg-black'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Johan</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a full stack developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, dignissimos non possimus ipsam nobis adipisci ad voluptatum dolore incidunt debitis. Pariatur modi, temporibus tempora alias magni dicta quae distinctio placeat.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View work
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3' />
          </span>
          </button>
        </div>
      </div>
>>>>>>> c80d042 (second push)
    </div>
  )
}

export default Home