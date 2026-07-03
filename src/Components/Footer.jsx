import React from "react";
import "./Footer.css";
import { TfiInstagram } from "react-icons/tfi";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


function Footer() {
   return (
      <>
         <div className="Footer">
            <div className="box1">
               <h3>Top Products</h3><br />
               <li>MERN Stack<br /> Development</li><br />
               <li>Digital Marketing</li><br />
               <li>Advance Excel</li><br />
               <li>ADCA</li><br />

            </div>
            <div className="box2">
               <h3>Quick Links</h3><br />
               <li>Certification</li><br />
               <li>Offers</li><br />
               <li>Reviews</li><br />
            </div>
            <div className="box3">
               <h3>Features</h3><br />
               <li>Jobs</li><br />
               <li>Our Accreditations</li><br />
               <li>Registration</li><br />
               <li>Get In Touch</li><br />
            </div>
            <div className="box4">
               <h3>Resources</h3><br />
               <li>Get Notes</li><br />
               <li>Research</li><br />
               <li>Experts</li><br />
               <li>Agencies</li><br />
               <li>Privacy</li><br />
            </div>
            <div className="box5">
               <img src="https://ambiencecomputereducation.com/img/ambience_computer_education.webp" alt="" srcset="" height="200px" width="200px"></img>
            </div>
         </div>
         <div className="Footer2">
            <p className="Copyright">Copyright © 2026 All rights reserved | </p>
            <p className="Footer-text">Ambience Computer Education</p>

            <div className="social-icons">
               <div className="icon"><RiFacebookFill /></div>
               <div className="icon"><TfiInstagram /></div>
               <div className="icon"><CiTwitter /></div>
               <div className="icon"><FaGithub /></div>
            </div>
         </div>
      </>
   );
}

export default Footer;