import React from "react";
import "./globales.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Feature from "./components/Feature";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/home/Navbar";
import Login from "./pages/Admins/Login";
import "./style.css";
import Home from "./pages/User/Home";
import SignUp from "./pages/Admins/SignUp";
import {Toaster} from 'react-hot-toast';
import OTP from "./pages/Admins/OTP";
import MainPanel from "./pages/Admins/dashboard/MainPanel";
const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Toaster/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/signup" element={} /> */}
          {/* <Route path="/login" element={} /> */}

          <Route path="/admin">
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="otp/:id"  element={<OTP/> }/>
              <Route path="dashboard"  element={<MainPanel/> }/>
          </Route>
          
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
