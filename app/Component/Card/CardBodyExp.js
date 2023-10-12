import { CardBody } from "@nextui-org/react";
import React from "react";

const CardBodyExp = ({project}) => {
  return (
    <div>
      <CardBody className="p-0 px-5 pt-3 pb-3 ">
        <h1>{project.content}</h1>
      </CardBody>
    </div>
  );
};

export default CardBodyExp;
