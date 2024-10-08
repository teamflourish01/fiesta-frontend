import Image from "next/image";
import styles from "./page.module.css";
import Homesection from "@/component/Homesection";
import Testimoniam from "@/component/Testimoniam";
import Client from "@/sections/Client";
import ContactForm from "@/sections/ContactForm";
import GraphicDesign from "@/sections/GraphicDesign";
import Provide from "@/sections/Provide";
import "../styles/background.css";
import Test from "@/sections/test";
import Head from "next/head";

export default function Home() {
  return (
    <>
  <Head>
  <title>Home | Fiesta</title>
    <meta></meta>
  </Head>
    <main>
      <section>
        <div className="main-width">
          <div className="top-nav-bg">
          <div className="onebg  ">
            <div className="twobg">
              <div className="threebg">
                <div className="fourbg">
                  <div className="fivebg">
                    <div className="bottom-footer-bg">
                    {/* <div className="under-1320"> */}
                    <div className="all-padding"></div>

                    <Homesection />
                    <Provide />
                    <Client />
                    <GraphicDesign />
                    <Testimoniam />
                    <ContactForm />
                    {/* <Test/> */}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
