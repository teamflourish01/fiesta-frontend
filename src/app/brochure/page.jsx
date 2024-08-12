"use client";

import React, { useState } from "react";
import ajay from "../../images/ajay.png";
import "../../styles/service.css";
import "../../styles/brochure.css";
import "../../styles/homesection.css";

import drop from "../../images/drop.png";
import aboutimg from "../../images/aboutbanner.png";
import brimg from "../../images/brimg.png";
import closeImage from "../../images/closeImage.png";
import Image from "next/image";
import Link from "next/link";
// import round from "../images/round.png";
// import sround from "../images/sround.png";
import "../../styles/about.css";
import Homesection from "@/component/Homesection";
import abbg from "../../images/abbg.png";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [selectedPage, setSelectedPage] = useState("/brochure");
  return (
    <>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding home">
              <div className="destination-container">
                <div className="destination-flex-about">
                  <div className="destination-right-about">
                    <p className="Graphic-about">
                      We Are Specialized Brochure Design Services Providers
                    </p>
                  </div>
                  <div className="destination-left">
                    <Image src={brimg} alt="" className="main-image" />
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
        </div>
        <hr />
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
                        <p
                          style={{ cursor: "pointer" }}
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
                      <p className="s-marketing mark-padding   brand-padding">
                        Transform Your Brand Message with Stunning Brochure
                        Designs
                      </p>
                      <p className="Promote pbrochure">
                        Best Brochure Design Company in Ahmedabad
                      </p>
                      <p className="media-marketing">
                        Why Do You Need a Brochure Design?
                      </p>
                      <p className="products">
                        A brochure design is essential for effectively
                        communicating your brand’s message, showcasing products
                        or services, and engaging potential customers.
                      </p>
                      <p className="products-brochure">
                        As a best brochure design company in Ahmedabad, we
                        specialize in brochure designs that align with your
                        business or organization. At Fiesta, We specialize in
                        crafting creative brochures that effectively communicate
                        your brand’s message and fascinate your audience. Our
                        brochure design service is dedicated to delivering
                        high-impact marketing materials that make a lasting
                        impression.
                      </p>
                      <p className="Promotes">
                        Why Do Our Brochure Designs Stand Out?
                      </p>
                      <p className="Personalized">
                        Personalized with Your Brand
                      </p>
                      <p className="appealing">
                        Our design approach is client-centered. We create
                        designs that reflect your brand identity.
                      </p>
                      <p className="Personalized">
                        Creative & Professional Design
                      </p>
                      <p className="appealing">
                        Our professional team will craft a design with
                        creativity that not only aligns but is both visually
                        appealing and functionally effective.
                      </p>
                      <p className="Personalized">
                        Comprehensive Design Solutions
                      </p>
                      <p className="appealing">
                        From creating concepts to final delivery, we handle each
                        step of brochure design carefully with a client-centered
                        management system, which makes us one of the best.
                      </p>

                      <p className="Personalized">Turnaround</p>
                      <p className="appealing">
                        We understand the importance of deadlines. Our effective
                        design process ensures that your brochures are completed
                        on time, allowing you to meet your marketing goals
                        without delay.
                      </p>

                      <p className="Promotes include-padding">
                        Our Brochure Design Service Includes:
                      </p>
                      <p className="Personalized">Concept Development</p>
                      <p className="appealing">
                        Collaborate with our team to develop a design concept
                        that aligns with your brand strategy.
                      </p>

                      <p className="Personalized">Design Layout</p>
                      <p className="appealing">
                        Create visually compelling designs that effectively
                        present your brand content.
                      </p>

                      <p className="Personalized">Content Integration</p>
                      <p className="appealing">
                        Incorporate your brand&apos;s text, images, and graphics
                        in a way that enhances readability and engagement.
                      </p>

                      <p className="Personalized">Print Coordination</p>
                      <p className="appealings">
                        Manage the printing process to ensure high-quality
                        production and timely delivery.
                      </p>

                      <p className="choose-us">Pricing</p>
                    </div>
                    <div className="plans-container">
                      <div className="plans-flex">
                        <div className="basic-plans">
                          <p className="Basic-Plan">Basic Plan</p>
                          <div className="basic-div">
                            <p className="clean-s">
                              Simple and Clean Design Layout
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Standard Brochure Size Options
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Basic Graphics and Elements
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Up to 2 Revisions</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Additional Revisions may Incur Extra Charges
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Basic Content</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              No Custom Illustrations or Photography
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Basic Text Layout and Formatting
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              No Professional Copywriting Included
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Final Files Provided in Standard Formats
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Print-Ready and Digital Versions Available
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Typically 1-2 weeks, Depending on the
                              Designer&apos;s Schedule and Client Responsiveness
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">-</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">-</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">-</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">-</p>
                          </div>
                          <hr />

                          <div className="price-container">
                            <p className="price">Price</p>
                            <hr />
                            <p className="month">Per Page 250 INR/-</p>
                            {/* <hr /> */}
                          </div>
                        </div>

                        <div className="basic-plans">
                          <p className="Basic-Plan">Standard Plan</p>
                          <div className="basic-div">
                            <p className="clean-s">
                              Tailored to Your Brand and Content
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Choice of Various Formats (bi-fold, tri-fold,
                              multi-page, etc.)
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Use of Provided Images</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Basic Content Editing</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Custom Graphics and Iconography to Enhance the
                              Visual Appeal
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Custom Font Choices to Align with Brand Identity
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              A Well Co-Ordinated Color Scheme to Enhance
                              Readability and Aesthetics
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Up to 4 Rounds of Revisions to Ensure Satisfaction
                              with the Final Design
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Basic Editing of Provided Text for Clarity and
                              Grammar
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Payment Options - 50% Advance & 50% After
                              Completion
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Alignment of the Text with the Design to Ensure a
                              Cohesive Look
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Final Files Provided in Print-Ready Formats (PDF,
                              High-Resolution Images)
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Initial Consultation to Discuss Requirements and
                              Preferences
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Option for Digital Versions if Needed (e.g., for
                              Online Distribution)
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Ongoing Communication throughout the Design Process
                              to ensure Alignment with Client Expectations
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Typically Completed within 1-3 Weeks, Depending on
                              the Complexity and the Number of Revisions
                              Required
                            </p>
                          </div>
                          <hr />

                          <div className="price-container">
                            <p className="price">Price</p>
                            <hr />
                            <p className="month">Per Page 500 INR/-</p>
                            {/* <hr /> */}
                          </div>
                        </div>

                        <div className="basic-plans">
                          <p className="Basic-Plan">Premium Plan</p>
                          <div className="basic-div">
                            <p className="clean-s">
                              Highly Customized Design Photography
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Unique and Creative Layout Tailored to Your Brand
                              Identity
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Use of Original Illustrations or Professional
                              Photography, Possibly Including a Photoshoot If
                              Required
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Advanced Graphics and Visuals
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Custom Graphics and Icons Designed Specifically
                              for the Brochure
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Integration of High-Quality Stock Images or Custom
                              Visuals
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Professional Copywriting Services
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Includes Proofreading and Editing to Ensure
                              Clarity and Impact
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Extensive Revisions</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Typically Includes 5 or More Rounds of Revisions
                              to Refine and Perfect the Design and Content
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Flexibility in Making Adjustments Based on
                              Feedback and New Ideas
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Special Design Elements</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Ongoing Collaboration Throughout the Design
                              Process to Ensure the Final Product Meets Your
                              Expectations
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Options for Unique Folding Techniques or Custom
                              Sizes and Shapes
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                            Final Files Provided in Various Formats (PDF, Print-Ready, Digital Versions, etc.)

                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                            Source Files (Like Adobe Illustrator or InDesign Files) May be Included Upon Request

                            </p>
                          </div>
                          <hr />

                          <div className="price-container">
                            <p className="price">Price</p>
                            <hr />
                            <p className="month">Per Page 1000 INR/-</p>
                            {/* <hr /> */}
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
