import { Montserrat } from "next/font/google";
import "./globals.css";
import Nabbar from "@/components/Navbar";
import { constructMetadata } from "@/lib/utils";


const montserrat = Montserrat({weight:'500', subsets: ["latin"]});


export const metadata = constructMetadata()

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
