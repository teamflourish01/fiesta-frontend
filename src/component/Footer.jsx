// import React from 'react';
// import '../styles/footer.css';

// const Footer = () => {
//   return (
//     <>
//       <section>
//         <div className="main-width">
//           <div className="under-1320">
//             <div className="all-padding">
//               <div className="footer-container">
//                 <div className="footer-links">
//                   <div className="link-tab">
//                     <li>
//                       Home
//                     </li>
//                     <li>
//                       About 
//                     </li>
//                     <li>
//                       Services
//                     </li>
//                     <li>
//                       Portfolio
//                     </li>
//                     <li>
//                      ContactUs
//                      </li>
//                   </div>
//                 </div>
//                 <div className="copy-right">

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Footer
import React from 'react';
import '../styles/footer.css';
import Image from 'next/image';
import logo from '../images/fiestaLogo.png';
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { RiInstagramFill } from "react-icons/ri";





const Footer = () => {
  return (
    <>
      <section>
        <div className="main-width footer-bg">
          <div className="under-1320">
            <div className="all-padding">
              <div className="footer-container">
                <div className="footer-content">
                  <div className="footer-logo-container">
                    {/* Add your logo here */}
                    <Image className="footer-logo" src={logo} alt="Logo" />
                  </div>
                  <div className="footer-links">
                    <ul className="link-tab">
                      <li>
                        Home
                      </li>
                      <li>
                        About
                      </li>
                      <li>
                        Services
                      </li>
                      <li>
                        Portfolio
                      </li>
                      <li>
                        Contact Us
                      </li>
                    </ul>

                  </div>
                  <div className="footer-social-icons">
                    <FaTwitter />
                    <CgFacebook />
                    <RiInstagramFill />
                  </div>
                </div>

              </div>


            </div>
          </div>
          <div className="white-line"></div>
          <div className="copy-right">
            Copyrights © 2024 Fiesta All rights reserved.
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;
