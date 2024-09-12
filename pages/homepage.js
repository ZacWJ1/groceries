import React from 'react'
import './homepage.css'
//import right from './hero/right.jpg'
import BasicPie from '../pages/charts/PieChart'

import DataTable from './charts/DataTable'

const Homepage = () => {
  return (
    //hero section
    
    <div className='bg bg-cover' >
      <h1 className='text-3xl font-bold underline mt-2'>Welcome to Groceries</h1>
      <BasicPie/>
      
    <div className='tables'>
    <DataTable/>
    </div>
    
      
      
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
          <h2 className=" font-semibold mb-6">
          {`Keep track of what's in your fridge with ease using your item dashboard.`}                                                                                                                                                                
          </h2>
      </div>
      <div className='dashboards'>
      
     

      </div>
       
       
    </div>
    
    
  )
}

export default Homepage

/*<img src={right}
                 className="flex ml-auto rounded-full  p-5  md:max-w-[24rem]"
                alt='right'/>*/