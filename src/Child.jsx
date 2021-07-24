import React, { useState } from 'react'

const Child = (props) => {
    let name = 'jenish'
    const [fname ,setFname]=useState("d")
    const [lname ,setLname]=useState("d")
    const [mobile ,setMobile]=useState("d")
    let data = {
        firstname:fname , 
        lastname:lname,
        contact:mobile
    }
    const submitForm = (e) =>{
       e.preventDefault()
    }
    return (
        <div>
            <h1 >meet</h1>
            <form onSubmit={submitForm}>
                <input type="text" name="" id="" placeholder="enter first name" onChange={(e)=>{setFname(e.target.value)}}/>
                <input type="text" name="" id="" placeholder="enter last name" onChange={(e)=>{setLname(e.target.value)}}/>
                <input type="text" name="" id="" placeholder="enter mobile" onChange={(e)=>{setMobile(e.target.value)}}/>
                <button onClick={()=>props.data(data)}>send data</button>
            </form>
        </div>
    )
}

export default Child
