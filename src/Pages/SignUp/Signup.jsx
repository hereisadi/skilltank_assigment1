import { useState } from 'react';
import './Signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [email, setEmail] = useState("")
    const [disablebtn, setDisablebtn] = useState(false)
    const [pwd, setPwd] = useState("")
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
        axios.post("https://skilltank-assignment-backend.onrender.com/signup",
            { email, pwd })
            .then(response => {
                if (response) {
                    alert("User registered successfully")
                    navigate("/login")
                    setDisablebtn(false)
                    setEmail("")
                    setPwd("")
                }

            })
            .catch(error => {

                if (error.response && error.response.data.error === "Please fill all required fields") {
                    alert("Please fill all required fields")
                    setDisablebtn(false)
                    setEmail("")
                    setPwd("")
                } else if (error.response && error.response.data.error === "Password should not be less than 8 characters") {
                    alert("Password should not be less than 8 characters")
                    setDisablebtn(false)
                    setEmail("")
                    setPwd("")
                } else if (error.response && error.response.data.error === "Email already exists") {
                    alert("Email already exists")
                    setDisablebtn(false)
                    setEmail("")
                    setPwd("")
                } else if(error.response && error.response.data.error==="Invalid email"){
                    alert("Invalid email")
                    setDisablebtn(false)
                    setEmail("")
                    setPwd("")
                }
                else {
                    alert("Something went wrong")
                    setDisablebtn(false)
                    setEmail("")
                    setPwd("")
                }
            });
    }
    return (
        <>
            <div className="topmainlogin">
                <div className="loginmain">
                    <h2 id='loginh2'>Signup Form</h2>

                    <div className="midloginsignupselect">
                        <div style={{ cursor: "pointer", backgroundColor: "white", color: "black", border: "1px solid grey" }} onClick={handleloginMove} className="loginn">Login</div>
                        <div style={{ cursor: "default", backgroundColor: "#c043ad", color: "white", border: "1px solid grey" }} className="singupp">Signup</div>
                    </div>

                    <div className="inputdiv">
                        <input className='inputindi' type="email" placeholder='Email Address' required value={email} onChange={handleEmailChange} />
                    </div>

                    <div className="inputdiv">
                        <input className='inputindi' type="password" placeholder='Password' required value={pwd} onChange={handlePwdChange} />
                    </div>

                    <button className='btnlogin' disabled={disablebtn} style={{ cursor: disablebtn ? "not-allowed" : "pointer", opacity: disablebtn ? 0.5 : 1 }} onClick={handleSignup}>Signup</button>
                </div>
            </div>
        </>
    )
}

export default Signup