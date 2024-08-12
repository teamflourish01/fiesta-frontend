import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import "../styles/cornerbg.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Graphic Design Services in Ahmedabad, India | Fiesta ",
  description: "Discover top graphic design, SMM, and brochure design services in Ahmedabad. Transform your brand with our expert solutions and creative designs. Reach out today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="nav-bar-img"> */}
          <div className="footer-top-img">
            <Navbar />
            {children}
            <Footer />
          </div>
        {/* </div> */}
      </body>
    </html>
  );
}
