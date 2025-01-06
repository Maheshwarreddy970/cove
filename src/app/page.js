import Benefits from "@/components/landingpage/Benefits";
import CalltoAction from "@/components/landingpage/CalltoAction";
import { Faq } from "@/components/landingpage/Faq";
import Footer from "@/components/landingpage/Footer";
import GettoKnowsection from "@/components/landingpage/GettoKnowsection";
import Herosection from "@/components/landingpage/Herosection";
import Logosection from "@/components/landingpage/Logosection";
import OldNew from "@/components/landingpage/OldNew";
import Howitworkssection from "@/components/landingpage/Overview";

export default function Home() {
  return (
    <main className=" bg-[#FFFFF0] dark:bg-[#232526] overflow-hidden">
      <Herosection></Herosection>
      <Logosection></Logosection>
      <OldNew></OldNew>
      <Howitworkssection></Howitworkssection>
      <Benefits></Benefits>
      <GettoKnowsection></GettoKnowsection>
      <Faq></Faq>
      <CalltoAction></CalltoAction>
      <Footer></Footer>
    </main>
  );
}
