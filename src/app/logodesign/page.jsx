import React from "react";
import ajay from "../../images/ajay.png";
import "../../styles/service.css";
import "../../styles/logodesign.css";
import closeImage from "../../images/closeImage.png";

import Image from "next/image";
import Link from "next/link";
// import round from "../images/round.png";
// import sround from "../images/sround.png";
import Homesection from "@/component/Homesection";
import abbg from "../../images/abbg.png";
const page = () => {
  return (
    <>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding"></div>
            <div className="destination-container">
              <div className="destination-flex">
                <div className="destination-right">
                  <p className="Graphic">
                    We are Specialized Logo Design Services Provider
                  </p>
                  <div className="care">
                    <li>Best logo providers in Ahmedabad</li>
                    <li className="banner">Best industry experts</li>
                  </div>
                </div>
                <div className="destination-left">
                  <Image src={ajay} alt="" className="main-image" />
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
          <hr />
        </div>
      </section>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding">
              <div className="service-top-padding">
                <div className="service-flex">
                  <div className="services">
                    <p className="our-services">our services</p>
                    <hr />
                    <div className="social-div">
                      <p>Social Media Post</p>
                      <Link href="/logodesign" className="style-none">
                        <p style={{ cursor: "pointer" }}>Logo Design</p>
                      </Link>
                      <Link href="/brochure" className="style-none">
                        <p style={{ cursor: "pointer" }}>Brochure Design</p>
                      </Link>
                    </div>
                  </div>

                  <div className="social-media">
                    <div className="marketing-main">
                      <p className="s-marketing">
                        Why should you hire a logo design company?
                      </p>
                      <p className="Promote">
                        Best creative logo design company
                      </p>
                      <p className="media-marketing">What is Logo?</p>
                      <p className="products">
                        A logo is a visual symbol representing a company, brand,
                        or organization, designed to aid public recognition and
                        convey identity.
                      </p>
                      <p className="products">
                        Fiesta is a team of professional graphic designers with
                        more than 9 years experience and served more than 150+
                        Clients worldwide with over 1000+ projects. logo design
                        company in Ahmedabad- Fiesta is a best logo design
                        company in Ahmedabad offering logo design services at
                        low prices.As a leading logo design company, we
                        understand the key elements that make a logo
                        exceptional, setting us apart as pioneers in logo design
                        across India.
                      </p>
                      <p className="media-marketing">
                        How do we create a logo?
                      </p>

                      <p className="dynamic">
                        As the best logo design company in Ahmedabad we create
                        and deliver with satisfaction and aerodynamic process.
                        We start project by discovering or research on project
                        to moving next step is to create concept with initial
                        ideas and transforming them with sketch and designs that
                        align with brand, next we present these design to the
                        client, after feedback from client we revise these with
                        revisions process. After compilation of logo design,
                        Analyze for improvements before finalize the logo, once
                        finalize we deliver the logo along with guideline
                        consistent brand use.
                      </p>
                      <p className="choose-us">Our Plan</p>
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
                          <p className="logi-idia"> Competitors Logo Analysis</p>
                        </div>
                        <hr />

                        <div className="Payment-Duration">
                          <p className="logi-idia"> Responsive Profile Pics for all Social Media Accounts</p>
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
                          <p className="logi-idia"> Competitors Logo Analysis</p>
                        </div>
                        <hr />

                        <div className="Payment-Duration">
                          <p className="logi-idia"> Responsive Profile Pics for all Social Media Accounts</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Letterhead & Envelope Design</p>
                        </div>
                        <hr />

                        <div className="Design-Duration">
                          <p className="logi-idia"> Logo 2D & 3D Animation Video</p>
                        </div>
                        <hr />

                        <div className="price-container">
                          <p className="month">Price</p>

                          <hr />
                          <p className="month">INR 1,999/-</p>
                        </div>
                      </div>
                    </div>

                    <div className="btn">
                      <button className="button">Request Proposal</button>
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
