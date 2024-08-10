"use client";
import React, { useState } from "react";
import ajay from "../../images/ajay.png";
import "../../styles/service.css";
import closeImage from "../../images/closeImage.png";
import Image from "next/image";
import drop from "../../images/drop.png";
import "../../styles/homesection.css";
import sbanner from "../../images/sbanner.png";

import "../../styles/about.css";
import aboutimg from "../../images/aboutbanner.png";

import Link from "next/link";
// import round from "../images/round.png";
// import sround from "../images/sround.png";
// import serviceb from "../../images/service.png";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [selectedPage, setSelectedPage] = useState("/services");
  return (
    <>
      {/* <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding home">
              <div className="destination-container">
                <div className="destination-flex">
                  <div className="destination-right">
                    <p className="Graphic">
                      We are Specialized Social Media Marketing service provider
                    </p>
                    <div className="care">
                      <li>
                        Best Social Media Marketing service providers in
                        Ahmedabad
                      </li>
                      <li className="banner service-banner">
                        banner with sample of Social Media Graphical images
                      </li>
                    </div>
                  </div>
                  <div className="destination-left">
                    <Image src={serviceb} alt="" className="main-image" />
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
      </section> */}

      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding home">
              <div className="destination-container">
                <div className="destination-flex-about">
                  <div className="destination-right-about">
                    <p className="Graphic-about">
                      We are Specialized Social Media Marketing Service
                      Providers
                    </p>
                    <div className="care-about">
                      <ul className="ul-dot">
                        <li>
                          Best Social Media Marketing service providers in
                          Ahmedabad
                        </li>
                        <li className="service-padding-about">
                          banner with sample of Social Media Graphical images
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="destination-left">
                    <Image
                      src={sbanner}
                      alt="aboutimg"
                      className="main-image"
                    />
                    <div className="round-img"></div>
                    <div className="top-round"></div>
                    <div className="s-round"></div>
                    <Image
                      src={closeImage}
                      alt="closeimage1"
                      className="corner-image top-right rotating"
                    />
                    <Image
                      src={closeImage}
                      alt="closeimage"
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
          </div>
          {isOpen && (
            <div className="social-div">
              <hr />
              <Link href="/services" className="style-none">
                <li
                  style={{ cursor: "pointer" }}
                  className={selectedPage === "/services" ? "underline" : ""}
                  onClick={() => setSelectedPage("/services")}
                >
                  <span className="side-padding">Social Media Post</span>
                </li>
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
            <div className="service-top-padding unset">
              <div className="all-padding">
                <div className="service-flex">
                <div className="services">
      <p className="our-services">Our Services</p>
      <hr />
      <div className="social-div">
        <Link href="/services">
          <p
            className={selectedPage === "/services" ? "underline" : ""}
            onClick={() => setSelectedPage("/services")}
          >
            Social Media Post
          </p>
        </Link>
        <Link href="/logodesign">
          <p
            className={selectedPage === "/logodesign" ? "underline" : ""}
            onClick={() => setSelectedPage("/logodesign")}
          >
            Logo Design
          </p>
        </Link>
        <Link href="/brochure">
          <p
            className={selectedPage === "/brochure" ? "underline" : ""}
            onClick={() => setSelectedPage("/brochure")}
          >
            Brochure Design
          </p>
        </Link>
      </div>
    </div>

                  <div className="social-media">
                    <div className="marketing-main">
                      <p className="s-marketing ">Social Media Marketing</p>
                      <p className="Promote">
                        Promote Your Brand Story with the Right Strategies
                      </p>
                      <p className="media-marketing">
                        What is Social Media Marketing?
                      </p>
                      <p className="products products-copy">
                        Social media marketing is the process of promoting
                        products or services through social media platforms to
                        build brand awareness, engage with audiences, and drive
                        business results.
                      </p>
                      <div className="box-p">
                        <div className="div-flex">
                          <div className="marketing-social">
                            <p className="media-social">
                              Why Social Media Marketing?
                            </p>
                            <hr />
                            <div className="boost">
                              <li>Boost Brand Visibility</li>
                              <li>Engage with Your Audience</li>
                              <li>Drive Conversions</li>
                              <li>Stay Ahead of Trends</li>
                              <li>Builds Customer Trust</li>
                            </div>
                          </div>
                          <div className="ours-services">
                            <p className="media-social">
                              Our Social Media Marketing Services
                            </p>
                            <hr />
                            <div className="strategy">
                              <li>Strategy Development</li>
                              <li>Content Creation</li>
                              <li>Social Media Management</li>
                              <li>Advertising Campaigns</li>
                              <li>Analytics & Reporting</li>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="adjustments">
                        <p>
                        Detailed analytics to measure the effectiveness of your social media campaigns. 
                        </p>
                        <p>
                          Regular reports and insights to guide strategy
                          adjustments and improvements.
                        </p>
                      </div>
                      <p className="choose-us">Why Choose Us?</p>
                      <p className="dynamic">
                        At Fiesta, we blend graphic design skills with advanced social media marketing to deliver outstanding results. Our team adapts to the latest trends, ensuring your brand excels in the dynamic world of social media.
                      </p>
                      <p className="Pricing">Pricing</p>
                    </div>
                    <div className="plans-container">
                      <div className="plans-flex">
                        <div className="basic-plans">
                          <p className="Basic-Plan">Basic Plan</p>
                          <p className="image-post">8 Image Posts</p>
                          <hr />
                          <p className="image-post">N.A.</p>
                          <hr />
                          <p className="image-post">3 Story Designs</p>
                          <hr />
                          <p className="image-post"> Festival Posts</p>
                          <hr />
                          <p className="image-post">N.A.</p>
                          <hr />
                          <p className="image-post">N.A.</p>
                          <hr />
                          <p className="image-post">Creative Content</p>
                          <hr />
                          <p className="image-post">Captions</p>
                          <hr />
                          <p className="image-post">Hashtags</p>
                          <hr />
                          <p className="image-post">Page Set-up</p>
                          <hr />
                          <p className="image-post">
                            Instagram & Facebook Page Manage
                          </p>
                          <hr />
                          <p className="image-post">
                            Create in the Visuals (It is best if you can give us
                            real photos of the business)
                          </p>
                          <hr />
                          <p className="image-post">Real Time Reporting</p>
                          <hr />
                          <p className="image-post">N.A.</p>
                          <hr />
                          <p className="image-post">N.A.</p>
                          <hr />
                          <p className="image-post">Personal Account Manager</p>
                          <div className="price-container">
                            <p className="price">Price</p>
                            <hr />
                            <p className="month">1 Month - INR 5,999/-</p>
                            <hr />
                            <p className="month">6 Months - INR 4,999/-</p>
                            <hr />
                            <p className="month">12 Months - INR 3,799/-</p>
                          </div>
                        </div>
                        <div className="standard-plans">
                          <p className="Basic-Plan">Standard Plan</p>
                          <p className="image-post">12 Image Posts</p>
                          <hr />
                          <p className="image-post"> 1 Reel Video</p>
                          <hr />
                          <p className="image-post">8 Story Designs</p>
                          <hr />
                          <p className="image-post">Festival Posts</p>
                          <hr />
                          <p className="image-post">Birthday Posts</p>
                          <hr />
                          <p className="image-post"> Anniversary Posts</p>
                          <hr />
                          <p className="image-post">Creative Content</p>
                          <hr />
                          <p className="image-post">Captions</p>
                          <hr />
                          <p className="image-post">Hashtags</p>
                          <hr />
                          <p className="image-post">Page Set-up</p>
                          <hr />
                          <p className="image-post">
                            Instagram & Facebook Page Manage
                          </p>
                          <hr />
                          <p className="image-post">
                            Create in the Visuals (It is best if you can give us
                            real photos of the business)
                          </p>
                          <hr />
                          <p className="image-post">Real Time Reporting</p>
                          <hr />
                          <p className="image-post">Organic Growth Strategy</p>
                          <hr />
                          <p className="image-post">N.A.</p>
                          <hr />
                          <p className="image-post">Personal Account Manager</p>
                          <div className="price-container">
                            <p className="price">Price</p>
                            <hr />
                            <p className="month">1 Month - INR 7,999/-</p>
                            <hr />
                            <p className="month">6 Months - INR 6,799/-</p>
                            <hr />
                            <p className="month">12 Months - INR 5,299/-</p>
                          </div>
                        </div>
                        <div className="premium-plan">
                          <p className="Basic-Plan">Premium Plan</p>
                          <p className="image-post">16 Image Posts</p>
                          <hr />
                          <p className="image-post">3 Reel Videos</p>
                          <hr />
                          <p className="image-post">12 Story Designs</p>
                          <hr />
                          <p className="image-post"> Festival Posts</p>
                          <hr />
                          <p className="image-post"> Birthday Posts</p>
                          <hr />
                          <p className="image-post"> Anniversary Posts</p>
                          <hr />
                          <p className="image-post">Creative Content</p>
                          <hr />
                          <p className="image-post">Captions</p>
                          <hr />
                          <p className="image-post">Hashtags</p>
                          <hr />
                          <p className="image-post">Page Set-up</p>
                          <hr />
                          <p className="image-post">
                            Instagram & Facebook Page Manage
                          </p>
                          <hr />
                          <p className="image-post">
                            Create in the Visuals (It is best if you can give us
                            real photos of the business)
                          </p>
                          <hr />
                          <p className="image-post">Real Time Reporting</p>
                          <hr />
                          <p className="image-post">Organic Growth Strategy</p>
                          <hr />
                          <p className="image-post">Campaign Management</p>
                          <hr />
                          <p className="image-post">Personal Account Manager</p>
                          <div className="price-container">
                            <p className="price">Price</p>
                            <hr />
                            <p className="month">1 Month - INR 9,999/-</p>
                            <hr />
                            <p className="month">6 Months - INR 8,499/-</p>
                            <hr />
                            <p className="month">12 Months - INR 6,499/-</p>
                          </div>
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

export default Page;
