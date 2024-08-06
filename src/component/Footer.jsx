import React from "react";
import "../styles/footer.css";
import Image from "next/image";
import logo from "../images/fiestaLogo.png";
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { RiInstagramFill } from "react-icons/ri";
// import Image from 'next/image';
import wpicon from "../images/wp.png";
import { IoLogoWhatsapp } from "react-icons/io";

import { MdOutlineWhatsapp } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section>
        <div className="main-width footer-bg">
          <div className="under-1320">
            <div className="all-padding">
              {/* <div className="footer-container"> */}
              <div className="footer-content">
                <div className="footer-logo-container">
                  {/* Add your logo here */}
                  <Link className=" links" href="/">
                  <Image className="footer-logo" src={logo} alt="Logo" />
                  </Link>
                </div>
                {/* <div className="footer-links"> */}
                <ul className="link-tab">
                  <li>
                    <Link className=" links" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="links" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="links" href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="links" href="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="links" href="/NewsEvent">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link className="links" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                {/* </div> */}
                <div className="footer-social-icons">
                <a
                    href="https://wa.me/7485906551"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <IoLogoWhatsapp />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100090484164019&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CgFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/fiestadesignstudio?igsh=am8ycWEycXRrZXZw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <RiInstagramFill />
                  </a>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="white-line"></div>
          <div className="copy-right">
            Copyrights © 2024 Fiesta All rights reserved.
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
