import Image from "next/image";
import styles from "./page.module.css";
import Homesection from "@/component/Homesection";
import Testimoniam from "@/component/Testimoniam";

export default function Home() {
  return (
    <main >
    
      <Homesection/>
      <Testimoniam/>
    </main>
  );
}
