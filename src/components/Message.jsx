import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Message = () => {
    const navigate= useNavigate();
    const openMail=()=>{
navigate("/mail/1234ffmmg");
    }
  return (
    <div onClick={openMail} className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-6 h-6" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-6 h-6" />
        </div>
        <div className="flex-1 ml-4 truncate text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          quibusdam tempore ex iusto magni nostrum aliquam repellat maiores
          quasi ullam?
        </div>
      </div>
      <div className="text-gray-400 text-sm pl-4 whitespace-nowrap">time</div>
    </div>
  );
};

export default Message;
