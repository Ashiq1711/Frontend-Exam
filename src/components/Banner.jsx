import React from 'react'
import banner from '../assets/images/banner.png'
import Container from './Container'
const Banner = () => {
  return (
    <div className='relative w-full'>
      <img className='h-[736px] w-full'  src={banner} alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30">
              <Container className="flex flex-col justify-center gap-2 md:gap-3  h-full">
                <div className='w-[50%]'>
                <p className=" text-white">
                Successful coaches are visionaries
                </p>
                <h2 className="text-xl text-white md:text-5xl max-w-sm md:max-w-[500px] font-bold md:leading-[55px] capitalize">
                Good <span className='text-[#4BE5CA] '> coaching</span>   is good teaching & nothing else.
                </h2>
                <p className="text-sm md:text-lg font-bold">

                </p>
                <p className="text-sm md:text-lg font-bold">
                  {" "}
                
                  <span className="md:text-xl font-bold text-blue-600 ">
                    {" "}
              
                  </span>
                </p>
                <button
               
                  className="w-24 md:w-44 md:text-xl py-2 md:py-3 bg-primary/90 hover:bg-black text-white rounded-md hoverEffect"
                >
                  Shop Now
                </button>

                </div>
    
                <div className='w-[50%]'>

                </div>
              </Container>
            </div>
    </div>
  )
}

export default Banner