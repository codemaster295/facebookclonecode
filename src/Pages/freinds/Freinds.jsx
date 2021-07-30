import React, { useState } from 'react'
import Navbar from '../Facebook/components/navbar/Navbar'
import FreindsBanner from './components/FreindsBanner'
import FreindsSidebar from './components/FreindsSidebar'

const Freinds = () => {
    
    return (
        <div className="overflow-y-scroll scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-50">
           <Navbar />  
           <div className="w-full flex  justify-end  ">
               <FreindsSidebar /> 
               <FreindsBanner />
           </div>          
        </div>
    )
}

export default Freinds
