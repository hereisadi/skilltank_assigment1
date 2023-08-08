import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { TbDirections } from 'react-icons/tb'
import { MdOutlineFlight } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { GiSplitCross } from 'react-icons/gi'
const Navbar = () => {
    const [hamburger, setHamburger] = useState(false)

    const toggleMenu = () => {
        setHamburger(prevMenu => !prevMenu);
    };

    const handleExitSieNav = () => {
        setHamburger(prevMenu => !prevMenu);
    }

    const menuRef = useRef();
    const hamRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target) && !hamRef.current.contains(e.target)) {
                setHamburger(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    useEffect(() => {
        if (hamburger === true) {
            document.body.style.height = "100dvh";
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.height = "";
            document.body.style.overflow = "";
        }
    });

    return (
        <>
            <div className="navmain">
                <div className="navchild1">
                    <NavLink to="/"><div id='houseinnavchild1'>
                        <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?t=st=1691481584~exp=1691485184~hmac=9a391f8ae742f024867f4db3cef8f0e9f4c388b75f41dbd2d4f70b808f8a1b27&w=996" alt="" />
                    </div></NavLink>
                    <h1 id='mrinchild1'>MR</h1>

                    <h3 id='slashpartof'>/</h3>
                    <div className="partoftimes">
                        Part of Times Higher Education
                    </div>
                </div>
                <div className="navchild2">
                    <div><NavLink to="/">Home</NavLink></div>
                    <div><NavLink to="/officers">Officers</NavLink></div>
                    <div><NavLink to="/examination">Examination</NavLink></div>
                    <div><NavLink to="/sections">Sections</NavLink></div>
                    <div><NavLink to="/students">Students</NavLink></div>
                    <div><NavLink to="academics">Academics</NavLink></div>
                </div>

                <div className='navchild3'>
                    <div className="circulardivaroundicons">
                        <TbDirections style={{ color: "grey" }} />

                    </div>
                    <div className='circulardivaroundicons' id='slightrightaero'>
                        <MdOutlineFlight style={{ color: "grey" }} />
                    </div>

                    <div onClick={toggleMenu} className='circulardivaroundicons' id='extremerioghthamburger'>
                        <RxHamburgerMenu style={{ color: "grey" }} />
                    </div>
                </div>


            </div>

            <div className="extendednavlinks" style={{ display: hamburger ? "block" : "none" }} ref={menuRef} >
                <div className="crossholder">
                    <GiSplitCross id='crosstoexitnav' onClick={handleExitSieNav} />
                </div>

                <div id="linksinsidenav">
                    <div className="firstlinkinnav">
                        <NavLink to="/learn"><h3>Learn</h3></NavLink>
                    </div>
                    <div className="firstlinkinnav">
                        <NavLink to="/mentors"><h3>
                            Mentors</h3></NavLink>
                    </div>
                    <div className="firstlinkinnav">
                        <NavLink to="/compete">
                            <h3>Compete</h3>
                        </NavLink>
                    </div>
                    <div className="firstlinkinnav">
                        <NavLink to="/jobs">
                            <h3>Jobs</h3>
                        </NavLink>
                    </div>
                    <div className="firstlinkinnav">
                        <NavLink to="/login">
                            <h3>Login</h3>
                        </NavLink>
                    </div>
                    <div className="firstlinkinnav">
                        <NavLink to="/signup">
                            <h3>Signup</h3>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar