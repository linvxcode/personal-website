
import StartFirst from "./Partial/StartFirst";
import WelcomeText from "./Partial/WelcomeText";
import dynamic from "next/dynamic";
import Wrap from "./Partial/Wrap";
import Loading from "./Loading";
import LayoutFirst from "./LayoutFirst";

const First = () => {
  // const LazyLayoutFirst = dynamic(() => import("./LayoutFirst"), {
  //   loading: () => (<Loading />),
  //   ssr: false
  // })
  
  return (
    <div className="lg:px-24 px-12  mt-10 ">
      <div className="">
        <div>
          <StartFirst/>
          <div className="grid grid-cols-1 mt-5 place-content-center place-items-center">
           <WelcomeText/>
            <Wrap/>
          </div>
            <LayoutFirst />
        </div>
      </div>
    </div>
  );
};

export default First;
