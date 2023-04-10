import React from 'react'
import Navbar from './Navbar'
// import Me from  ''
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    const [name, setName] = useState("website")

    const [Website, setWebsite] = useState(
      { name: "", texts:'', text:`Website Developer In my past role, I was responsible for creating cohesive and visually attractive front-end designs. I also helped with back-end design to ensure the websites were user-friendly. Working on both ends increased my knowledge of the fundamentals required to enhance applications for both mobile and web users `
      
    }
      
    )
      
      
    function changename() {
      setWebsite({name: "website", texts:''})
    }
      


  return (
    
    <div className='bg-[#0a192f]  h-fit '>
      <Navbar/>

      <br /> 
      
  

        <div className=' mt-[15%] px-[9%] grid  grid-cols-2 shrink-0 '>
            <p className='text-[#59e2c5]  text-xl '>Hi, my name is</p> <br />
        </div>   
        <div className='max-w-md mx-[9%]  overflow-hidden md:max-w-2xl'>
        <p className='text-[#ccd6f6] text-[45px] pt-5 font-bold md:flex '>Osagie Joshua.</p>
        </div>
        <div className='md:flex  px-[9%] py-3 max-w-md   overflow-hidden md:max-w-2xl'>
          <p className='text-[25px] font-bold text-[#8892b0] '>I build things for the Web.</p>
        </div>

        <div className='px-[9%] py-2 w-24 min-w-full max-w-md mx-auto  overflow-hidden md:max-w-2xl '>
          <p className='text-[#8892b0] text-[20px]'>I’m a software engineer specializing in building (and occasionally <br />
          designing) exceptional digital experiences. Currently, I’m focused on <br />
          building accessible, human-centered products </p> 
        </div>

        
        <Link to="/Resume">
        <div className='px-[9%] py-2 mb-[18%]'>
          <button className='rounded-lg border-solid border-2 border-[#40a496] h-11 w-24 min-w-[20%] text-[#40a496] font-semibold'>My Course</button>
        </div>
        </Link>

       
        <div className=' flex mx-[15%] max-w-md   overflow-hidden md:max-w-2xl text-[1.5rem]'>
            <p className='text-[#40a496] text-[1.2rem] font-semibold'>01. <span className='text-[#ccd6f6]'>About Me</span></p>
            <div className='border-t-[1px] border-[#233554] w-[50%] mt-5 outline-1 mx-[2%]'></div>
            
        </div>
          
        <div>
          
        </div>
          {/* _________About Me___________ */}
          
        <div className='max-w-md mx-auto overflow-hidden md:max-w-4xl w-[100%]  '>
          <div className=' grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 '>
            <div className='  w-[100%] mt-5 px-2 pl-5 h-fit'>
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
          

            <div className='bg-[#dc38f5] h-[50vh] w-[100%] mt-10 rounded-md bg-transparent'>
              <div className='flex justify-center pt-10 '>
                <img src="./Me2.jpg" alt="" className='rounded-lg border-2 border-[#48b9a5] ' />
              </div>
                
            </div>
          </div>
        </div>


        {/* ________Experience____________ */}

        <div>
        <div className=' flex mx-[15%] max-w-md   overflow-hidden md:max-w-2xl text-[1.5rem] mt-10'>
            <p className='text-[#40a496] text-[1.2rem] font-semibold'>02. <span className='text-[#ccd6f6]'>My Skill</span></p>
            <div className='border-t-[1px] border-[#233554] w-[50%] mt-5 outline-1 mx-[2%]'></div>
        </div>
        </div>
        
        {/* ________EXPERIENCE________ */}
        
        <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl pt-[5%] " id='Experience '>

              <div className=' w-[100%]  mt-5 flex gap-10 pt-3 justify-center h-fit mb-10'>
                <div className='website__div h-fit'>
                <p className="pl-9 font-semibold text-[#48b9a5] text-[1rem] cursor-pointer"
                 onClick={()=> setWebsite ({name: "Website Developer", text:`In my Present role, I am responsible for 
                 creating cohesive and visually attractive front-end designs.
                  I also helped with back-end design to ensure the websites were user-friendly and flexsible. 
                  Working on both ends increased my knowledge
                   of the fundamentals required to enhance
                  applications for both mobile. I alos Build My Websites
                  using : React, Html, Css, Tailwind & JavaScript.`,  })}>
                  Website </p>
                  </div>
                
                <p className=" font-semibold text-[#48b9a5] text-[1rem] cursor-pointer" 
                  onClick={()=> setWebsite ({name: "Mobile Application Developer", text: `
                  I am a positive, enthusiastic and competent Mobile Application Developer and Currently, I am also working to improve my mobile app development skills.
                   Along with technical skills,
                   I have good communication skills that I feel are necessary to accomplish daily responsibilities effectively.
                   I also have internship experience at Bizzmarrow Tech Hub company and gained real-world skills
                   I alos Build My Mobile Applications
                  using : React Native, Css, NativeTailwind JavaScript & Expo CLI.` }) }
                >Application</p>
                <p className=" font-semibold text-[#48b9a5] text-[1rem] cursor-pointer"
                  onClick={()=> setWebsite ({name:"Computer Engineer" , text: `Computer engineering is the discipline
                   that embodies the science and technology of design, construction, implementation,
                   and maintenance of software and hardware components of modern computing systems and computer-controlled equipment,
                   and am a skillied hardware engineer with 3 years experience.`})}
                >Computer</p>
              </div>


              <div className='b-[#48b9a5] w-[100%] h-[40vh] '>
                  <p className="font-bold text-[1.3rem] pl-3 text-[#e1dbdb]"> {Website.name}</p>
                  <p className='font-semibold text-[1.1rem] pt-4 pl-3 pr-3 text-[#7a85a2]'>{Website.text}</p>
                  
              </div>
              <svg class="animate-bounce w-6 h-6 ...">
 
            </svg>
              
        </div>
        {/* _________MY PROJECTS_________ */}

        <div>
        <div className=' flex mx-[15%] max-w-md   overflow-hidden md:max-w-2xl text-[1.5rem] mt-5'>
            <p className='text-[#40a496] text-[1.2rem] font-semibold'>03. <span className='text-[#ccd6f6]'>Projects</span></p>
            <div className='border-t-[1px] border-[#233554] w-[50%] mt-5 outline-1 mx-[2%]'></div>
        </div>
        </div>

        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
          <p className='font-semibold text-[1.2rem] text-[#ccd6f6]'>Food Delivery Website</p>
        </div>
        
        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
          <div className='mx-5'>
            <img src="/image6a.jpg" alt="" />
          </div>
        </div>

        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
          <div className='b-[#ccd6f6] h-[35vh] w-[95%]'>
            <p className='text-[1.1rem] font-semibold text-[#65708c]'>
              A Food delivery website built with morden designs and amazing features,
              and flexsible for new users and also responsive for all mobile views.
              the website is built with:
            </p>
            
            <div className='mt-5 flex   gap-7'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> React </p> 
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> JavaScript</p>
            </div>
            <div className='flex gap-4'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> Boostrap</p>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> Css</p>
            </div>
            
            <div className='flex mt-3 '>
            <a href="https://tastyfud.netlify.app">
               <p className='pt-1 pl-3 hover:underline decoration-solid
               cursor-pointer text-[#48b9a5] transition ease-in-out'>Click to view website</p> </a> 
            </div>
            
          </div>
        </div>

        


        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
          <p className='font-semibold text-[1.2rem] text-[#ccd6f6]'>Crypto Currency Tracker</p>
        </div>

        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
          <div className='mx-5'>
            <img src="/image2a.jpg" alt="" />
          </div>
        </div>

        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
          <div className='b-[#ccd6f6] h-[35vh] w-[95%]'>
            <p className='text-[1.1rem] font-semibold text-[#65708c]'>
             Crypto Currenct tracker website  where you can get details of the current Crypto
            Currency rate for coin like BITCOIN, ETH, SHIB, BINANCE, TETHER, DOGECOIN & more...
            </p>
            
            <div className='mt-5 flex   gap-7'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> React </p> 
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> JavaScript</p>
            </div>
            <div className='flex gap-10'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>CSS</p>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>API(coingeko)</p>
            </div>
            <div className='flex mt-3 '>
            <div className='flex mt-3 '>
            <a href="https://boisterous-palmier-8a0e31.netlify.app/">
               <p className='pt-1 pl-3 hover:underline decoration-solid
               cursor-pointer text-[#48b9a5] transition ease-in-out'>Click to view website</p> </a> 
            </div>
            
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
          <p className='font-semibold text-[1.2rem] text-[#ccd6f6]'>Local Music Application for Android </p>
        </div>


        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
          <div className='mx-5'>
            <img src="/pone2.png" alt="" className=' rounded-[20px]' />
          </div>
        </div>

        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl h-fit'>
          <div className='b-[#ccd6f6] w-[95%] h-fit'>
            <p className='text-[1.1rem] font-semibold text-[#65708c]'>
              A fast and free Music Application, where all your local downloaded music
              will appear on the application with a good sound quality. Compactable with bluetooth,
              wired and wireless devices.
            </p>
            
            <div className='mt-5 flex   gap-7 h-fit'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> React Native </p> 
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> JavaScript</p>
            </div>
            <div className='flex gap-10'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Tailwind Css</p>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Expo Go</p>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Expo CLI</p>
            </div>
            <div className='flex mt-3 '>
            <a href="https://6oouwiqyfhuxpgttl74zza.on.drv.tw/www.videoplaylist.blog/">
               {/* <i class="ri-links-fill  font-bold text-[1.3rem] text-[#48b9a5]"></i>  */}
               <p className='pt-1 pl-3 hover:underline decoration-solid cursor-pointer text-[#48b9a5] transition ease-in-out'>
                Click to view website</p>
                </a>
            </div>
          </div>
        </div>


        {/* ______UP COMING PROJECTS_____ */}

        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
          <p className='font-semibold text-[43px] text-[#ccd6f6] text-center'>Upcoming Project</p>
        </div>

          <div className='max-w-md mx-auto overflow-hidden md:max-w-6xl mt-10 h-fit'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ml-5 mr-5 h-fit'>
                <div className='  bg-[#112240] shadow-lg shadow-indigo-500/15 pl-5 h-fit pb-10'>
                    <i class="ri-folder-line  text-[55px] text-[#48b9a5]"></i>
                    <p className='text-[#ccd6f6] font-bold text-[1.2rem] overflow-hidden'>Android & IOS E-commerce Application.</p>
                    <p className='pt-5 text-[#a3adcc] font-semibold'>Currently building an e-commerce website for android and IOS,
                    where you can buy and sell goods, building all from scratch. 
                    </p>

                <div className=' flex  mt-5 gap-6 h-fit overflow-hidden'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> React Native</p> 
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> JavaScript</p>
                </div>


                <div className='mt-1 flex gap-[80px] h-fit overflow-hidden'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Expo</p> 
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Tailwind CSS</p>
                </div>

                <div className='mt-1 flex gap-[50px] overflow-hidden '>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Nodde js</p> 
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>MongoDB</p>
                </div>
                
                </div>

                <div className='w-[100%]  bg-[#112240] shadow-lg shadow-indigo-500/15 pl-5 h-fit  pb-[10%]'>
                  <i class="ri-folder-line  text-[55px] text-[#48b9a5]"></i>
                    <p className='text-[#ccd6f6] font-bold text-[1.2rem]'>Android & IOS Video Call Application.</p>
                    <p className='pt-5 text-[#a3adcc] font-semibold'> Working on a video call application with 
                    Video recording,
                    Best HD video quality,
                    Group video calls,
                    Screen sharing,
                    Low latency technologies & Easy scaling,
                    Cross-platform support,
                    End to End Security.
                    </p>

                   <div className=' flex pt-3 gap-6 h-fit'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> React Native</p> 
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> JavaScript</p>
                </div>


                <div className='mt-1 flex gap-[80px]'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Expo</p> 
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> CSS & More...</p>
                </div>
                
              </div>

                
                <div className='w-[100%]  bg-[#112240] shadow-lg shadow-indigo-500/15 pl-5 h-fit pb-[26%]'>
                
                  <i class="ri-folder-line  text-[55px] text-[#48b9a5]"></i>
                    <p className='text-[#ccd6f6] font-bold text-[1.2rem]'>Professional Business Website</p>
                    <p className='pt-5 text-[#a3adcc] font-semibold'> Its a website where you can hire website developers &
                      mobile Application developer  and also hard ware engineer and you can chat with them on the website
                    </p>

                  <div className=' flex mt-5 gap-6 h-fit overflow-hidden '>
                    <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> React </p> 
                    <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> JavaScript</p>
                 </div>

                  <div className='mt-1 flex gap-[40px]'>
                    <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> Css </p> 
                    <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Mongodb</p>
                </div>  


              </div>


                <div className='w-[100%]  bg-[#112240] shadow-lg shadow-indigo-500/15 pl-5 h-fit pb-[16%]'>

                <i class="ri-folder-line  text-[55px] text-[#48b9a5]"></i>
                    <p className='text-[#ccd6f6] font-bold text-[1.2rem]' >Blog Website</p>
                    <p className='pt-5 text-[#a3adcc] font-semibold'>A blog, short for weblog, is a frequently updated web page used for personal commentary or business content.
                     Blogs are often interactive and include sections at the bottom of individual blog posts where readers can leave comments.
                    </p>

                  <div className=' flex mt-5 gap-6 '>
                    <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> HTML </p> 
                    <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> JavaScript</p>
                </div>  

                <div className=' flex mt-1 gap-6 '>
                    <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> Css </p> 
                    <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Mongodb</p>
                </div>
                
                <div className=' flex mt-1 gap-6 '>
                    <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> Node.js</p> 
                    <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>EJS</p>
                </div>  


                </div>
          </div>
        </div>
        

            {/* ______CONTACT_______ */}


          <div className='flex justify-center mt-[10%] max-w-md mx-auto overflow-hidden md:max-w-2xl'>
              <p className='font-semibold text-[43px] text-[#ccd6f6]'>Get In Touch</p>
        </div>

        <div className='max-w-md mx-auto  overflow-hidden md:max-w-2xl'>
            <div className=' w-[100%] h-fit mt-5'>
              <p className='text-center text-[1.2rem] font-semibold text-[#717c99]'>Although I’m currently looking for any new opportunities,
               my inbox is always open.
                 Whether you have a question or just want to say hi, I’ll get back to you immediately!</p>
            </div>
        </div>

        <div className='flex justify-center max-w-md mx-auto  overflow-hidden md:max-w-2xl'>
              <button className="hello___btn">Say Hello</button>
            </div>

              
              <div className="flex justify-end  fixed top-[60%] left-0 right-0 pr-[2%] " >
                <a href="mailto:osagiejoshua16@gmail.com">
                    <p className='josh___text text-[1.2rem] text-[#65708c] md:block hidden'>osagiejoshua16@gmail.com</p>
                </a>
                 

                  <div className='fixed top-[92%] left-[97%] right-0 '>
                      <div className='border-l-2 border-[#8b96b3] h-[10vh] mr-10 md:block hidden'></div>
                  </div>
                  
                
              </div>
            <div className=' mx-[4%] md:block hidden  fixed top-[60%] left-0 right-0 ' >

            <a href="https://www.instagram.com/osagie_joshua_/?igshid=YTY2NzY3YTc%3D">
                <i class="ri-instagram-line text-[1.5rem] text-[#65708c]"></i> <br />
            </a>

            <a href="mailto:osagiejoshua16@gmail.com">
                <i class="ri-mail-line  text-[1.5rem] text-[#65708c]"></i> <br />
            </a>
              
              <a href="https://wa.me/+2347082946076">
                <i class="ri-whatsapp-line  text-[1.5rem] text-[#65708c]"></i> <br />
              </a>
              
              <a href="tel:+2347044776239">
                <i class="ri-phone-line  text-[1.5rem] text-[#65708c]"></i> <br />  
              </a>
              
              <a href="https://www.linkedin.com/in/joshua-osagie-815044266/">
                <i class="ri-linkedin-fill  text-[1.5rem] text-[#65708c]"></i> <br />
              </a>
             

              <div className='mx-2'>
              <div className='border-l-2 border-[#8b96b3] h-[30vh]'>

              </div>

            </div>
            </div>

            <div className='flex justify-center gap-5 mt-10 md:hidden'>
              <a href="https://www.instagram.com/osagie_joshua_/?igshid=YTY2NzY3YTc%3D">

                  <i class="ri-instagram-line text-[1.5rem] text-[#65708c]"></i> 
              </a>
           
              <a href="mailto:osagiejoshua16@gmail.com">

                  <i class="ri-mail-line  text-[1.5rem] text-[#65708c]"></i> 
              </a>
             
              <a href="https://wa.me/+2347082946076">
                  <i class="ri-whatsapp-line  text-[1.5rem] text-[#65708c]"></i> 
              </a>

              <a href="tel:+2347044776239">
                  <i class="ri-phone-line  text-[1.5rem] text-[#65708c]"></i> 
              </a>
            
              <a href="https://www.linkedin.com/in/joshua-osagie-815044266/">

              <i class="ri-linkedin-fill  text-[1.5rem] text-[#65708c]"></i> 
              </a>
             
            </div>


            <div className='flex justify-center mt-10 pb-5'>
              <p className="text-[#ccd6f6] font-semibold">Created by Joshua Osagie</p>
            </div>


    </div>
  )
}

export default Home