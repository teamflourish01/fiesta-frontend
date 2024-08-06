"use client";
import React, { useState } from "react";
import ajay from "../../images/ajay.png";
import "../../styles/service.css";
import closeImage from "../../images/closeImage.png";
import Image from "next/image";
import Link from "next/link";
// import round from "../images/round.png";
// import sround from "../images/sround.png";
import Homesection from "@/component/Homesection";
import abbg from "../../images/abbg.png";
import service from "../../images/service.png";

const page = () => {
  const [selectedPage, setSelectedPage] = useState("/services");
  return (
    <>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding">
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
                      <li className="banner">
                        banner with sample of Social Media Graphical images
                      </li>
                    </div>
                  </div>
                  <div className="destination-left">
                    <Image src={service} alt="" className="main-image" />
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
                      <Link href="/services" className="style-none">
                        <p
                          style={{ cursor: "pointer" }}
                          className={
                            selectedPage === "/services" ? "underline" : ""
                          }
                          onClick={() => setSelectedPage("/services")}
                        >
                          Social Media Post
                        </p>
                      </Link>
                      <Link href="/logodesign" className="style-none">
                        <p
                          style={{ cursor: "pointer" }}
                          className={
                            selectedPage === "/logodesign" ? "underline" : ""
                          }
                          onClick={() => setSelectedPage("/logodesign")}
                        >
                          Logo Design
                        </p>
                      </Link>
                      <Link href="/brochure" className="style-none">
                        <p style={{ cursor: "pointer" }} className={selectedPage === "/brochure" ? "underline" : ""}
                          onClick={() => setSelectedPage("/brochure")}>Brochure Design</p>
                      </Link>
                    </div>
                  </div>

                  <div className="social-media">
                    <div className="marketing-main">
                      <p className="s-marketing">Social Media Marketing</p>
                      <p className="Promote">
                        Promote Your Brand Story with the Right Strategies
                      </p>
                      <p className="media-marketing">
                        What is social media marketing?
                      </p>
                      <p className="products products-copy">
                        Social media marketing is promoting products or services
                        through social media platforms to build brand awareness,
                        engage with audiences, and drive business results.
                      </p>
                      <div className="div-flex">
                        <div className="marketing-social">
                          <p className="media-social">
                            Why social media marketing?
                          </p>
                          <hr />
                          <div className="boost">
                            <p>Boost Brand Visibility</p>
                            <p>Engage with Your Audience</p>
                            <p>Drive Conversions</p>
                            <p>Stay Ahead of Trends</p>
                          </div>
                        </div>
                        <div className="ours-services">
                          <p className="media-social">
                            Our Social Media Marketing Services
                          </p>
                          <hr />
                          <div className="strategy">
                            <p>Strategy Development</p>
                            <p>Content Creation</p>
                            <p>Social Media Management</p>
                            <p>Advertising Campaigns</p>
                            <p>Analytics & Reporting</p>
                          </div>
                        </div>
                      </div>

                      <p className="adjustments">
                        Detailed analytics to measure the effectiveness of your
                        social media campaigns. Regular reports and insights to
                        guide strategy adjustments and improvements.
                      </p>
                      <p className="choose-us">Why Choose Us?</p>
                      <p className="dynamic">
                        At Fiesta, we blend Graphic design skills with advanced
                        social media marketing to deliver outstanding results.
                        Our team adapts to the latest trends, ensuring your
                        brand excels in the dynamic social media world.
                      </p>
                      <p className="choose-us">Pricing</p>
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
