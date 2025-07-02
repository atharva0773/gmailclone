import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/AppSlice";
import {db} from "../firebase"
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Sendmail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const{ open }= useSelector(store => store.app);
  const dispatch = useDispatch();

  const ChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandeler = async (e) => {
    console.log("24");
    e.preventDefault();
    await addDoc(collection(db,"emails"),{
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      createdAt:serverTimestamp(),
    });
    dispatch(setOpen(false));
    setFormData({
    to: "",
    subject: "",
    message: "",
    })
  };
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
        <h1 className="font-semibold">New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross2 size={"20px"} />
        </div>
      </div>
      <form onSubmit={submitHandeler} className="flex flex-col p-3 gap-2">
        <input
          value={formData.to}
          name="to"
          type="text"
          placeholder="To"
          className="outline-none border-b border-gray-200 py-1"
          onChange={ChangeHandler}
        />
        <input
          value={formData.subject}
          name="subject"
          type="text"
          placeholder="subject"
          className="outline-none border-b border-gray-200 py-1"
          onChange={ChangeHandler}
        />
        <textarea
          value={formData.message}
          name="message"
          cols={"30"}
          className="outline-none py-1"
          onChange={ChangeHandler}
        ></textarea>
        <button
          type='submit'
          className="bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium "
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default Sendmail;
