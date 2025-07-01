import React from "react";
import { LuPencil } from "react-icons/lu";
import { MdOutlineInbox, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { FaRegFile } from "react-icons/fa";

const sidebarIteams = [
  {
    icon: <MdOutlineInbox size={"24px"} />,
    text: "Inbox",
  },
  {
    icon: <MdOutlineStarBorder size={"24px"} />,
    text: "Starred",
  },
  {
    icon: <GoClock size={"24px"} />,
    text: "Snoozed",
  },
  {
    icon: <IoMdSend size={"24px"} />,
    text: "Sent",
  },
  {
    icon: <FaRegFile size={"24px"} />,
    text: "Draft",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"24px"} />,
    text: "More",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow bg-[#C2E7FF]">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-900">
        {sidebarIteams.map((item, index) => {
          return (
            <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
