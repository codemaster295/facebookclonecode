import { faChevronCircleDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Profilenav = () => {
    return (
        <div className="container profilenav mx-auto px-4 mt-10 bg-white">
            <ul className="flex items-center  space-x-10 font-semibold text-sm">
                <NavLink activeClassName="bg-btn-blue border-btn-blue border-b" to="/facebook">Posts</NavLink>
                <NavLink activeClassName="bg-btn-blue border-btn-blue border-b" to="/facebook">About</NavLink>
                <NavLink activeClassName="bg-btn-blue border-btn-blue border-b" to="/facebook">Freinds</NavLink>
                <NavLink activeClassName="bg-btn-blue border-btn-blue border-b" to="/facebook">Photos</NavLink>
                <NavLink activeClassName="bg-btn-blue border-btn-blue border-b" to="/facebook">Story Archives</NavLink>
                <NavLink activeClassName="bg-btn-blue border-btn-blue border-b" to="/facebook">Videos</NavLink>
                <NavLink activeClassName="bg-btn-blue border-btn-blue border-b" to="/facebook">
                    <span className="flex items-center space-x-2">
                        <h1>More</h1>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </NavLink>
                <NavLink activeClassName="bg-btn-blue border-btn-blue border-b" to="/facebook">Posts</NavLink>
            </ul>
        </div>
    )
}

export default Profilenav
