
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { constructMetadata } from "@/lib/utils";
import { ThemeProvider } from "next-themes";


const montserrat = Montserrat({ weight: '500', subsets: ["latin"] });


export const metadata = constructMetadata()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}  `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar></Navbar>
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
