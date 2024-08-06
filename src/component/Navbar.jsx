"use client";



import react ,{ useState } from "react"
import Link from "next/link";
import Image from "next/image";

import logo from "../images/logo.png"
import insta from "../images/insta.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import mail from "../images/mail.png"
import hamburger from "../images/hamburger.png"
import closeImage from "../images/closeImage.png"



import "../styles/navbar.css"
const Navbar = () => {
    const [clicked, setClicked] = useState(false);



  const handleclick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div className="bg-img">
      <section className="screen-tablet-hidden">
      <div className="background-img">
        <div className="bg">
          <div className="main-width">
            <div style={{ padding: "15px 0" }}>
              <div className="under1320width">
                <div className="all-padding"> 
                  <div className="d-flex">
                    <div
                      className="under-d-flex social-icon"
                      // style={{ padding: "0 0 0 5px" }}
                    >
                     
                        <>
                          <Image  src={mail} alt="" />
                          <p className="infoexamplemail">
                            <a href=" ">fiesta9847@gmail.com</a>
                          </p>
                        </>
                     
                    </div>
                    <div className="social-icon under-d-flex">
                     
                        
                          <Link href="" target="_blank" rel="noopener noreferrer"><Image src={insta} alt="whatsapp" /></Link>
                          <Link href="" target="_blank" rel="noopener noreferrer"><Image src={facebook} alt="Facebook" /></Link>

                          <Link href="" target="_blank" rel="noopener noreferrer"><Image src={twitter} alt="ytlink" /></Link>

                    
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
      <nav className="sticky-top nav2 no-copy-text">
        <div className=" under1320width">
          <div className="all-padding">
            <div className="nav">
              <Link href="/">
              <Image className="desi-logo" src={logo} alt="Logo" />

                {/* <img className="desi-logo" src={flonixlogoblack} alt="" /> */}
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
                      <Link className="under" href="/NewsEvent">
                        <span className="do"> Portfolio</span>
                      </Link>
                    </li>
                    <li className="naves">
                      <Link className="under" href="/contact">
                        <span className="do">Contact Us</span>
                      </Link>
                    </li>
                    
                    <div className="navs-main-icon">
                      <div className="navs-icon navs-d-flex">
                        
                      <Link href="" target="_blank" rel="noopener noreferrer"><Image src={insta} alt="whatsapp" /></Link>
                          <Link href="" target="_blank" rel="noopener noreferrer"><Image src={facebook} alt="Facebook" /></Link>

                          <Link href="" target="_blank" rel="noopener noreferrer"><Image src={twitter} alt="ytlink" /></Link>
                      </div>
                    </div>
                  </div>
                  
                </ul>
              </div>

              {/* <div id="mobile" onClick={handleclick}>
                <i
                  id="bar"
                  className={clicked ? "fas fa-times" : "fas fa-bars"}
                ></i>
              </div> */}
              <div id="mobile" onClick={handleclick}>
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
      </div>
    </>
  )
}

export default Navbar
