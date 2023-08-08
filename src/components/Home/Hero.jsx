import { useState } from 'react'
import './Hero.css'
// import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const Hero = () => {
    const [active, setactive] = useState(false)
    const handleClick = () => {
        setactive(true)
    }
    // const navigate = useNavigate()
    // const handleGoToLoginPg = () => {
    //     navigate("/login")
    // }
    return (
        <>
            <Navbar />
            <div className="tophero">
                <div className="tophero0">

                </div>
                <div className="lefthero">
                    <div className="toph1hero">
                        <span className='h1oftoph1hero'>Getting You</span>{""}{""}
                        <div className='circlespanleft'>4.9</div>
                    </div>

                    <div className="toph1hero2">
                        <div className='smallprofimggirl'>
                            <img src="https://sg-res.9appsdownloading.com/sg/res/jpg/dd/9e/d278e1a2a813c55adb0929650124-eev.jpg" alt="" />
                        </div>

                        <div className='semicircleheroleft'>
                            12k
                        </div>

                        <span className='h1oftoph1hero'>where you</span>{""}{""}
                    </div>

                    <div className="toph1hero3">

                        <span className='h1oftoph1hero'>want to study.</span>
                    </div>

                    <div className="contenthead">
                        <p>Everything you need to know for your study<br /> abroad journey: from first search to your first day<br /> on campus.</p>
                    </div>




                    <div className="coursesericeselector">

                        <div className="topheadingselect">
                            <div className="topheadingselect1">
                                <h3 onClick={handleClick} className={active ? "activeclass" : ""}>Courses</h3>
                                <h3 onClick={handleClick} className={active ? "activeclass" : ""} id='serv'>Services</h3>
                            </div>

                            <div className="indicardinselector">
                                <h3>Subject</h3>
                                <input placeholder='What do you want to study' />
                            </div>

                            <div className="indicardinselector">
                                <h3>Where</h3>
                                <input placeholder='Your ideal country / region or institution' />
                                {/* bffgb */}
                            </div>
                        </div>
                    </div>
                    <div className="bigorngcircle"></div>
                </div>
                <div className="righthero">
                    <div className="mainrightcardd">
                        <div className="purplediv">
                            <div className="txtleftpurple">
                                <h2>Empowering Education Through Innovation</h2>


                                <div className="reactangularwhitediv">
                                    {/* <div className="smallcircleorg"></div> */}
                                    <h6>Total Students</h6>
                                    <h2>159.89</h2>

                                </div>
                            </div>

                            <div className="girlwithtab">
                                <img src="https://www.oronium.com/img/casual-life-3d-likes.png" alt="" />
                            </div>
                        </div>

                        <div className="earning_worldtop10_parent">
                            <div className="worldtop1">
                                <h5>World Top 10 University</h5>
                                <div className="statisticsimghlder">
                                    <img src="https://getwpfunnels.com/wp-content/uploads/2022/12/statistic.png" alt="" />
                                </div>
                            </div>
                            <div className="earningdsreport">
                                <h5>Earnings Report</h5>
                                <div className="indiearnings">
                                    <h6>Total students</h6>
                                    <h3>78k</h3>
                                </div>
                                <div className="indiearnings">
                                    <h6>BD topper students</h6>
                                    <h3>8k</h3>
                                </div>
                                <div className="indiearnings">
                                    <h6>Contributor bobus</h6>
                                    <h3>706</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button style={{ cursor: "pointer" }} onClick={handleGoToLoginPg}>Login</button> */}
        </>
    )
}

export default Hero