"use client"

import React from "react";
import "../styles/footer.css";
import Image from "next/image";
import logo from "../images/fiestaLogo.png";
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Import usePathname

const Footer = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <>
      <section>
        <div className="main-width footer-bg">
          <div className="under-1320">
            <div className="all-padding">
              <div className="footer-content">
                <div className="footer-logo-container">
                  <Link className="links" href="/">
                    <Image className="footer-logo" src={logo} alt="Logo" />
                  </Link>
                </div>
                <ul className="link-tab">
                  <li>
                    <Link className={`links ${pathname === '/' ? 'active' : ''}`} href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className={`links ${pathname === '/about' ? 'active' : ''}`} href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className={`links ${pathname === '/services' ? 'active' : ''}`} href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className={`links ${pathname === '/blog' ? 'active' : ''}`} href="/blog">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className={`links ${pathname === '/contact' ? 'active' : ''}`} href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="footer-social-icons">
                  <a href="https://wa.me/7485906551" target="_blank" rel="noopener noreferrer">
                    <IoLogoWhatsapp />
                  </a>
                  <a href="https://www.facebook.com/people/Fiesta-Design-Studio/100090484164019/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <CgFacebook />
                  </a>
                  <a href="https://www.instagram.com/fiestadesignstudio?igsh=am8ycWEycXRrZXZw" target="_blank" rel="noopener noreferrer">
                    <RiInstagramFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="white-line"></div>
          <div className="copy-right">
            Copyrights © 2024 Fiesta All rights reserved.
            <p className="fivep">
              Design & Developed By: <Link href="https://teamflourish.co/" className="florish">Flourish Creations Pvt. Ltd.</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
