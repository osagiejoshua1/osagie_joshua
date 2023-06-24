import React from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import { useState, useEffect } from "react"

const Work = () => {

  const [isLoading, setIsLoading] = useState(true)


    useEffect(()=> {
        setIsLoading(true)
        setTimeout(()=> {
           setIsLoading(false)

        },5000)
   }, [])

  return (
    <div  className=' bg-[#0a192f]  h-fit'>
      {isLoading ? (
        
        
        
        <div className='flex justify-center items-center inset-0 bg-[#0a192f] opacity-1 h-screen'>
       {/* <ScaleLoader color={"#030d26"} loading={isLoading}  size={100} className='  '/> */}
       <ClipLoader color={"#59e2c5"}  loading={isLoading} size={100} className=""/>
      
       </div>
       
   
 ) : ( <div className=''>

      <div className='max-w-md mx-auto overflow-hidden md:max-w-4xl w-[100%] py-[2%] pt-[5%]'>
            <div className='flex justify-center'>
              <p className='text-[1.9rem] font-semibold text-[#e1dbdb]'> <span className='text-[1.9rem] font-semibold text-[#48b9a5]'>03.</span>My Works.</p>
            </div>
          </div>

        <div className='flex justify-center pt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
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
               cursor-pointer text-[#48b9a5] transition ease-in-out'>Click to view website</p>
              </a>
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
              <a href="https://boisterous-palmier-8a0e31.netlify.app/">
              <p className='pt-1 pl-3 hover:underline decoration-solid
               cursor-pointer text-[#48b9a5] transition ease-in-out'>Click to view website</p>
               </a>
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

        <div className='flex justify-center mt-10 max-w-md mx-auto overflow-hidden md:max-w-2xl'>
          <div className='b-[#ccd6f6] h-[37vh] w-[95%]'>
            <p className='text-[1.1rem] font-semibold text-[#65708c]'>
              A fast and free Music Application, where all your local downloaded music
              will appear on the application with a good sound quality. Compactable with bluetooth,
              wired and wireless devices.
            </p>
            
            <div className='mt-5 flex   gap-7'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> React Native </p> 
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i> JavaScript</p>
            </div>
            <div className='flex gap-10'>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Tailwind Css</p>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Expo Go</p>
                  <p className="text-[#65708c] font-semibold text-[1rem]"><i class="ri-arrow-right-s-fill font-semibold text-[#48b9a5]"></i>Expo CLI</p>
            </div>
            <div className='flex mt-3 '>
            <a href="https://6oouwiqyfhuxpgttl74zza.on.drv.tw/www.videoplaylist.blog/"> <p className='pt-1 pl-3 hover:underline decoration-solid
               cursor-pointer text-[#48b9a5] transition ease-in-out'>Click to watch 2 min Video</p>
            </a>
            </div>
          </div>
        </div>


        {/* ______UP COMING PROJECTS_____ */}

       
        <div className='flex justify-center pb-5 pt-4'>
              <div className='border-2 border-[#48b9a5] w-[10%]  rounded-full '>
                  <Link to="/" > <button className='rounded-full'><i class="ri-arrow-left-circle-fill font-semibold text-[#48b9a5]  text-[1.6rem] ml-1"></i></button></Link>
             </div>
        </div>  

        </div> )}
    </div>

    
  )
}

export default Work