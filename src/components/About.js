import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className=' bg-[#0a192f]  h-fit'>
                
          <div className='max-w-md mx-auto overflow-hidden md:max-w-4xl w-[100%] py-[2%]'>
            <div className='flex justify-center'>
              <p className='text-[1.5rem] font-semibold text-[#e1dbdb]'> <span className='text-[1.5rem] font-semibold text-[#48b9a5]'>01.</span>  About Me.</p>
            </div>
          </div>
    <div className='max-w-md mx-auto overflow-hidden md:max-w-6xl  '>
          <div className=' grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 '>
            <div className=' h-fit w-[100%] mt-5 px-2 pl-5 '>
                <p className='text-[#65708c] font-semibold text-[1.1rem]'>
                Hello! My name is Joshua and I enjoy creating things that live on 
                the internet. My interest in web development & Mobile Application Development started back in 2021
                 when I decided to try editing custom Tumblr themes — turns out
                  hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p className='text-[#65708c] font-semibold text-[1.1rem]' >
                Fast-forward to today, and I’ve had the privilege of working at
                <span className='text-[#48b9a5]'> an advertising agency, a start-up, a huge corporation, </span>
                 and <span  className='text-[#48b9a5]'>a student-led design studio </span> 
                 My main focus these days is building accessible, inclusive products and digital experiences at
                 <span  className='text-[#48b9a5]'> Upstatement </span> for a variety of clients.
                </p>
                  <br />
                <p className='text-[#65708c] font-semibold text-[1.1rem]'>
                  I also recently <span className='text-[#48b9a5]'>Launch a Project</span> that covers everything you need to build a web 
                  & a mobile Application using  React, Html, Css and Boostrap.
                </p>
                  <br />
                <p className='text-[#65708c] font-semibold text-[1.1rem]'>
                  Here are a few technologies I’ve been working with recently:
                </p>
                

                <div className='mt-5 flex  gap-7'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> HTML </p>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> JavaScript</p>
                </div>
                <div className='flex gap-12'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>CSS </p>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> React Native</p>
                </div>
                <div className='flex gap-10'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>React</p>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> Node.js</p>
                </div>
                <div className='flex gap-2'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Mongo DB</p>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>TailWind Css</p>
                </div>
            </div>
          

            <div className='bg-[#dc38f5] h-[50vh] w-[100%] mt-5 rounded-md bg-transparent'>
              <div className='flex justify-center pt-10 '>
                <img src="./Me2.jpg" alt="" className='rounded-lg border-2 border-[#48b9a5] ' />
              </div>
                
            </div>
          </div>
        </div>
              <div className='flex justify-center pb-[10%] pt-4'>
              <div className='border-2 border-[#48b9a5] w-[10%]  rounded-full '>
              <Link to="/" > <button className='rounded-full'><i class="ri-arrow-left-circle-fill font-semibold text-[#48b9a5]  text-[1.6rem] ml-1"></i></button></Link>
             </div>
              </div>
             
        </div>

  )
}

export default About