import React from 'react'
import Navbar from '../Facebook/components/navbar/Navbar'
import FreindsSidebar from './components/FreindsSidebar'

const Freinds = () => {
    return (
        <div>
           <Navbar />  
           <div className="w-full ">
               <FreindsSidebar /> 
           </div>          
        </div>
    )
}

export default Freinds
