import React from 'react'

const Blog = (props) => {
    return (
        <div>
          <div className="box">
          <h1>{props.fname}</h1>
          <h1>{props.lname}</h1>
          <h1>{props.mobile}</h1>
          
          </div>  
        </div>
    )
}

export default Blog
