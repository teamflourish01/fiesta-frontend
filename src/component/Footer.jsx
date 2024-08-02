import React from 'react';
import '../styles/footer.css';
import Image from 'next/image';
import logo from '../images/fiestaLogo.png';
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { RiInstagramFill } from "react-icons/ri";
// import Image from 'next/image';
import wpicon from '../images/wp.png';
import { IoLogoWhatsapp } from "react-icons/io";

import { MdOutlineWhatsapp } from "react-icons/md";


// const Footer = () => {
//   return (
//     <>
//       <section>
//         <div className="main-width footer-bg">
//           <div className="under-1320">
//             <div className="all-padding">
//               <div className="footer-container">
//                 <div className="footer-content">
//                   <div className="footer-logo-container">
//                     {/* Add your logo here */}
//                     <Image className="footer-logo" src={logo} alt="Logo" />
//                   </div>
//                   <div className="footer-links">
//                     <ul className="link-tab">
//                       <li>
//                         Home
//                       </li>
//                       <li>
//                         About
//                       </li>
//                       <li>
//                         Services
//                       </li>
//                       <li>
//                         Blog
//                       </li>
//                       <li>
//                         Portfolio
//                       </li>
//                       <li>
//                         Contact Us
//                       </li>
//                     </ul>

//                   </div>
//                   <div className="footer-social-icons">
//                     <IoLogoWhatsapp />
//                     <CgFacebook />
//                     <RiInstagramFill />
//                   </div>
//                 </div>

//               </div>


//             </div>
//           </div>
//           <div className="white-line"></div>
//           <div className="copy-right">
//             Copyrights © 2024 Fiesta All rights reserved.
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Footer;
const Footer = () => {
  return (
    <>
      <section>
        <div className="main-width footer-bg footer-bg-img">
          <div className="under-1320">
            <div className="all-padding">
              <div className="footer-container">
                <div className="footer-content">
                  <div className="footer-logo-container">
                    <Image className="footer-logo" src={logo} alt="Logo" />
                  </div>
                  <div className="footer-links">
                    <ul className="link-tab">
                      <li>Home</li>
                      <li>About</li>
                      <li>Services</li>
                      <li>Blog</li>
                      <li>Portfolio</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                  <div className="footer-social-icons">
                    <IoLogoWhatsapp />
                    <CgFacebook />
                    <RiInstagramFill />
                  </div>
                </div>
              </div>
              {/* <img src={wpicon} alt="Vector Image" className="vector-image" /> */}
            </div>
          </div>
          <div className="white-line"></div>
          <div className="copy-right">
            Copyrights © 2024 Fiesta All rights reserved.
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
