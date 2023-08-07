import Home from "./Pages/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
function App() {

  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} key="route-home-screen" />
      <Route exact path="/login" element={<Login />} key="route-login-screen" />
      <Route exact path="/signup" element={<Signup />} key="route-signup-screen" />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
