import React from "react";
import ajay from "../../images/ajay.png";
import "../../styles/service.css";
import "../../styles/brochure.css";

import closeImage from "../../images/closeImage.png";
import Image from "next/image";
import Link from "next/link";
// import round from "../images/round.png";
// import sround from "../images/sround.png";
import "../../styles/about.css"
import Homesection from "@/component/Homesection";
import abbg from "../../images/abbg.png";

const page = () => {
  return (
    <>
      <section>
        <div className="main-width"> 
          <div className="under-1320">
            <div className="all-padding home">
            <div className="destination-container">
              <div className="destination-flex">
                <div className="destination-right">
                  <p className="Graphic">
                    We are Specialized Brochure Design Services Provider
                  </p>
                  <div className="care">
                    <li>Best Brochure providers in Ahmedabad</li>
                    <li className="banner">
                      Banner with sample of brochure images
                    </li>
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
                        <p style={{ cursor: "pointer" }}>Social Media Post</p>
                      </Link>
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
                        Transform Your Brand Message with Stunning Brochure
                        Designs
                      </p>
                      <p className="Promote">Best Brochure design company</p>
                      <p className="media-marketing">
                        Why do you need a brochure design?
                      </p>
                      <p className="products">
                        A brochure design is essential for effectively
                        communicating your brand’s message, showcasing products
                        or services, and engaging potential customers.
                      </p>
                      <p className="products">
                        As a best brochure design company in Ahmedabad, we are
                        specialized with brochure design that align with your
                        business or organization. At Fiesta, we specialize in
                        crafting creative brochures that effectively communicate
                        your brand’s message and fascinate your audience. Our
                        brochure design service is dedicated to delivering
                        high-impact marketing materials that make a long lasting
                        impression.
                      </p>
                      <p className="Promotes">
                        Why Our Brochure Designs Stand Out
                      </p>
                      <p className="Personalized">
                        Personalized with your brand
                      </p>
                      <p className="appealing">
                        Our design approach is client-centered, we create
                        designs that reflect your brand identity.
                      </p>
                      <p className="Personalized">
                        Creative & Professional Design
                      </p>
                      <p className="appealing">
                        Our professional team will craft a design with
                        creativity that not just aligns but is both visually
                        appealing and functionally effective.
                      </p>
                      <p className="Personalized">
                        Comprehensive Design Solutions
                      </p>
                      <p className="appealing">
                        From creating concepts to the final delivery we handle
                        each step of brochure design carefully with the client
                        central management system, and this will make us best of
                        most.
                      </p>

                      <p className="Personalized">Turnaround</p>
                      <p className="appealing">
                        We understand the importance of deadlines. Our effective
                        design process ensures that your brochures are completed
                        on time, allowing you to meet your marketing goals
                        without delay.
                      </p>

                      <p className="Promotes">
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
                        Incorporate your brand text, images, and graphics in a
                        way that enhances readability and engagement.
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
                              Simple and clean design layout
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Standard brochure size options
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Basic graphics and elements
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Up to 2 revisions</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Additional revisions may incur extra charges
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Basic Content</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              No custom illustrations or photography
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Basic text layout and formatting
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              No professional copywriting included
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Final files provided in standard formats
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Print-ready and digital versions available
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Typically 1-2 weeks, depending on the designer&apos;s
                              schedule and client responsiveness
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
                              Tailored to your brand and content
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Choice of various formats (bi-fold, tri-fold,
                              multi-page, etc.)
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Use of provided images</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Basic Content Editing</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Custom graphics and iconography to enhance the
                              visual appeal
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Custom font choices to align with brand identity
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              A well-coordinated colour scheme to enhance
                              readability and aesthetics
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Up to 4 rounds of revisions to ensure satisfaction
                              with the final design
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Basic editing of provided text for clarity and
                              grammar
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
                              Alignment of the text with the design to ensure a
                              cohesive look
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Final files provided in print-ready formats (PDF,
                              high-resolution images)
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Initial consultation to discuss requirements and
                              preferences
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Option for digital versions if needed (e.g., for
                              online distribution)
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Ongoing communication throughout the design
                              process to ensure alignment with client
                              expectations
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Typically completed within 1-3 weeks, depending on
                              the complexity and the number of revisions
                              required
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
                              Highly Customised Design Photography
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Unique and creative layout tailored to your brand
                              identity
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Use of original illustrations or professional
                              photography, possibly including a photoshoot if
                              required
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
                              Custom graphics and icons designed specifically
                              for the brochure
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Integration of high-quality stock images or custom
                              visuals
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
                              Includes proofreading and editing to ensure
                              clarity and impact
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Extensive Revisions</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Typically includes 5 or more rounds of revisions
                              to refine and perfect the design and content
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Flexibility in making adjustments based on
                              feedback and new ideas
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">Special Design Elements</p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Ongoing collaboration throughout the design
                              process to ensure the final product meets your
                              expectations
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Options for unique folding techniques or custom
                              sizes and shapes
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Final files provided in various formats (PDF,
                              print-ready, digital versions, etc.)
                            </p>
                          </div>
                          <hr />

                          <div className="basic-div">
                            <p className="clean-s">
                              Source files (like Adobe Illustrator or InDesign
                              files) may be included upon request
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
                        <button className="req">
                     REQUEST PROPOSAL

              
                        </button>
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
