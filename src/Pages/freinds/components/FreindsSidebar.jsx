import React, { useState } from 'react'
import FreindsSidebarMenu from './FreindsSidebarMenu'
import FreindsMenu from './FreindsMenu'

const FreindsSidebar = () => {
    const [freinds , setFreinds] = useState(true)
    const freindsClicked = () =>{
        setFreinds(!freinds)
        
       
    }
    return (
        <div className="w-1/4 fixed left-0 top-12   bg-white">
            {freinds? <FreindsSidebarMenu clickProp={freindsClicked} />:""}
            {freinds?"":<FreindsMenu clickProp={freindsClicked} />}
        </div>
    )
}

export default FreindsSidebar
