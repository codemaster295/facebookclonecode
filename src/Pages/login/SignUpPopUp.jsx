import { faCross, faQuestionCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Email } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import DatePopUp from './DatePopUp'
import GenderPopUp from './GenderPopUp'
import EmailVarification from './EmailVarification'

const SignUpPopUp = ({ closepopup }) => {
    const [date , setDate] =useState(false)
    const [fname , setFname] =useState("")
    const [surname , setSurname] =useState("")
    const [email , setEmail] =useState("")
    const [password , setPassword] =useState("")
    const [day, setDay] =useState("")
    const [month , setMonth] =useState("")
    const [year , setYear] =useState("")
    const [gender,setGender]=useState("")
    const [male , setMale]=useState("")
    const [female , setFemale]=useState("")
    const [other , setOther]=useState("")
    const [genderpopup , setGenderPopUp]=useState(false)
    const [emailVarification , setEmailVarification] =useState(false)
    const [freinds , setFreinds]=useState("")
    const history = useHistory("")

    
    const birthDate =`${day}/${month}/${year}`
    const signUpDetails={
        fname:fname,
        lname:surname,
        email:email,
        password:password,
        day:day,
        month:month,
        freind:freinds,
        year:year,
        female:female,
        male:male,
        other:other,
    }
    const handleSignUpSubmit = (e)=>{
        e.preventDefault()
        setEmailVarification(true)
        
        fetch("https://facebookrestapi.herokuapp.com/signup", {
            method: "POST",
            body: JSON.stringify(signUpDetails),
            headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((response) => response.json(signUpDetails) ,console.log(signUpDetails) ,setTimeout(()=>{history.push('/emailVarification')},2000) );
      
    }

    

    return (
        <div className="w-full z-50 SignUpPopUp fixed h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg-theme  flex justify-center items-center">
            <div className="lg:w-6/12 md:7/12 w-11/12 xl:w-1/4 relative bg-white shadow-2xl p-5 transform -translate-y-10">
                <div className="signupForm space-y-3">
                    <div className="wrapper-title space-y-2 relative ">
                        <h1 className="text-3xl font-bold tracking-widest text-black ">Sign Up</h1>
                        <h1 className="text-gray-500  font-semibold tracking-tight text-sm">It's quick and easy</h1>
                        <FontAwesomeIcon icon={faTimes} className="absolute top-0 right-0 mr-3 text-xl cursor-pointer " onClick={closepopup} />
                    </div>
                    <div className="formmain">
                        <form  onSubmit={handleSignUpSubmit}>
                            <div className="space-y-5">
                                <div className="flex w-full justify-between space-x-2">
                                    <input className="bg-gray-200 placeholder-gray-500 border w-full  rounded-sm outline-none p-1.5" type="text" name="fname" id="fname" placeholder="First Name" onChange={(e)=>{setFname(e.target.value)}}  required/>
                                    <input className="bg-gray-200 placeholder-gray-500 border w-full  rounded-sm outline-none p-1.5" type="text" name="lname" id="lname" placeholder="Surname"  onChange={(e)=>{setSurname(e.target.value)}}  required/>
                                </div>
                                <div className="space-y-5">
                                    <input className="w-full bg-gray-200 placeholder-gray-500 border    rounded-sm outline-none p-1.5" type="email" name="email" id="email" placeholder="Mobile number or email adress" onChange={(e)=>{setEmail(e.target.value)}}  required/>
                                    <input className="w-full bg-gray-200 placeholder-gray-500 border    rounded-sm outline-none p-1.5" type="password" name="password" id="password" placeholder="New password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex relative  items-center space-x-1">
                                        <h1 className="font-semibold text-gray-500 text-xs">Date Of Birth</h1>
                                        <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-500 text-xs" title="Click for more information" onClick={()=>{setDate(!date);setGenderPopUp(false)}}/>
                                        {date?<DatePopUp />:null}

                                    </div>
                                    <input type="text" onChange={(e)=>{setFreinds(e.target.value)}}/>
                                    <div className="flex justify-between space-x-3">
                                    <select name="day" id="day" className="h-8 w-1/3 text-sm font-semibold tracking-widest border border-black rounded-sm bg-gray-50" onChange={(e)=>{setDay(e.target.value)}}>
                                        <option className="text-xs font-semibold" value="1">1</option>
                                        <option className="text-xs font-semibold" value="2">2</option>
                                        <option className="text-xs font-semibold" value="3">3</option>
                                        <option className="text-xs font-semibold" value="4">4</option>
                                        <option className="text-xs font-semibold" value="5">5</option>
                                        <option className="text-xs font-semibold" value="6">6</option>
                                        <option className="text-xs font-semibold" value="7">7</option>
                                        <option className="text-xs font-semibold" value="8">8</option>
                                        <option className="text-xs font-semibold" value="9">9</option>
                                        <option className="text-xs font-semibold" value="10">10</option>
                                        <option className="text-xs font-semibold" value="11">11</option>
                                        <option className="text-xs font-semibold" value="12">12</option>
                                        <option className="text-xs font-semibold" value="13">13</option>
                                        <option className="text-xs font-semibold" value="14">14</option>
                                        <option className="text-xs font-semibold" value="15">15</option>
                                        <option className="text-xs font-semibold" value="16">16</option>
                                        <option className="text-xs font-semibold" value="17">17</option>
                                        <option className="text-xs font-semibold" value="18">18</option>
                                        <option className="text-xs font-semibold" value="19">19</option>
                                        <option className="text-xs font-semibold" value="20">20</option>
                                        <option className="text-xs font-semibold" value="21">21</option>
                                        <option className="text-xs font-semibold" value="22">22</option>
                                        <option className="text-xs font-semibold" value="23">23</option>
                                        <option className="text-xs font-semibold" value="24">24</option>
                                        <option className="text-xs font-semibold" value="25">25</option>
                                        <option className="text-xs font-semibold" value="26">26</option>
                                        <option className="text-xs font-semibold" value="27">27</option>
                                        <option className="text-xs font-semibold" value="28">28</option>
                                        <option className="text-xs font-semibold" value="29">29</option>
                                        <option className="text-xs font-semibold" value="30">30</option>
                                        <option className="text-xs font-semibold" value="31">31</option>
                                    </select>
                                    <select name="month" id="month" className="h-8 w-1/3 text-sm font-semibold tracking-widest border border-black rounded-sm bg-gray-50" onChange={(e)=>{setMonth(e.target.value)}} >
                                        <option className="text-xs font-semibold" value="1">jan</option>
                                        <option className="text-xs font-semibold" value="2">feb</option>
                                        <option className="text-xs font-semibold" value="3">mar</option>
                                        <option className="text-xs font-semibold" value="4">apr</option>
                                        <option className="text-xs font-semibold" value="5">may</option>
                                        <option className="text-xs font-semibold" value="6">jun</option>
                                        <option className="text-xs font-semibold" value="7">jul</option>
                                        <option className="text-xs font-semibold" value="8">aug</option>
                                        <option className="text-xs font-semibold" value="9">sep</option>
                                        <option className="text-xs font-semibold" value="10">oct</option>
                                        <option className="text-xs font-semibold" value="11">nov</option>
                                        <option className="text-xs font-semibold" value="12">dec</option>
                                    </select>
                                    <select name="year" id="year" className="h-8 w-1/3 text-sm font-semibold tracking-widest border border-black rounded-sm bg-gray-50" onChange={(e)=>{setYear(e.target.value)}}>
                                        <option className="text-xs font-semibold" value="2021" selected="1">2021</option>
                                        <option className="text-xs font-semibold" value="2020">2020</option>
                                        <option className="text-xs font-semibold" value="2019">2019</option>
                                        <option className="text-xs font-semibold" value="2018">2018</option>
                                        <option className="text-xs font-semibold" value="2017">2017</option>
                                        <option className="text-xs font-semibold" value="2016">2016</option>
                                        <option className="text-xs font-semibold" value="2015">2015</option>
                                        <option className="text-xs font-semibold" value="2014">2014</option>
                                        <option className="text-xs font-semibold" value="2013">2013</option>
                                        <option className="text-xs font-semibold" value="2012">2012</option>
                                        <option className="text-xs font-semibold" value="2011">2011</option>
                                        <option className="text-xs font-semibold" value="2010">2010</option>
                                        <option className="text-xs font-semibold" value="2009">2009</option>
                                        <option className="text-xs font-semibold" value="2008">2008</option>
                                        <option className="text-xs font-semibold" value="2007">2007</option>
                                        <option className="text-xs font-semibold" value="2006">2006</option>
                                        <option className="text-xs font-semibold" value="2005">2005</option>
                                        <option className="text-xs font-semibold" value="2004">2004</option>
                                        <option className="text-xs font-semibold" value="2003">2003</option>
                                        <option className="text-xs font-semibold" value="2002">2002</option>
                                        <option className="text-xs font-semibold" value="2001">2001</option>
                                        <option className="text-xs font-semibold" value="2000">2000</option>
                                        <option className="text-xs font-semibold" value="1999">1999</option>
                                        <option className="text-xs font-semibold" value="1998">1998</option>
                                        <option className="text-xs font-semibold" value="1997">1997</option>
                                        <option className="text-xs font-semibold" value="1996">1996</option>
                                        <option className="text-xs font-semibold" value="1995">1995</option>
                                        <option className="text-xs font-semibold" value="1994">1994</option>
                                        <option className="text-xs font-semibold" value="1993">1993</option>
                                        <option className="text-xs font-semibold" value="1992">1992</option>
                                        <option className="text-xs font-semibold" value="1991">1991</option>
                                        <option className="text-xs font-semibold" value="1990">1990</option>
                                        <option className="text-xs font-semibold" value="1989">1989</option>
                                        <option className="text-xs font-semibold" value="1988">1988</option>
                                        <option className="text-xs font-semibold" value="1987">1987</option>
                                        <option className="text-xs font-semibold" value="1986">1986</option>
                                        <option className="text-xs font-semibold" value="1985">1985</option>
                                        <option className="text-xs font-semibold" value="1984">1984</option>
                                        <option className="text-xs font-semibold" value="1983">1983</option>
                                        <option className="text-xs font-semibold" value="1982">1982</option>
                                        <option className="text-xs font-semibold" value="1981">1981</option>
                                        <option className="text-xs font-semibold" value="1980">1980</option>
                                        <option className="text-xs font-semibold" value="1979">1979</option>
                                        <option className="text-xs font-semibold" value="1978">1978</option>
                                        <option className="text-xs font-semibold" value="1977">1977</option>
                                        <option className="text-xs font-semibold" value="1976">1976</option>
                                        <option className="text-xs font-semibold" value="1975">1975</option>
                                        <option className="text-xs font-semibold" value="1974">1974</option>
                                        <option className="text-xs font-semibold" value="1973">1973</option>
                                        <option className="text-xs font-semibold" value="1972">1972</option>
                                        <option className="text-xs font-semibold" value="1971">1971</option>
                                        <option className="text-xs font-semibold" value="1970">1970</option>
                                        <option className="text-xs font-semibold" value="1969">1969</option>
                                        <option className="text-xs font-semibold" value="1968">1968</option>
                                        <option className="text-xs font-semibold" value="1967">1967</option>
                                        <option className="text-xs font-semibold" value="1966">1966</option>
                                        <option className="text-xs font-semibold" value="1965">1965</option>
                                        <option className="text-xs font-semibold" value="1964">1964</option>
                                        <option className="text-xs font-semibold" value="1963">1963</option>
                                        <option className="text-xs font-semibold" value="1962">1962</option>
                                        <option className="text-xs font-semibold" value="1961">1961</option>
                                        <option className="text-xs font-semibold" value="1960">1960</option>
                                        <option className="text-xs font-semibold" value="1959">1959</option>
                                        <option className="text-xs font-semibold" value="1958">1958</option>
                                        <option className="text-xs font-semibold" value="1957">1957</option>
                                        <option className="text-xs font-semibold" value="1956">1956</option>
                                        <option className="text-xs font-semibold" value="1955">1955</option>
                                        <option className="text-xs font-semibold" value="1954">1954</option>
                                        <option className="text-xs font-semibold" value="1953">1953</option>
                                        <option className="text-xs font-semibold" value="1952">1952</option>
                                        <option className="text-xs font-semibold" value="1951">1951</option>
                                        <option className="text-xs font-semibold" value="1950">1950</option>
                                        <option className="text-xs font-semibold" value="1949">1949</option>
                                        <option className="text-xs font-semibold" value="1948">1948</option>
                                        <option className="text-xs font-semibold" value="1947">1947</option>
                                        <option className="text-xs font-semibold" value="1946">1946</option>
                                        <option className="text-xs font-semibold" value="1945">1945</option>
                                        <option className="text-xs font-semibold" value="1944">1944</option>
                                        <option className="text-xs font-semibold" value="1943">1943</option>
                                        <option className="text-xs font-semibold" value="1942">1942</option>
                                        <option className="text-xs font-semibold" value="1941">1941</option>
                                        <option className="text-xs font-semibold" value="1940">1940</option>
                                        <option className="text-xs font-semibold" value="1939">1939</option>
                                        <option className="text-xs font-semibold" value="1938">1938</option>
                                        <option className="text-xs font-semibold" value="1937">1937</option>
                                        <option className="text-xs font-semibold" value="1936">1936</option>
                                        <option className="text-xs font-semibold" value="1935">1935</option>
                                        <option className="text-xs font-semibold" value="1934">1934</option>
                                        <option className="text-xs font-semibold" value="1933">1933</option>
                                        <option className="text-xs font-semibold" value="1932">1932</option>
                                        <option className="text-xs font-semibold" value="1931">1931</option>
                                        <option className="text-xs font-semibold" value="1930">1930</option>
                                        <option className="text-xs font-semibold" value="1929">1929</option>
                                        <option className="text-xs font-semibold" value="1928">1928</option>
                                        <option className="text-xs font-semibold" value="1927">1927</option>
                                        <option className="text-xs font-semibold" value="1926">1926</option>
                                        <option className="text-xs font-semibold" value="1925">1925</option>
                                        <option className="text-xs font-semibold" value="1924">1924</option>
                                        <option className="text-xs font-semibold" value="1923">1923</option>
                                        <option className="text-xs font-semibold" value="1922">1922</option>
                                        <option className="text-xs font-semibold" value="1921">1921</option>
                                        <option className="text-xs font-semibold" value="1920">1920</option>
                                        <option className="text-xs font-semibold" value="1919">1919</option>
                                        <option className="text-xs font-semibold" value="1918">1918</option>
                                        <option className="text-xs font-semibold" value="1917">1917</option>
                                        <option className="text-xs font-semibold" value="1916">1916</option>
                                        <option className="text-xs font-semibold" value="1915">1915</option>
                                        <option className="text-xs font-semibold" value="1914">1914</option>
                                        <option className="text-xs font-semibold" value="1913">1913</option>
                                        <option className="text-xs font-semibold" value="1912">1912</option>
                                        <option className="text-xs font-semibold" value="1911">1911</option>
                                        <option className="text-xs font-semibold" value="1910">1910</option>
                                        <option className="text-xs font-semibold" value="1909">1909</option>
                                        <option className="text-xs font-semibold" value="1908">1908</option>
                                        <option className="text-xs font-semibold" value="1907">1907</option>
                                        <option className="text-xs font-semibold" value="1906">1906</option>
                                        <option className="text-xs font-semibold" value="1905">1905</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                <div className="flex relative  items-center space-x-1">
                                        <h1 className="font-semibold text-gray-500 text-xs">Gender</h1>
                                        <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-500 text-xs" title="Click for more information" onClick={()=>{setGenderPopUp(!genderpopup);setDate(false)}}/>
                                        {genderpopup?<GenderPopUp />:null}

                                    </div>
                                    <div className="flex items-center justify-between space-x-3"> 
                                        <div className="flex items-center space-x-3 border-gray-500 border h-8 w-1/3 justify-around">
                                            <label htmlFor="Male" className="text-xs font-semibold">Female</label>
                                            <input placeholder="male" value="female" type="radio" name="female" id="" aria-required="true" onChange={(e)=>{setFemale(e.target.value)}}/>
                                        </div>
                                        <div className="flex items-center space-x-3 border-gray-500 border h-8 w-1/3 justify-around">
                                            <label htmlFor="Male" className="text-xs font-semibold">Male</label>
                                            <input placeholder="male" value="male" type="radio" name="male" id=""  onChange={(e)=>{setMale(e.target.value)}}/>
                                        </div>
                                        <div className="flex items-center space-x-3 border-gray-500 border h-8 w-1/3 justify-around">
                                            <label htmlFor="Male" className="text-xs font-semibold">Other</label>
                                            <input placeholder="male" value="other" type="radio" name="other" id=""  onChange={(e)=>{setOther(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="font-semibold tracking-tight text-xs">By clicking Next, you agree to our <span className="text-btn-blue font-bold cursor-pointer">Terms</span> ,<span className="text-btn-blue font-bold cursor-pointer">Data Policy</span>  and <span className="text-btn-blue font-bold cursor-pointer">Cookie Policy</span> . You may receive SMS notifications from us and can opt out at any time.</p>
                                    </div>
                                    <div className="flex justify-center w-full items-center">
                                        <button className="bg-btn-green w-5/12 rounded-lg py-1.5 text-lg font-bold text-white" onClick={handleSignUpSubmit} >Next</button>
                                    </div>
                                </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default SignUpPopUp
