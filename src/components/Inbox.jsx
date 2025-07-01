import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare } from "react-icons/md";
const mailType=[
    {
        icon:<mdInbox size={"20px"}/>,
        text:"Primary"
    },
    {
        icon:<GoTag size={"20px"}/>,
        text:"Promotions"
    },
    {
        icon:<FaUserFriends size={"20px"}/>,
        text:" Social"
    },
]

const Inbox = () => {
    const[mailTypeSelected,setMailTypeSelected]=useState(0);

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
      </div>
      <div className="h-[90vh] overflow-auto">
  <div className="flex items-center gap-1">
    {mailType.map((item, index) => (
      <button
        key={index}
        onClick={() => setMailTypeSelected(index)}
        className={`flex items-center w-62 gap-5 p-4  hover:bg-gray-100 text-gray-800 
          border-b-4 ${mailTypeSelected === index ? 'border-b-blue-600 text-blue-600' : 'border-b-transparent'}`}
      >
        {item.icon}
        <span className="text-sm">{item.text}</span>
      </button>
    ))}
  </div>
</div>

    </div>
  );
};

export default Inbox;
