import React from "react";
import "../../styles/about.css";
import ajay from "../../images/ajay.png";
import closeImage from "../../images/closeImage.png";
import Image from "next/image";
// import round from "../images/round.png";
// import sround from "../images/sround.png";
import Homesection from "@/component/Homesection";
import abbg from "../../images/abbg.png";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import arrow from "../../images/arrow.png";
import arrowleft from "../../images/arrowleft.png";

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
                  We are Specialized Graphic Design Services Provider
                  </p>
                  <div className="care">
                    <li>Best Graphics providers in Ahmedabad</li>
                    <li className="service-padding">All services are at one place</li>
                    <li>Best industry experts</li>
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
            <div className="all-padding"></div>
            <div className="main-title">Who we are?</div>
            <div className="design-company">
              <p>
                Fiesta is a Graphic design company and Digital Design partner of
                your business. We believe by connecting together we can achieve
                good deliverable results. We are a full Graphic Design company
                with a team of more than 15+ members and with in-house
                award-winning designers.
              </p>
              <p className="member">
                Our company has a creative art talent who is always appreciated
                by clients for their valuable deliverables. Our employees have
                the sustainable experience to fulfill all your needs. If you are
                a start-up owner or running a successful business, we want to
                share with you how the Fiesta is different from others.
              </p>
              <p>
                We all are passionate and curious about the work we do. Our
                greatest satisfaction comes when clients approve the design on
                the first attempt and we always work for our satisfaction. We
                are committed to ensuring that our services make our client’s
                businesses successful.
              </p>
              <p className="members">
                Connect with our team today and discuss your requirements about
                Social Media posts, Logo Design, Brochure Design, and Stationery
                Design. Working together we can help you to increase your
                brand’s visibility, brand’s identity, and brand’s growth locally
                and globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding"></div>
            <div className="missision-container">
              <div className="mission-flex">
                <div className="our-mission">
                  <div className="icon-group">
                    <div className="img-icon">
                      <Image src={icon1} alt="" className="img1" />
                    </div>
                  </div>
                  <div className="mission-padding">
                    <div className="mission-flex">
                      <Image src={arrowleft} />
                      <p className="our">Our Mission</p>
                      <Image src={arrow} />
                    </div>
                  </div>
                  <div className="upgrate">
                    <p className="client">
                      To upgrade clients’ brands and realize their Design goals
                      by providing innovative and effective solutions for them.
                      In addition, our aim is to create a seamless harmony
                      between our clients and Fiesta. We always respect client
                      values and their needs to offer the best opportunities for
                      them.
                    </p>
                  </div>
                </div>
                <div className="our-mission">
                  <div className="icon-group">
                    <div className="img-icon">
                      <Image src={icon2} alt="" className="img1" />
                    </div>
                  </div>
                  <div className="mission-padding">
                    <div className="mission-flex">
                      <Image src={arrowleft} />
                      <p className="our">Our Vision</p>
                      <Image src={arrow} />
                    </div>
                  </div>
                  <div className="upgrate">
                    <p className="client">
                      To be a leading force in the graphic design industry,
                      renowned for our creativity, innovation, and commitment to
                      excellence. We envision a future where our designs not
                      only meet but exceed client expectations, setting new
                      standards for quality and originality.
                    </p>
                  </div>
                </div>
                <div className="our-mission">
                  <div className="icon-group">
                    <div className="img-icon">
                      <Image src={icon3} alt="" className="img1" />
                    </div>
                  </div>
                  <div className="mission-padding">
                    <div className="mission-flex">
                      <Image src={arrowleft} />
                      <p className="our">Our Values</p>
                      <Image src={arrow} />
                    </div>
                  </div>
                  <div className="upgrate">
                    <p className="client">
                      We prioritize innovation and excellence, consistently
                      delivering impactful design solutions. Our approach is
                      rooted in collaboration and integrity, ensuring strong,
                      trustworthy partnerships. We are dedicated to a
                      client-centric approach, respecting and fulfilling the
                      unique needs and values of each client.
                    </p>
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
