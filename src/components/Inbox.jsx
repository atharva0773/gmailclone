import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare } from "react-icons/md";
import { FaAngleDown, FaRegKeyboard } from "react-icons/fa";
import Messages from "./Messages";
const mailType = [
  {
    icon: <FaAngleDown size={"20px"} />,
    text: "Uread",
  },
];

const Inbox = () => {
  const [mailTypeSelected, setMailTypeSelected] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <FaRegKeyboard size={"20px"} />
        </div>
      </div>
      <div className="h-[90vh] overflow-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => (
            <button
              key={index}
              onClick={() => setMailTypeSelected(index)}
              className={`flex items-center w-62 gap-5 p-4  hover:bg-gray-100 text-gray-800 
           `}
            >
              {item.icon}
              <span className="text-sm">{item.text}</span>
            </button>
          ))}
          <div className="flex justify-end w-full m-5 py-1">
            <p className="text-sm text-gray-400">1-50 of 1000</p>
          </div>
        </div>
        <Messages />
      </div>
    </div>
  );
};

export default Inbox;
