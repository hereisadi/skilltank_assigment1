import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Dashboard = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [disable, setDisable] = useState(false)
    useEffect(() => {
        document.title = "Dashboard"
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        if (!token) {
            navigate("/login")
        }

        axios.get("https://skilltank-assignment-backend.onrender.com/dashboard",
            config)
            .then(response => {
                const { email } = response.data;
                setUser(({ email }))
            })
            .catch(error => {
                if (error.response && error.response.data.error === "User not found") {
                    alert("User not found")
                } else if (error.response && error.response.data.error === "Failed to fetch dashboard") {
                    alert("Failed to fetch dashboard")
                } else {
                    console.log("Something went wrong")
                }
            });
    }, [navigate])

    const handleSignout = () => {
        setDisable(true)
        localStorage.removeItem("token")
        setDisable(false)
        alert("You have been signed out")
        navigate("/login")
    }


    return (
        <>
            <div id="dashboardmain">
                <h1>{user.email}</h1>
                <button disabled={disable} style={{ cursor: disable ? "not-allowed" : "pointer", opacity: disable ? 0.5 : 1 }} className='btnlogin' id="dignoutbtnn" onClick={handleSignout} >Signout</button>
            </div>

        </>
    )
}

export default Dashboard