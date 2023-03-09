import React from 'react'
import NetflixImg from '../assets/netflixpic.PNG'
import ColorImg from '../assets/colorpickerpic.PNG'
import VoiceImg from '../assets/voicepic.PNG'
import realEstate from '../assets/realestate.jpg'
import WorkImg from '../assets/workImg.jpeg'
import WieImg from '../assets/wiebenje.PNG'
import SnakeImg from '../assets/snakepic.PNG'
import TaskPic from '../assets/taskpic.PNG'


const Work = () => {
  return (
    <div name='work' className='w-full py-4 md:h-[107vh] text-gray-300 bg-[#21223e]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            <div 

            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${NetflixImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:opacity-100'>
              

                    <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Netflix Clone In ReactJS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://netflixreact-theta.vercel.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/200747/netflixreact" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ColorImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              

                <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Color Picker In JS
                  </span>
                  <div className='pt-8 text-center'>
                      <a href="https://colorpicker-chi.vercel.app/" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                      </a>
                      <a href="https://github.com/200747/colorpicker" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>

                  </div>
              </div>
          </div>
                          <div style={{backgroundImage: `url(${VoiceImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              

                    <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Voice Changer In JS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://voicechanger.vercel.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/200747/voicechanger" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WieImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              

                <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Wie ben je In PHP
                  </span>
                  <div className='pt-8 text-center'>
                      <a href="https://wiebenjewatkanje.herokuapp.com/" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                      </a>
                      <a href="https://github.com/200747/EindopdrachtPHP" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>

                  </div>
              </div>
          </div>
          <div style={{backgroundImage: `url(${SnakeImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              

          <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Snake Game In JS
                  </span>
                  <div className='pt-8 text-center'>
                      <a href="https://snake2021-tr7a.vercel.app/" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                      </a>
                      <a href="https://github.com/200747/snake2021" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>
                  </div>
              </div>
          </div>
          <div style={{backgroundImage: `url(${TaskPic})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        

          <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
            <span className='text-2xl font-bold text-white tracking-wider'>
                Task List In React JS
            </span>
            <div className='pt-8 text-center'>
                <a href="https://todolist-ten-theta.vercel.app/" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/200747/todolist" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

            </div>
        </div>
    </div>
    {/* grid item */}
            </div>
        </div>
    </div>
  )
}

export default Work