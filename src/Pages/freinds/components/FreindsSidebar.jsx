import React, { useEffect, useState } from 'react'
import FreindsSidebarMenu from './FreindsSidebarMenu'
import FreindsMenu from './FreindsMenu'
import Suggestion from './Suggestion'


const FreindsSidebar = () => {
    const [freinds , setFreinds] = useState(true)
    const [suggestion , setSuggestion] =useState(true)
    const freindsClicked = () =>{
        setFreinds(!freinds)   
    }
    const suggestionClicked = () =>{
          setSuggestion(!suggestion)
    }
    
    return (
        <div className="w-96 h-full fixed left-0 top-12   bg-white" >
            {freinds && suggestion? <FreindsSidebarMenu clickProp={freindsClicked} suggestionclick={suggestionClicked}/>:""}
            {freinds?"":<FreindsMenu clickProp={freindsClicked} />}
            {suggestion && freinds?"":<Suggestion clickProp={suggestionClicked} />}
            
        </div>
    )
}

export default FreindsSidebar
