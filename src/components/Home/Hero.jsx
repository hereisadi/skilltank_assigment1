import {useState} from 'react'
import './Hero.css'
const Hero = () => {
const [active,setactive] = useState(false)
const handleClick = () => {
    setactive(true)
}
    return (
        <>
            <div className="tophero">
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
                            <h3 onClick={handleClick} className={active?"activeclass":""}>Courses</h3>
                            <h3 onClick={handleClick} className={active?"activeclass":""} id='serv'>Services</h3>
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

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero