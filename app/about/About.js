import React from "react";
import Firsttext from "./Partial/Firsttext";
import SecondText from "./Partial/SecondText";

const About = () => {
  return (
    <div className="flex  mt-[100px] pb-10">
      <div >
        <div>
       <Firsttext />
        </div>
        <div>
          <SecondText />
        </div>
      </div>
    </div>
  );
};

export default About;
