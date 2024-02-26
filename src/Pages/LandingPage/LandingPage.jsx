import React, { useEffect } from 'react'
import "./landing.css";

import Navbar from '../../Components/Navbar/Navbar';

import heroVideo from "../../assets/landing-video.mp4";
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
          <div className="flow-item" data-aos="fade-up" data-aos-offset="250">
            <FaRegThumbsUp color='black' size={38} />
            <p>Get Approval</p>
          </div>
          <div className="flow-item" data-aos="fade-up" data-aos-offset="300">
            <FaTruck color='black' size={38} />
            <p>Start Driving</p>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil iste dolores dolorum, quod ullam error harum, ducimus laborum odio rem tempore laudantium maiores expedita neque dicta eius necessitatibus consequuntur. Dolores pariatur excepturi fugit molestias cupiditate consectetur temporibus minus dolor repellat eligendi tempore porro, labore deserunt quia quam ea et numquam expedita? Vel rem fuga minima voluptate quia. Voluptates voluptatem, voluptatum exercitationem, amet laborum cumque sed placeat fugiat ab corrupti enim et error aut est tempore reiciendis quae non soluta cupiditate similique officiis. Facilis fugit quae mollitia sunt, sequi ab suscipit. Reprehenderit consequuntur error delectus labore eveniet inventore ex dicta impedit, explicabo eos, architecto ea in itaque saepe. Quibusdam sapiente doloribus libero perferendis. Qui non cumque eius temporibus pariatur reprehenderit, voluptatibus eos eum ab repellendus, culpa libero aliquam inventore magnam sunt magni assumenda? Eveniet autem ullam quam iusto voluptatum, dolorem perferendis ad quidem molestias libero sunt corrupti possimus? Harum repudiandae voluptas exercitationem, corrupti qui quaerat mollitia sint est consectetur nemo cumque odit nam quas sapiente dolorem aut possimus dignissimos labore nostrum optio itaque voluptates debitis necessitatibus quasi. Ratione, dolor, animi sint quos perspiciatis maxime atque laboriosam nam cupiditate maiores ullam, nostrum tempora id ad corporis. Excepturi minus itaque voluptas quaerat.</h1>
      </div>
    </div>
  )
}

export default LandingPage