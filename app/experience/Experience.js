import HeaderExp from "./Partial/HeaderExp";
import BodyExp from "./Partial/BodyExp";


  export default function Experience() {
  
    return (
      <div className=" flex flex-col mt-[0px] mb-[100px] max-md:mt-[200px]">
        <div>
       <HeaderExp />
        </div>
        <BodyExp />
      </div>
    );
  }
  