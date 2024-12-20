import Benefits from "@/components/Benefits";
import CalltoAction from "@/components/CalltoAction";
import {Faq} from "@/components/Faq";
import Footer from "@/components/Footer";
import GettoKnowsection from "@/components/GettoKnowsection";
import Herosection from "@/components/Herosection";
import Logosection from "@/components/Logosection";
import OldNew from "@/components/OldNew";

export default function Home() {
  return (
    <main className=" bg-[#FFFFF0]">
      <Herosection></Herosection>
      <Logosection></Logosection>
      <OldNew></OldNew>
      <Benefits></Benefits>
      <GettoKnowsection></GettoKnowsection>
      <Faq></Faq>
      <CalltoAction></CalltoAction>
      <Footer></Footer>
    </main>
  );
}
