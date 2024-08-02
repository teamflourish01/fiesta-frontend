<<<<<<< HEAD
import Client from '@/sections/Client'
import ContactForm from '@/sections/ContactForm'
import GraphicDesign from '@/sections/GraphicDesign'
import Provide from '@/sections/Provide'
import React from 'react'
=======
import React from "react";
import "../styles/homesection.css";
import ajay from "../images/ajay.png";
import closeImage from "../images/closeImage.png";
import Image from "next/image";
import round from "../images/round.png";
import sround from "../images/sround.png";
>>>>>>> c02e0c69b542bf08526692b1d66a15d6d3b07a9d

const Homesection = () => {
  return (
    <>
<<<<<<< HEAD
    <Provide/>
      <Client/>
      <GraphicDesign/>
      <ContactForm/>
=======
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding"></div>
            <div className="destination-container">
              <div className="destination-flex">
                <div className="destination-right">
                  <p className="Graphic">
                    Destination Of All Your Graphic Design Needs
                  </p>
                  <p className="care">
                    We take care of all your Design needs so you can feel
                    relaxed about your business
                  </p>
                  <button className="button">Request Proposal</button>
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
>>>>>>> c02e0c69b542bf08526692b1d66a15d6d3b07a9d
    </>
  );
};

export default Homesection;
