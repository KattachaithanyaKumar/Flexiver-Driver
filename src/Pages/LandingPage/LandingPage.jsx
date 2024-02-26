import React from 'react'
import "./landing.css";

import Navbar from '../../Components/Navbar/Navbar';

import heroVideo from "../../assets/landing-video.mp4";
import {FaFilePen, FaTruck } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="hero">
          <video src={heroVideo} autoPlay muted loop />
          <div className="hero-text fade-up">
            <h1>START EARNING <br />WITH YOUR VAN.</h1>
            <p>Become a Partner in Our Moving Services Network</p>
          </div>
        </div>

        <div className="flow">
          <div className="flow-item">
            <FaFilePen color='black' size={38} />
            <p>Register</p>
          </div>
          <div className="flow-item">
            <FaRegThumbsUp color='black' size={38} />
            <p>Get Approval</p>
          </div>
          <div className="flow-item">
            <FaTruck color='black' size={38} />
            <p>Start Driving</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage