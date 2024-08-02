import Image from "next/image";
import styles from "./page.module.css";
import Homesection from "@/component/Homesection";
import Testimoniam from "@/component/Testimoniam";
import Client from '@/sections/Client'
import ContactForm from '@/sections/ContactForm'
import GraphicDesign from '@/sections/GraphicDesign'
import Provide from '@/sections/Provide'

export default function Home() {
  return (
    <main >
    
      <Homesection/>
      <Provide/>
      <Client/>
      <GraphicDesign/>
      <Testimoniam/>
      <ContactForm/>
    </main>
  );
}
