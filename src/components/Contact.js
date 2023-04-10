import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className=' bg-[#0a192f]  h-[100vh]'>
      
       <div className='flex justify-center pt-[10%] max-w-md mx-auto overflow-hidden md:max-w-2xl'>
              <p className='font-semibold text-[43px] text-[#ccd6f6]'>Get In Touch</p>
        </div>

        <div className='max-w-md mx-auto  overflow-hidden md:max-w-2xl'>
            <div className=' w-[100%] h-[23vh] mt-5'>
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

            <div className='flex justify-center gap-5 mt-10  md:hidden'>
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

            <div className='flex justify-center pb-5'>
              <div className='border-2 border-[#48b9a5] w-[10%]  rounded-full '>
              <Link to="/" > <button className='rounded-full'><i class="ri-arrow-left-circle-fill font-semibold text-[#48b9a5]  text-[1.6rem] ml-1"></i></button></Link>
             </div>
              </div>
             

    </div>
  )
}

export default Contact