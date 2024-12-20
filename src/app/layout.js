import { Montserrat } from "next/font/google";
import "./globals.css";
import Nabbar from "@/components/Navbar";


const montserrat = Montserrat({weight:'500', subsets: ["latin"]});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-[#FFFFF0] text-black`}
      >
        <Nabbar />
        {children}
      </body>
    </html>
  );
}
