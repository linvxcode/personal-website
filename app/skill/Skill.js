
import HeaderText from "./Partial/HeaderText";
import HeaderAbout from "./Partial/HeaderAbout";
import BodyAbout from "./Partial/BodyAbout";




const Skill = () => {
  return (
    <div className="h-screen md:mt-[200px] max-md:mt-[50px]">
      <div className="grid grid-cols-5  max-md:grid-cols-1  overflow-hidden">
        <div className="md:col-span-3 w-[100%] ">
          <HeaderText />
          <HeaderAbout />
        </div>
        <div className="">
          <BodyAbout />
        </div>
      </div>
    </div>
  );
};

export default Skill;
