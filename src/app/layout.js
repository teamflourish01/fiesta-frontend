import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import '../styles/cornerbg.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>
        <div className="nav-bar-img">
          <div className="footer-top-img">
      <Navbar/>
      {children}
      <Footer/>
      </div>
      </div>
      </body>
    </html>
  );
}
