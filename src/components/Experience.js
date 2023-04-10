import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Experience = () => {
  const [name, setName] = useState("website")

  const [Website, setWebsite] = useState(
    { name: "", texts:'', text:`Website Developer In my past role, I was responsible for creating cohesive and visually attractive front-end designs. I also helped with back-end design to ensure the websites were user-friendly. Working on both ends increased my knowledge of the fundamentals required to enhance applications for both mobile and web users `
    
  }
    
  )
    
    
  function changename() {
    setWebsite({name: "website", texts:''})
  }
    
  return (
    <div  className='className= bg-[#0a192f]  h-fit'>

<div className='max-w-md mx-auto overflow-hidden md:max-w-4xl w-[100%] py-[2%] pt-[7%]'>
            <div className='flex justify-center'>
              <p className='text-[1.9rem] font-semibold text-[#e1dbdb]'> <span className='text-[1.9rem] font-semibold text-[#48b9a5]'>02.</span> Experience.</p>
            </div>
          </div>

      <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl" id='Experience'>

<div className=' w-[100%] h-fit mt-5 flex gap-10 pt-3 justify-center '>
  <div className='website__div'>
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


<div className='b-[#48b9a5] w-[100%] h-fit pt-10 '>
    <p className="font-bold text-[1.3rem] pl-3 text-[#e1dbdb]"> {Website.name}</p>
    <p className='font-semibold text-[1.1rem] pt-4 pl-3 pr-3 text-[#7a85a2]'>{Website.text}</p>
    
</div>

</div>

<div className='flex justify-center pb-[100%] pt-6 '>
              <div className='border-2 border-[#48b9a5] w-[10%]  rounded-full '>
              <Link to="/" > <button className='rounded-full'><i class="ri-arrow-left-circle-fill font-semibold text-[#48b9a5]  text-[1.6rem] ml-1"></i></button></Link>
             </div>
              </div>
    </div>
  )
}

export default Experience