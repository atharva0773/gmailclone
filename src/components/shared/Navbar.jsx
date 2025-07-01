import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <GiHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src="https://imgs.search.brave.com/R2TxbQm_x2KSG5D6XTplnz5SHAdzikLtCHbwOC3zsqY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NDg0LzUwOC9zbWFs/bC9nb29nbGUtbWFp/bC1nbWFpbC1pY29u/LWxvZ28tc3ltYm9s/LWZyZWUtcG5nLnBu/Zw"
            alt="gmail-logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="hidden md:block w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            className="rounded-full w-full bg-transparent outline-none px-1"
            placeholder="Search mail"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className=" flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={"24px"} className="text-gray-700"/>
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiSettings  size={"24px"} className="text-gray-700"/>
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <TbGridDots  size={"24px"} className="text-gray-700"/>
          </div>
          <div className="cursor-pointer">
           <Avatar name="John Doe" size="40px" round={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
