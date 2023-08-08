import { useState, useEffect } from 'react';
import './Signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
const Signup = () => {
    useEffect(() => {
        document.title = "Signup"
    })
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [email, setEmail] = useState("")
    const [disablebtn, setDisablebtn] = useState(false)
    const [pwd, setPwd] = useState("")
    const [status, setStatus] = useState(false)
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePwdChange = (e) => {
        setPwd(e.target.value)
    }
    const handleloginMove = () => {
        window.open("/login", '_self', `width=${width},height=${height}`)
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        setDisablebtn(true)
        setStatus(true)
        axios.post("https://skilltank-assignment-backend.onrender.com/signup",
            // axios.post("http://localhost:3000/signup",
            { email, pwd })
            .then(response => {
                if (response) {
                    alert("User registered successfully")
                    navigate("/login")
                    setDisablebtn(false)
                    setStatus(false)
                    setEmail("")
                    setPwd("")
                }

            })
            .catch(error => {

                if (error.response && error.response.data.error === "Please fill all required fields") {
                    alert("Please fill all required fields")
                    setDisablebtn(false)
                    setStatus(false)
                    setEmail("")
                    setPwd("")
                } else if (error.response && error.response.data.error === "Password should not be less than 8 characters") {
                    alert("Password should not be less than 8 characters")
                    setDisablebtn(false)
                    setStatus(false)
                    setEmail("")
                    setPwd("")
                } else if (error.response && error.response.data.error === "Email already exists") {
                    alert("Email already exists")
                    setDisablebtn(false)
                    setStatus(false)
                    setEmail("")
                    setPwd("")
                } else if (error.response && error.response.data.error === "Invalid email") {
                    alert("Invalid email")
                    setDisablebtn(false)
                    setStatus(false)
                    setEmail("")
                    setPwd("")
                }
                else {
                    alert("Something went wrong")
                    setDisablebtn(false)
                    setStatus(false)
                    setEmail("")
                    setPwd("")
                }
            });
    }

    const handleGoHome = () => {
        navigate("/")
    }
    return (
        <>
        <Navbar />
            <div className="topmainlogin">
                <div className="loginmain">
                    <h2 id='loginh2'>Signup Form</h2>

                    <div className="midloginsignupselect">
                        <div style={{  backgroundColor: "white", color: "black", border: "1px solid grey",cursor: disablebtn ? "not-allowed" : "pointer", opacity: disablebtn ? 0.5 : 1  }} onClick={handleloginMove} disabled={disablebtn} className="loginn">Login</div>
                        <div style={{ cursor: "default", backgroundColor: "#c043ad", color: "white", border: "1px solid grey" }} className="singupp">Signup</div>
                    </div>

                    <div className="inputdiv">
                        <input className='inputindi' type="email" placeholder='Email Address' required value={email} onChange={handleEmailChange} />
                    </div>

                    <div className="inputdiv">
                        <input className='inputindi' type="password" placeholder='Password' required value={pwd} onChange={handlePwdChange} />
                    </div>

                    <button className='btnlogin' disabled={disablebtn} style={{ cursor: disablebtn ? "not-allowed" : "pointer", opacity: disablebtn ? 0.5 : 1 }} onClick={handleSignup}>
                        {status ? "Signingup..." : "Signup"}
                    </button>
                    
                    <div id="btngohomeholder">
                        <button onClick={handleGoHome} disabled={disablebtn} style={{ cursor: disablebtn ? "not-allowed" : "pointer", opacity: disablebtn ? 0.5 : 1 }} id='gotohome'>Go to Home?</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup