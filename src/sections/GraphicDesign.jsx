// import React from 'react';
// import '../styles/graphicdesign.css';
// import help from '../images/help.png';
// import Image from 'next/image';
// import increase from '../images/increase.png';
// import rise from '../images/rise.png';
// import lead from '../images/lead.png';
// import boosting from '../images/boosting.png';
// import promotion from '../images/promotion.png';
// import chance from '../images/chance.png';
// import improvment from '../images/improvment.png';

// function GraphicDesign() {
//     return (
//         <>
//             <section>
//                 <div className="main-width">
//                     <div className="under-1320">
//                         <div className="all-padding">
//                         <div className="graphic-design-service">
//                             <div className="heading">
//                                 <p className='title'>Benefits of Effective Graphic Design Services</p>
//                             </div>
//                             <div className="benefit-points">
//                                 <div class="grid-container">
//                                     <div class="grid-item">
//                                         <div className="brand">
//                                             <div className="brand-button">
//                                                 <div className="icon-container">
//                                                     <Image src={help} alt="Icon" className="icon-help" />
//                                                 </div>
//                                                 <span className="text">Help to Establish a Brand</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="grid-item">
//                                         <div className="brand">
//                                             <div className="brand-button">
//                                                 <div className="icon-container">
//                                                     <Image src={increase} alt="Icon" className="icon" />
//                                                 </div>
//                                                 <span className="text">Increase online traffic</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="grid-item">
//                                         <div className="brand">
//                                             <div className="brand-button">
//                                                 <div className="icon-container">
//                                                     <Image src={rise} alt="Icon" className="icon-rise" />
//                                                 </div>
//                                                 <span className="text">Rise Brand Awareness</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="grid-item">
//                                         <div className="brand">
//                                             <div className="brand-button">
//                                                 <div className="icon-container">
//                                                     <Image src={lead} alt="Icon" className="icon-lead" />
//                                                 </div>
//                                                 <span className="text">Lead Generation</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="grid-item">
//                                     <div className="brand">
//                                             <div className="brand-button">
//                                                 <div className="icon-container">
//                                                     <Image src={boosting} alt="Icon" className="icon" />
//                                                 </div>
//                                                 <span className="text">Sales boosting</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="grid-item">
//                                     <div className="brand">
//                                             <div className="brand-button">
//                                                 <div className="icon-container">
//                                                     <Image src={promotion} alt="Icon" className="icon" />
//                                                 </div>
//                                                 <span className="text">Promotion of Content</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="grid-item">
//                                     <div className="brand">
//                                             <div className="brand-button">
//                                                 <div className="icon-container">
//                                                     <Image src={chance} alt="Icon" className="icon-chance" />
//                                                 </div>
//                                                 <span className="text">Chances of Viral</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="grid-item">
//                                     <div className="brand">
//                                             <div className="brand-button">
//                                                 <div className="icon-container">
//                                                     <Image src={improvment} alt="Icon" className="icon-improvment" />
//                                                 </div>
//                                                 <span className="text">Improvement in Reputation</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>






//                             <div className="benefit-tables">
//                                 <div className="hire-us">
//                                     <div className="hire-us-title">
//                                         <p className='hire-us-text'>Why should you hire us as a Graphic Design Company?</p>
//                                     </div>
//                                     <div className="hire-us-desc">
//                                         <p >Over 5 Billion Social Media users in the world and do you still think you should get more
//                                             leads offline? Target all these users today with our strategic Graphic Design services.
//                                         </p>
//                                         <p className='hire-text'>
//                                             These days, Social Media aren’t just a platform to post your personal pictures or chat with
//                                             friends. It has now become a workspace for a number of businessmen. Millions of businessmen
//                                             are driving big incomes by only understanding the worth of Graphic Design services and the
//                                             impact it can create. If you want your business to create the same impact too, drop a message
//                                             to Fiesta for result-oriented Graphic Design services in India now.
//                                         </p>
//                                     </div>

//                                 </div>
//                                 <div className="hire-us ">
//                                     <div className="hire-us-title">
//                                         <p className='hire-us-text'>Contact your Graphic Design soldiers</p>
//                                     </div>
//                                     <div className="hire-us-desc ">
//                                         <p >
//                                             If your business is launched and you have some great ideas and solid plans,
//                                             you need to get your vision and ideas out. If you have a few Instagram followers,
//                                             a Facebook account, and even a YouTube channel too, but are clueless about where
//                                             to start. Don’t worry your soldiers are here. Talk to one-on-one Graphic Design
//                                             soldiers and we are ready to save your Graphic Design needs
//                                         </p>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
// </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default GraphicDesign;


"use client";

import React, { useEffect, useRef } from 'react';
import '../styles/graphicdesign.css';
import help from '../images/help.png';
import Image from 'next/image';
import increase from '../images/increase.png';
import rise from '../images/rise.png';
import lead from '../images/lead.png';
import boosting from '../images/boosting.png';
import promotion from '../images/promotion.png';
import chance from '../images/chance.png';
import improvment from '../images/improvment.png';

function GraphicDesign() {
    // const gridContainerRef = useRef(null);

    // useEffect(() => {
    //     const container = gridContainerRef.current;
    //     if (!container) return;

    //     // Faster scroll
    //     const scrollSpeed = 10; // Increase this value for faster scrolling
    //     const scrollAmount = 2; // Increase this value for more scrolling per interval

    //     const autoScroll = () => {
    //         if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    //             container.scrollLeft = 0; // Reset to the start
    //         } else {
    //             container.scrollLeft += scrollAmount; // Scroll forward
    //         }
    //     };

    //     const scrollInterval = setInterval(autoScroll, scrollSpeed);

    //     const handleMouseEnter = () => clearInterval(scrollInterval);
    //     const handleMouseLeave = () => setInterval(autoScroll, scrollSpeed);

    //     container.addEventListener('mouseenter', handleMouseEnter);
    //     container.addEventListener('mouseleave', handleMouseLeave);

    //     return () => {
    //         clearInterval(scrollInterval);
    //         container.removeEventListener('mouseenter', handleMouseEnter);
    //         container.removeEventListener('mouseleave', handleMouseLeave);
    //     };
    // }, []);

    return (
        <>
            <section>
                <div className="main-width">
                    <div className="under-1320">
                        <div className="all-padding">
                            <div className="graphic-design-service">
                                <div className="heading">
                                    <p className='title'>Benefits of Effective Graphic Design Services</p>
                                </div>
                                <div className="benefit-points">
                                    <div className="grid-container">
                                        <div className="grid-item">
                                            <div className="brand">
                                                <div className="brand-button">
                                                    <div className="icon-container">
                                                        <Image src={help} alt="Icon" className="icon-help" />
                                                    </div>
                                                    <span className="text">Help to Establish a Brand</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid-item">
                                            <div className="brand">
                                                <div className="brand-button">
                                                    <div className="icon-container">
                                                        <Image src={increase} alt="Icon" className="icon" />
                                                    </div>
                                                    <span className="text">Increase online traffic</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid-item">
                                            <div className="brand">
                                                <div className="brand-button">
                                                    <div className="icon-container">
                                                        <Image src={rise} alt="Icon" className="icon-rise" />
                                                    </div>
                                                    <span className="text">Rise Brand Awareness</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid-item">
                                            <div className="brand">
                                                <div className="brand-button">
                                                    <div className="icon-container">
                                                        <Image src={lead} alt="Icon" className="icon-lead" />
                                                    </div>
                                                    <span className="text">Lead Generation</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid-item">
                                            <div className="brand">
                                                <div className="brand-button">
                                                    <div className="icon-container">
                                                        <Image src={boosting} alt="Icon" className="icon" />
                                                    </div>
                                                    <span className="text">Sales boosting</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid-item">
                                            <div className="brand">
                                                <div className="brand-button">
                                                    <div className="icon-container">
                                                        <Image src={promotion} alt="Icon" className="icon" />
                                                    </div>
                                                    <span className="text">Promotion of Content</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid-item">
                                            <div className="brand">
                                                <div className="brand-button">
                                                    <div className="icon-container">
                                                        <Image src={chance} alt="Icon" className="icon-chance" />
                                                    </div>
                                                    <span className="text">Chances of Viral</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid-item">
                                            <div className="brand">
                                                <div className="brand-button">
                                                    <div className="icon-container">
                                                        <Image src={improvment} alt="Icon" className="icon-improvment" />
                                                    </div>
                                                    <span className="text">Improvement in Reputation</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="benefit-tables">
                                    <div className="hire-us">
                                        <div className="hire-us-title">
                                            <p className='hire-us-text'>Why should you hire us as a Graphic Design Company?</p>
                                        </div>
                                        <div className="hire-us-desc">
                                            <p>Over 5 Billion Social Media users in the world and do you still think you should get more
                                                leads offline? Target all these users today with our strategic Graphic Design services.
                                            </p>
                                            <p className='hire-text'>
                                                These days, Social Media aren’t just a platform to post your personal pictures or chat with
                                                friends. It has now become a workspace for a number of businessmen. Millions of businessmen
                                                are driving big incomes by only understanding the worth of Graphic Design services and the
                                                impact it can create. If you want your business to create the same impact too, drop a message
                                                to Fiesta for result-oriented Graphic Design services in India now.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hire-us">
                                        <div className="hire-us-title">
                                            <p className='hire-us-text'>Contact your Graphic Design soldiers</p>
                                        </div>
                                        <div className="hire-us-desc">
                                            <p>
                                                If your business is launched and you have some great ideas and solid plans,
                                                you need to get your vision and ideas out. If you have a few Instagram followers,
                                                a Facebook account, and even a YouTube channel too, but are clueless about where
                                                to start. Don’t worry your soldiers are here. Talk to one-on-one Graphic Design
                                                soldiers and we are ready to save your Graphic Design needs
                                            </p>
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
}

export default GraphicDesign;
