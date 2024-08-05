"use client"

import React, { useEffect, useRef } from 'react';
import "../styles/homesection.css";
import ajay from "../images/ajay.png";
import closeImage from "../images/closeImage.png";
import Image from "next/image";

const Homesection = () => {
  const mainImageRef = useRef(null);

  useEffect(() => {
    const handleAnimation = () => {
      if (mainImageRef.current) {
       
        setTimeout(() => {
          mainImageRef.current.classList.add('jump');
        }, 2000); 
      }
    };

    
    handleAnimation();
  }, []);

  return (
    <>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding">
            <div className="destination-container">
              <div className="destination-flex">
                <div className="destination-right"
                //  data-aos="fade-up" data-aos-duration="1000"
                 >
                  <p className="Graphic">
                    Destination Of All Your Graphic Design Needs
                  </p>
                  <p className="care">
                    We take care of all your Design needs so you can feel relaxed about your business
                  </p>
                  <button className="button">Request Proposal</button>
                </div>
                <div className="destination-left"
                //  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"
                 >
                  <Image src={ajay} alt="" className="main-image" ref={mainImageRef} />
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
        </div>
      </section>
    </>
  );
};

export default Homesection;
