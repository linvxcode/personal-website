import { Nav } from "./Component/nav/Nav";
import About from "./about/About";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import First from "./home/page";
import Skill from "./skill/Skill";

export default function Home() {
  return (
    <div className="">
    <div className="max-w-7xl mx-auto">
      <Nav />
      <div
        id="home"
        className=" flex justify-center max-md:h-[400px] max-md:mt-[100px] items-center flex-row flex-wrap mt-[100px] "
      >
        <First />
      </div>
      <div
        id="about"
        className=" clipp max-md:mt-[300px] max-sm:mt-[300px] max-[390px]:mt-[700px] px-11 lg:px-24 flex "
      >
        <About />
      </div>
      <div id="skill" className=" max-sm:mt-[30px] px-11 lg:px-24 flex ">
        <Skill />
      </div>
      <div id="triple" className="   max-sm:mt-[100px] px-11 lg:px-24 flex flex-col">
        <Experience />
      </div>
    </div>
      <div className="h-auto  lg:px-24 px-11 bg-[#e2e8f0] dark:bg-[#232425]">
        <Footer />
      </div>
    </div>
  );
}
