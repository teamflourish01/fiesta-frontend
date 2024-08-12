"use client";

import React, { useState } from "react";
import ajay from "../../images/ajay.png";
import "../../styles/service.css";
import "../../styles/logodesign.css";
import "../../styles/about.css";
import drop from "../../images/drop.png";
import "../../styles/homesection.css";
import lbanner from "../../images/lbanner.png";

import closeImage from "../../images/closeImage.png";
import pclogo from "../../images/crlogopc.png";
import mobilelogo from "../../images/crlogomobile.png";
import Image from "next/image";
import Link from "next/link";
// import round from "../images/round.png";
// import sround from "../images/sround.png";
import Homesection from "@/component/Homesection";
import abbg from "../../images/abbg.png";
import logodesign from "../../images/logodesign.png";
const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [selectedPage, setSelectedPage] = useState("/logodesign");

  return (
    <>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding home">
              <div className="destination-container">
                <div className="destination-flex">
                  <div className="destination-right-about">
                    <p className="Graphic-about">
                      We are Specialized Logo Design Service Provider
                    </p>

                    <div className="care-about">
                      <ul className="ul-dot">
                        <li>Best Logo Provider in Ahmedabad</li>
                        <li className="banner">Industry best experts</li>
                      </ul>
                    </div>
                  </div>
                  <div className="destination-left">
                    <Image src={lbanner} alt="" className="main-image" />
                    <div className="round-img"></div>
                    <div className="top-round"></div>
                    <div className="s-round"></div>
                    <Image
                      src={closeImage}
                      alt=""
                      className="corner-image top-right rotating"
                    />
                    <Image
                      src={closeImage}
                      alt=""
                      className="corner-image bottom-left rotating"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <div className="responsive">
        <div className="servicess">
          <div className="arrow">
            <p className="our-services">Our Services</p>
            <Image
              onClick={toggleDropdown}
              src={drop}
              className="cursor-pointer"
            />
            {/* <p onClick={toggleDropdown} className="cursor-pointer">V</p> */}
          </div>
          {isOpen && (
            <div className="social-div">
              <hr />
              <Link href="/services" className="style-none">
                <p
                  style={{ cursor: "pointer" }}
                  className={selectedPage === "/services" ? "underline" : ""}
                  onClick={() => setSelectedPage("/services")}
                >
                  <span className="side-padding">Social Media Post</span>
                </p>
              </Link>
              <Link href="/logodesign" className="style-none">
                <p
                  style={{ cursor: "pointer" }}
                  className={selectedPage === "/logodesign" ? "underline" : ""}
                  onClick={() => setSelectedPage("/logodesign")}
                >
                  <span className="side-padding">Logo Design</span>
                </p>
              </Link>
              <Link href="/brochure" className="style-none">
                <p
                  style={{ cursor: "pointer" }}
                  className={selectedPage === "/brochure" ? "underline" : ""}
                  onClick={() => setSelectedPage("/brochure")}
                >
                  <span className="side-padding">Brochure Design</span>
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding">
              <div className="service-top-padding">
                <div className="service-flex">
                  <div className="services">  
                    <p className="our-services">Our Services</p>
                    <hr />
                    <div className="social-div">
                      <Link href="/services">
                        <p
                          className={
                            selectedPage === "/services" ? "underline" : ""
                          }
                          onClick={() => setSelectedPage("/services")}
                        >
                          Social Media Post
                        </p>
                      </Link>
                      <Link href="/logodesign">
                        <p
                          className={
                            selectedPage === "/logodesign" ? "underline" : ""
                          }
                          onClick={() => setSelectedPage("/logodesign")}
                        >
                          Logo Design
                        </p>
                      </Link>
                      <Link href="/brochure">
                        <p
                          className={
                            selectedPage === "/brochure" ? "underline" : ""
                          }
                          onClick={() => setSelectedPage("/brochure")}
                        >
                          Brochure Design
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="social-media">
                    <div className="marketing-main">
                      <p className="s-marketing">
                        Why Should You Hire a Logo Design Company?
                      </p>
                      <p className="Promote">
                        Best Creative Logo Design Company
                      </p>
                      <p className="media-marketing">What is a Logo?</p>
                      <p className="products twop">
                        A logo is a visual symbol representing a company, brand,
                        or organization, designed to aid public recognition and
                        convey identity.
                      </p>
                      <p className="products pro-padding">
                        Fiesta is a team of professional graphic designers with
                        more than 5 years of experience. We have served over 150
                        clients worldwide with more than 1,000+ projects. As the
                        best logo design company in Ahmedabad, Fiesta offers
                        logo design services at competitive prices. As a leading
                        logo design company, we understand the key elements that
                        make a logo exceptional, setting us apart as pioneers in
                        logo design across India.
                      </p>
                      <p className="media-marketing">
                        How Do We Create a Logo?
                      </p>
                      <div className="notion-circle">
                        <Image
                          className="pclogo"
                          src={pclogo}
                          alt="round logo"
                        />
                        <Image
                          className="mobilelogo"
                          src={mobilelogo}
                          alt="round logo"
                        />
                      </div>

                      <p className="dynamic">
                        As the best logo design company in Ahmedabad, we create
                        and deliver with satisfaction through an aerodynamic
                        process. We start each project by discovering and
                        researching the project. The next step is to create
                        concepts with initial ideas, transforming them into
                        sketches and designs that align with the brand. Next, we
                        present these designs to the client. After receiving
                        feedback, we revise them through a revision process.
                        After completing the logo design, we analyze it for
                        improvements before finalizing the logo. Once finalized,
                        we deliver the logo along with guidelines for consistent
                        brand use.
                      </p>
                      <p className="choose-us">Pricing</p>
                    </div>

                    <div className="plan-container">
                      <div className="basic-plans">
                        <p className="Basic-Plan">Basic Plan</p>
                        <div className="logo-plan">
                          <p className="logi-idia">Logo Design Idea - 1</p>
                        </div>
                        <hr />

                        <div className="logo-plan">
                          <p className="logi-idia">Logo Revisions - 1</p>
                        </div>
                        <hr />

                        <div className="logo-Duration">
                          <p className="logi-idia">
                            Logo Design Duration - 1 Working Day
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia">
                            {" "}
                            Logo Design Format - JPG / PNG
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Text Logo</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="Payment-Duration">
                          <p className="logi-idia">
                            {" "}
                            Payment Options - 100% Advance
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="Payment-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="price-container">
                          <p className="month">Price</p>

                          <hr />
                          <p className="month">INR 1,999/-</p>
                        </div>
                      </div>
                      <div className="basic-plans">
                        <p className="Basic-Plan">Standard Plan</p>
                        <div className="logo-plan">
                          <p className="logi-idia">Logo Design Idea - 2</p>
                        </div>
                        <hr />

                        <div className="logo-plan">
                          <p className="logi-idia">Logo Revisions - 2</p>
                        </div>
                        <hr />

                        <div className="logo-Duration">
                          <p className="logi-idia">
                            Logo Design Duration - 2 to 4 Working Days
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia">
                            {" "}
                            Logo Design Format - JPG / PNG
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Logo Source File (Ai)</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Custom Graphics</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Text Logo</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Tag Line</p>
                        </div>
                        <hr />

                        <div className="Payment-Duration">
                          <p className="logi-idia">
                            {" "}
                            Payment Options - 50% Advance & 50% After Completion
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia">
                            {" "}
                            Competitors Logo Analysis
                          </p>
                        </div>
                        <hr />

                        <div className="Payment-Duration">
                          <p className="logi-idia">
                            {" "}
                            Responsive Profile Pics for all Social Media
                            Accounts
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> N.A.</p>
                        </div>
                        <hr />

                        <div className="price-container">
                          <p className="month">Price</p>

                          <hr />
                          <p className="month">INR 4,999/-</p>
                        </div>
                      </div>

                      <div className="basic-plans">
                        <p className="Basic-Plan">Basic Plan</p>
                        <div className="logo-plan">
                          <p className="logi-idia">Logo Design Idea - 3</p>
                        </div>
                        <hr />

                        <div className="logo-plan">
                          <p className="logi-idia">Logo Revisions - 3</p>
                        </div>
                        <hr />

                        <div className="logo-Duration">
                          <p className="logi-idia">
                            Logo Design Duration - 2 to 6 Working Days
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia">
                            {" "}
                            Logo Design Format - JPG / PNG
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Logo Source File (Ai)</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Custom Graphics</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Text Logo</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Business Card</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Tag Line</p>
                        </div>
                        <hr />

                        <div className="Payment-Duration">
                          <p className="logi-idia">
                            {" "}
                            Payment Options - 50% Advance & 50% After Completion
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia">
                            {" "}
                            Competitors Logo Analysis
                          </p>
                        </div>
                        <hr />

                        <div className="Payment-Duration">
                          <p className="logi-idia">
                            {" "}
                            Responsive Profile Pics for all Social Media
                            Accounts
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia">
                            {" "}
                            Letterhead & Envelope Design
                          </p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia">
                            {" "}
                            Logo 2D & 3D Animation Video
                          </p>
                        </div>
                        <hr />

                        <div className="price-container">
                          <p className="month">Price</p>

                          <hr />
                          <p className="month">INR 7,999/-</p>
                        </div>
                      </div>
                    </div>

                    <div className="btn-req">
                      <Link className="links" href="/contact/#contact">
                        <button className="req">REQUEST PROPOSAL</button>
                      </Link>
                      {/* <button className="button">Request Proposal</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
