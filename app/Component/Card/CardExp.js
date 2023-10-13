import { Card} from "@nextui-org/react";
import ImageExp from "../Image/ImageExp";
import CardHeaderExp from "./CardHeaderExp";
import CardFooterExp from "./CardFooterExp";
import { Motion } from "../Motion/Motion";
import CardBodyExp from "./CardBodyExp";

const CardExp = ({ project }) => {

  return (
    <div>
      <Card className="shadow-none dark:bg-zinc-800  focus:opacity-100 hover:shadow-md border-[1px] dark:border-neutral-700 border-neutral-200">
        <div className=" relative ">
          <Motion
            className={` w-[100%]  flex justify-center opacity-100 items-center object-contain   `}
            initial={{ height: 20 }}
            viewport={{ once: true }}
            whileInView={{
              height: 120,
              transition: {
                type: "spring",
                duration: 3,
                delay: 0.5,
              },
            }}
          >
            <ImageExp project={project} />
          </Motion>
          <div className="md:mt-[75px] mt-[30px] lg:mt-[70px] min-[629px]:mt-20 max-w-lg">
            <CardHeaderExp project={project} />
            <div>
                <CardBodyExp project={project} />
              <CardFooterExp project={project} />
            </div>
          </div>
          <div className=""></div>
        </div>
      </Card>
    </div>
  );
};

export default CardExp;
