import Homesection from '@/component/Homesection';
import ContactForm from '@/sections/ContactForm';
import Image from 'next/image';
import React from 'react';
import "../../styles/homesection.css"

import service from "../../images/contactemoji.png";
import closeImage from "../../images/closeImage.png";
import '../../styles/contact.css';


function page() {
  return (
    <>
     <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding home">
            <div className="destination-container">
              <div className="destination-flex-contact">
                <div className="destination-right">
                  <p className="Graphic">
                  Let&apos;s Connect and Grow Together
                  </p>
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
    <ContactForm/>
      
    </>
  );
}

export default page;
