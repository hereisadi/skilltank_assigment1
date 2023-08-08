import { useState, useEffect } from 'react';
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    useEffect(()=>{
        document.title="Login"
    })
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const navigate = useNavigate();
    const [disablebtn, setDisablebtn] = useState(false)
    const [status, setStatus] = useState(false)
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePwdChange = (e) => {
        setPwd(e.target.value)
    }
    const handleSignupMove = () => {
        window.open("/signup", '_blank', `width=${width},height=${height}`)
    }

    const handleLoginBtn = async (e) => {
        e.preventDefault()
        setDisablebtn(true)
        setStatus(true)
        axios.post("https://skilltank-assignment-backend.onrender.com/login",{
        // axios.post("http://localhost:3000/login",{
            email, pwd
        }).then(response => {
            if(response){
                const token = response.data.token;
                localStorage.setItem('token', token);
                setStatus(false)
                setDisablebtn(false)
                navigate("/dashboard")
            }
        })
        .catch(error => {
            if(error.response && error.response.data.error==="Please fill all required fields"){
                alert("Please fill all required fields. Login failed")
                setDisablebtn(false)
                setStatus(false)
                setEmail("")
                setPwd("")
            }else if(error.response && error.response.data.error==="Password should not be less than 8 characters"){
                alert("Wrong password. Login failed")
                setDisablebtn(false)
                setStatus(false)
                setEmail("")
                setPwd("")
            }else if(error.response && error.response.data.error==="Invalid email or password"){
                alert("Invalid email or password")
                setDisablebtn(false)
                setStatus(false)
                setEmail("")
                setPwd("")
            }else if(error.response && error.response.data.error==="Invalid password"){
                alert("Invalid password")
                setDisablebtn(false)
                setStatus(false)
                setEmail("")
                setPwd("")
            } else if(error.response && error.response.data.error==="Invalid email"){
                alert("Invalid email")
                setDisablebtn(false)
                setStatus(false)
                setEmail("")
                setPwd("")
            }
            else{
                alert("Something went wrong.")
                setDisablebtn(false)
                setStatus(false)
                setEmail("")
                setPwd("")
            }
        })
    }
    return (
        <>
            <div className="topmainlogin">
                <div className="loginmain">
                    <h2 id='loginh2'>Login Form</h2>

                    <div className="midloginsignupselect">
                        <div className="loginn">Login</div>
                        <div onClick={handleSignupMove} className="singupp">Signup</div>
                    </div>

                    <div className="inputdiv">
                        <input className='inputindi' type="email" placeholder='Email Address' required value={email} onChange={handleEmailChange} />
                    </div>

                    <div className="inputdiv">
                        <input className='inputindi' placeholder='Password' type="password" required value={pwd} onChange={handlePwdChange} />
                    </div>

                    <h5 style={{ color: "red", marginTop: "1vw" }}>Forgot Password?</h5>

                    <button disabled={disablebtn} style={{ cursor: disablebtn ? "not-allowed" : "pointer", opacity: disablebtn ? 0.5 : 1 }} className='btnlogin' onClick={handleLoginBtn} >
                    {status ? "Loggingin..." : "Login"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login