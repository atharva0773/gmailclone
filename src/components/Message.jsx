import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/AppSlice";
import { motion } from "framer-motion";
const Message = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={openMail}
      className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-6 h-6" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-6 h-6" />
        </div>
        <div className=" flex ml-4 overflow-hidden text-gray-700">
          <div className="text font-semibold truncate w-50">
            {email?.subject}
          </div>
          <div className="text  text-gray-500 break-words line-clamp-1 w-[70dvh]">
            {email?.message}
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-sm pl-4 whitespace-nowrap">
        <p>
          {email?.createdAt?.seconds
            ? new Date(email.createdAt.seconds * 1000).toUTCString()
            : ""}
        </p>
      </div>
    </motion.div>
  );
};

export default Message;
