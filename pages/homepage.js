import React from 'react'
import right from './hero/right.jpg'



const Homepage = () => {
  return (
    //hero section
    <div className='bg-7 bg-cover' >
      <h1 className='text-3xl font-bold underline'>hello world</h1>
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>

          <h1 className=" font-semibold mb-6">
          {`Keep track of what's in your fridge with ease using Food Sync.`}                                                                                                                                                                
          </h1>
          <img src={right}
                 className="flex ml-auto rounded-full  p-5  md:max-w-[24rem]"
                alt='right'/>
        
        <h2 className="text-4 max-w-3xl mx-auto  mb-0 bg-7">
        Food Sync helps you effortlessly monitor your home food and drink supplies. Stay organized and avoid waste by keeping track of what you have and what you need.
          </h2>
          </div>
       
       
    </div>
    
    
  )
}

export default Homepage
