import { faChevronCircleDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Profilenav = () => {
    return (
        <div className="container profilenav mx-auto px-4 bg-white">
            <ul className="flex items-center  space-x-10">
                <li>Posts</li>
                <li>About</li>
                <li>Freinds</li>
                <li>Photos</li>
                <li>Story Archives</li>
                <li>Videos</li>
                <li>
                    <span className="flex items-center space-x-2">
                        <h1>More</h1>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </li>
                <li>Posts</li>
            </ul>
        </div>
    )
}

export default Profilenav
