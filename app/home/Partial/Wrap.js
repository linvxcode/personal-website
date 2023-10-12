import ButtonGetStart from "./ButtonGetStart";
import ButtonContact from "./ButtonContact";
import { Motion } from "@/app/Component/Motion/Motion";

const Wrap = () => {
  return (
    <div>
      <Motion
        className="mt-5 flex justify-start gap-3 md:gap-10 bg-[#f9fafb] p-5  rounded-2xl  max-[390px]:p-2 dark:bg-[#27272a]"
        // initial={{ translateY: 100, opacity: 0, scaleY: 0.1 }}
        // whileInView={{
        //   translateY: 0,
        //   opacity: 1,
        //   scaleY: 1,
        //   transition: {
        //     type: "spring",
        //     duration: 1,
        //     delay: 0.6,
        //   },
        // }}
        // viewport={{ once: true }}
      >
        <ButtonGetStart />
        <ButtonContact />
      </Motion>
    </div>
  );
};

export default Wrap;
