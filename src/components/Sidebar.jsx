import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { MdOutlineInbox, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { FaRegFile } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/AppSlice";
import { MdLabelImportant, MdOutlineScheduleSend } from "react-icons/md";
import { BsMailbox } from "react-icons/bs";
import { RiSpam2Line } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdLabelOutline } from "react-icons/md";
import { TbMailDollar } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { MdKeyboardArrowUp } from "react-icons/md";

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
]

const extraFeatures = [
  {
    // icon: <MdOutlineKeyboardArrowDown size={"24px"} />,
    // text: "More",
  },
  {
    icon: <MdLabelImportant size={"24px"} />,
    text: "Important",
  },
  {
    icon: <MdOutlineScheduleSend size={"24px"} />,
    text: "Schedule",
  },
  {
    icon: <BsMailbox size={"24px"} />,
    text: "All Mail",
  },
  {
    icon: <RiSpam2Line size={"24px"} />,
    text: "Spam",
  },
  {
    icon: <FaRegTrashAlt size={"24px"} />,
    text: "Trash",
  },
  {
    icon: <MdLabelOutline size={"24px"} />,
    text: "Categories",
  },
  {
    icon: <TbMailDollar size={"24px"} />,
    text: "Manage subscription",
  },
  {
    icon: <IoSettingsOutline size={"24px"} />,
    text: "Manage labels",
  },
  {
    icon: <CiCirclePlus size={"24px"} />,
    text: "Create new label",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  const [isopen,setIsOpen] = useState(false);
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button
          onClick={() => dispatch(setOpen(true))}
          className="flex items-center gap-2 p-4 rounded-2xl hover:shadow bg-[#C2E7FF]"
        >
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

        {
          isopen ? (
            <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
              <MdOutlineKeyboardArrowDown size={"24px"} onClick={() => setIsOpen(!isopen)} />
              <p>More</p>
            </div>
          ) : (
            <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2" onClick={() => setIsOpen(!isopen)}>
              <MdKeyboardArrowUp size={"24px"} />
              <p>Less</p>
            </div>
          )
        }

        {
          isopen && extraFeatures.map((item, index) => {
            return (
              <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
                {item.icon}
                <p>{item.text}</p>
              </div>
            );
          })
        }
      </div>
      <div className="text-gray-900"></div>
    </div>
  );
};

export default Sidebar;
