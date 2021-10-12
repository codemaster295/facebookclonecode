import React, { useEffect, useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBox = ({ handleClose }) => {
    const [user, setUser] = useState([])
    const [search, setSearch] = useState([])
    const [selected, setSelected] = useState()
    const [sameName ,setSameName]=useState(false)
    const [searchResult ,setSearchResult]=useState("")
    let token = ""

    const handleGetUser = () => {

        axios.get("http://localhost:8080/api/v1/users/getalluser", { headers: { 'x-access-token': token } }).then(res => { setUser(res.data) })
    }
    useEffect(() => {
        token = localStorage.getItem("token")
        handleGetUser()
    }, [])
    // console.log(user[0].username)
    const handleSearch = (e) => {
        setSearchResult(e.target.value)
        if (e.target.value) {
            setSelected(e.target.value)
            var main = user.filter((x) => {
                if(x.username.toLowerCase().includes(e.target.value.toLowerCase())){
                    if(x.username.toLowerCase() ===e.target.value){
                        console.log("same name available")
                        setSameName(true)
                    }
                    return x.username.toLowerCase().includes(e.target.value.toLowerCase())
                }
            })
            console.log(main)
           
            setSearch(main.slice(0,6))
        }
        else {
            setSearch([])
        }

    }
    return (
        <div className="searchIcon fixed top-0 left-0  w-1/4">
            <div className="flex items-center justify-around w-full bg-white py-5 px-2">
                <div className="rounded-full bg-white transition-colors duration-100 hover:bg-bg-theme w-10 h-10 flex items-center justify-center cursor-pointer" onClick={handleClose}>
                    <FontAwesomeIcon icon={faArrowLeft} className="text-sm text-gray-500" />
                </div>
                <div className="relative ">
                    <input
                        type="search"
                        className="bg-gray-200 rounded-full w-full outline-none px-10 py-2.5"
                        placeholder="Search Facebook"
                        onChange={handleSearch}
                    />
                    <SearchIcon className="absolute cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease left-3 top-1/2  -translate-y-1/2 text-gray-500  " />
                </div>
            </div>
            <div className=" bg-white  p-5 ">
                {search && !sameName ?
                    (search.map((x) => (
                        <div className="py-3 px-2 rounded-lg hover:bg-bg-theme cursor-pointer flex items-center space-x-3" onClick={() => { setSelected(x.username) }}>
                            <div className="rounded-full bg-white transition-colors duration-100 hover:bg-bg-theme w-10 h-10 flex items-center justify-center cursor-pointer">
                                <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
                            </div>
                            <h1 className="font-medium text-base  ">{x.username}</h1>

                        </div>
                    )))
                    : <div className="py-3 px-2 rounded-lg hover:bg-bg-theme cursor-pointer flex items-center space-x-3" onClick={() => { setSelected(searchResult) }}>
                    <div className="rounded-full bg-white transition-colors duration-100 hover:bg-bg-theme w-10 h-10 flex items-center justify-center cursor-pointer">
                        <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
                    </div>
                    <h1 className="font-medium text-base  ">{searchResult}</h1>

                </div>}
            </div>
        </div>
    )
}

export default SearchBox
