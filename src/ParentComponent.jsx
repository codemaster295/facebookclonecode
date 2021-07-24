import React, { useState } from 'react'
import Blog from './Blog'
import Child from './Child'

const ParentComponent = () => {
    const [importData , setImportData] = useState([]);
    
    const getData = (data)=>{
        setImportData(data)
    console.log(importData.firstname,"parent")

    }
    
    return (
        <div>
            <Child data={getData} />
           <Blog fname={importData.firstname} lname={importData.lastname} mobile={importData.contact} /> 
        </div>
    )
}

export default ParentComponent;
