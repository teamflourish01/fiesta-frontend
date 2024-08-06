"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import flogo from "../images/flogo.webp";
import logo from "../images/logo.png";
import insta from "../images/insta.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import mail from "../images/mail.png";
import hamburger from "../images/hamburger.png";
import closeImage from "../images/closeImage.png";
import whatapp from "../images/whatapp.png";

import "../styles/navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const navbarRef = useRef(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    if (clicked) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clicked]);

  return (
    <>
      <section className="screen-tablet-hidden">
        <div className="background-img">
          <div className="bg">
            <div className="main-width">
              <div style={{ padding: "15px 0" }}>
                <div className="under1320width">
                  <div className="all-padding">
                    <div className="d-flex">
                      <div className="under-d-flex social-icon">
                        <>
                          <Image src={mail} alt="" />
                          <p className="infoexamplemail">
                            <a
                              href="https://mail.google.com/mail/?view=cm&fs=1&to=fiestadesign2020@gmail.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              fiestadesign2020@gmail.com
                            </a>
                          </p>
                        </>
                      </div>
                      <div className="social-icon under-d-flex">
                        <Link
                          href="https://www.instagram.com/fiestadesignstudio/?igsh=am8ycWEycXRrZXZw"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={insta} alt="whatsapp" />
                        </Link>
                        <Link
                          href="https://www.facebook.com/people/Fiesta-Design-Studio/100090484164019/?mibextid=ZbWKwL"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={facebook} alt="Facebook" />
                        </Link>
                        <Link
                          href="https://api.whatsapp.com/send/?phone=7485906551&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={whatapp} alt="ytlink" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="main-widths">
        <nav ref={navbarRef} className="sticky-top nav2 no-copy-text">
          <div className="under1320width">
            <div className="all-padding">
              <div className="nav">
                <Link href="/">
                  <Image className="desi-logo" src={flogo} alt="Logo" />
                </Link>

                <div>
                  <ul
                    id="navbar"
                    onClick={() => {
                      setClicked(!clicked);
                      window.scrollTo(0, 0);
                    }}
                    className={clicked ? "#navbar active" : "#navbar"}
                  >
                    <div className="under-nav-flex">
                      <li className="naves">
                        <Link className="under" href="/">
                          <span className="do">Home</span>
                        </Link>
                      </li>
                      <li className="naves">
                        <Link className="under" href="/about">
                          <span className="do">About Us</span>
                        </Link>
                      </li>
                      <li className="naves">
                        <Link className="under" href="/services">
                          <span className="do">Services</span>
                        </Link>
                      </li>
                      <li className="naves">
                        <Link className="under" href="/blog">
                          <span className="do">Blogs</span>
                        </Link>
                      </li>
                      <li className="naves">
                        <Link className="under" href="/contact">
                          <span className="do">Contact Us</span>
                        </Link>
                      </li>
                      <div className="navs-main-icon">
                        <div className="navs-icon navs-d-flex">
                          <Link
                            href="https://www.instagram.com/fiestadesignstudio?igsh=am8ycWEycXRrZXZw"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image src={insta} alt="whatsapp" />
                          </Link>
                          <Link
                            href="https://www.facebook.com/people/Fiesta-Design-Studio/100090484164019/?mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image src={facebook} alt="Facebook" />
                          </Link>
                          <Link
                            href="https://api.whatsapp.com/send/?phone=7485906551&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image src={whatapp} alt="ytlink" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>

                <div id="mobile" onClick={handleClick}>
                  <Image
                    id="bar"
                    className="menu-icon"
                    src={clicked ? closeImage : hamburger}
                    alt="menu icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
