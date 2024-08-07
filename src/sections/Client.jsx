import React from "react";
import "../styles/client.css";
import clientLogo from "../images/client.png";
import Image from "next/image";
import designService from "../images/designservice.png";
import graphicService from "../images/graphics.png";
import clientone from "../images/clientone.png";
import clienttwo from "../images/clienttwo.png";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "..//images/three.png";
import four from "../images/four.png";


function Client() {
  return (
    <>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding">
            <div className="client-container">
              <div className="heading">
                <p className="title">Our Valuable Clients</p>
              </div>
              <p className="client-text">
                Check out a few of our most important clients we helped with
                Designing services
              </p>
              <div className="logo-card-container">
                <div className="logo-card">
                  <Image className="client-logo" src={one} alt="Logo" />
                </div>
                <div className="logo-card">
                  <Image className="client-logo" src={two} alt="Logo" />
                </div>
                <div className="logo-card">
                  <Image className="client-logo" src={three} alt="Logo" />
                </div>
                <div className="logo-card">
                  <Image className="client-logo" src={four} alt="Logo" />
                </div>
              </div>
            </div>


            <div className="services-design-graphic">
              <div className="design-services">
                {/* <div className="design-img-container">

                                     <div className="design-img-bg">
                                        <Image className="design-emoji" src={designService} alt="Logo" />
                                </div>
                                    </div>  */}
                <div className="img-one">
                  <Image className="design-emoji-top" src={clientone} alt="Logo" />
                </div>
                <div className="design-content">
                  <div className="heading-design">
                    <p className="title design-title">
                      Best Graphic Design Services in Ahmedabad, India
                    </p>
                  </div>
                  <div className="design-description">
                    Whether you are running a small business or a big enterprise
                    then Graphic design service is the main body part of your
                    business. A graphic design service decides how your business
                    creates positive impacts on online platforms such as
                    Instagram, Facebook, Twitter, Linkedin, and Pinterest.
                    Create and handle own graphics can be tricky for every
                    business, but not with a graphic design company like us. We
                    are a dedicated Graphic Design Company in Ahmedabad, India
                    with a team of 15+ creative designers and content writers
                    who are ready to go beyond your imagination to create
                    designs for you.
                  </div>
                  <div className="ul-text">
                    <ul className="li-text">
                      <li>5+ years of Experience in Graphic Design</li>
                      <li>Exponatioal Graphic Design Strategy</li>
                      <li>Team of Social Media Soldiers</li>
                      <li>90% Success Ratio</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="graphic-services">
                <div className="design-content">
                  <div className="heading-graphic">
                    <p className="graphic-title">
                      Why choose our Graphic Design Services for your business?
                    </p>
                  </div>
                  <div className="design-description size">
                    Graphic design is a service that is connected to all age
                    groups, genders, cultures, religions, castes, and countries.
                    Though it&apos;s maximum chances for any businesses can make
                    their spotlight with Graphic Design services. But how can
                    any business utilize this perk of Graphic Design services?
                    <br />
                    With the right selection of Graphic Design Company, anyone
                    can drive the most Graphic Design potential and goodwill for
                    their business.
                    <br />
                    Starting from the concept part to its creation, and from
                    community management to brand making, everything will be
                    shorted from our side and you will get the growth you crave
                    and the results you want.
                  </div>
                </div>
                {/* <div className="graphic-img-container">
                                    <div className="graphic-img-bg">
                                        <Image className="graphic-emoji" src={graphicService} alt="Logo" />
                                    </div>
                                </div> */}
                <div className="img-one">
                  <Image className="design-emoji-bottom" src={clienttwo} alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Client;
