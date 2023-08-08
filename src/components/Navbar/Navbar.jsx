// import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="navmain">
        <div className="navchild1">
            <div id='houseinnavchild1'>
            <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?t=st=1691481584~exp=1691485184~hmac=9a391f8ae742f024867f4db3cef8f0e9f4c388b75f41dbd2d4f70b808f8a1b27&w=996"   alt="" />
            </div>
            <h1 id='mrinchild1'>MR</h1>

            <h3 id='slashpartof'>/</h3>
            <div className="partoftimes">
            Part of Times Higher Education
            </div>
        </div>
        <div className="navchild2">
            <div><NavLink to="/">Home</NavLink></div>
            <div><NavLink to="/">Officers</NavLink></div>
            <div><NavLink to="/">Examination</NavLink></div>
            <div><NavLink to="/">Sections</NavLink></div>
            <div><NavLink to="/">Students</NavLink></div>
            <div><NavLink to="#">Academics</NavLink></div>
        </div>

     <div className='navchild3'></div>

    </div>
    </>
  )
}

export default Navbar