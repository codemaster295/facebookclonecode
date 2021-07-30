import React from 'react'

const VideoBox = (props) => {
    return (
        <div>
            <div className="w-1/3">
                <img src={props.img} alt="" />
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default VideoBox
