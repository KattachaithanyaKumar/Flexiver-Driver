import React, { useEffect } from 'react'
import "./landing.css";

import Navbar from '../../Components/Navbar/Navbar';

import heroVideo from "../../assets/landing-video.mp4";
import map from "../../assets/map.png";

import {FaFilePen, FaTruck } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import Aos from 'aos';

const LandingPage = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="hero">
          <video src={heroVideo} autoPlay muted loop />
          <div className="hero-text" data-aos="fade-up">
            <h1>START EARNING <br />WITH YOUR VAN.</h1>
            <p>Become a Partner in Our Moving Services Network</p>
          </div>
        </div>

        <div className="flow">
          <div className="flow-item" data-aos="fade-up" data-aos-offset="200">
            <FaFilePen color='black' size={38} />
            <p>Register</p>
          </div>
          <div className="flow-item" data-aos="fade-up" data-aos-offset="300">
            <FaRegThumbsUp color='black' size={38} />
            <p>Get Approval</p>
          </div>
          <div className="flow-item" data-aos="fade-up" data-aos-offset="400">
            <FaTruck color='black' size={38} />
            <p>Start Driving</p>
          </div>
        </div>
        <div className="map">
          <img src={map} alt="map" />
        </div>

        <div className="about" id='about' data-aos="fade-right">
          <h1>ABOUT US</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames. Est ultricies integer quis auctor elit. Erat pellentesque adipiscing commodo elit. Viverra adipiscing at in tellus integer feugiat scelerisque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur exercitationem at, omnis vel, corporis porro fugiat alias reprehenderit minus rerum quaerat explicabo rem ipsum autem dolore, praesentium itaque dolor. Veniam, quam nesciunt ex, repudiandae, ad iste maiores id totam placeat consectetur ullam soluta quas aliquam illo? Repellat, possimus quasi.</p>
        </div>
        <div className="service" id='service' data-aos="fade-left">
          <h1>SERVICES</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames. Est ultricies integer quis auctor elit. Erat pellentesque adipiscing commodo elit. Viverra adipiscing at in tellus integer feugiat scelerisque.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage