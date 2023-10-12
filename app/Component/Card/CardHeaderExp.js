import { CardHeader } from "@nextui-org/react";
import React from "react";

const CardHeaderExp = ({project}) => {
  return (
    <div>
      <CardHeader className="p-0 px-5 flex items-center pt-3">
        <h1 className=" font-pop font-medium text-[16px]">{project.name}</h1>
      </CardHeader>
    </div>
  );
};

export default CardHeaderExp;
