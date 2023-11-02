import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import SectionHeader from "./ui/SectionHeader";

const Connect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendMail = () => {
    fetch("https://sendmail-api-docs.vercel.app/api/send", {
      method: "POST",
      body: JSON.stringify({
        to: "marwanyahia151@gmail.com",
        from: "ovic391@gmail.com",
        subject: name,
        message: email + " " + msg,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <div className="  mt-10 lg:px-[20px]">
      <SectionHeader>Get in touch with me</SectionHeader>
      <div className=" lg:px-[15px]">
        <div className=" mb-[30px] flex flex-col overflow-hidden rounded-lg bg-box-gray p-[30px] ">
          <div className=" mb-7 flex h-14 flex-row-reverse ">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" peer  h-full w-full  flex-1 bg-slate-700 px-5 text-lg text-white placeholder:text-icon-gray focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 "
            />
            <BsFillPersonFill className=" mx-auto h-full w-12 bg-zinc-800  p-3  text-sm text-icon-gray  peer-focus:bg-yellow-500  peer-focus:text-black " />
          </div>

          <div className=" mb-7 flex h-14 flex-row-reverse ">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" peer  h-full w-full flex-1 bg-slate-700 px-5 text-lg text-white placeholder:text-icon-gray focus:border-yellow-500  focus:outline-none focus:ring-1 focus:ring-yellow-500 "
            />
            <MdAlternateEmail className="mx-auto h-full w-12 bg-zinc-800  p-3   text-sm text-icon-gray  peer-focus:bg-yellow-500  peer-focus:text-black " />
          </div>

          <div className=" mb-7 flex flex-row-reverse  ">
            <textarea
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="placeholder:Name  min-h-40 peer  w-full flex-1 resize-none bg-slate-700 px-5 py-3 text-lg text-white  placeholder:text-icon-gray focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 "
            />
            <MdEmail className="mx-auto h-40 w-12  bg-zinc-800 p-3  text-sm   text-icon-gray  peer-focus:bg-yellow-500 peer-focus:text-black" />
          </div>

          <div className="mt-6 flex">
            <button
              onClick={sendMail}
              className="mr-auto rounded bg-yellow-400 px-4 py-2 text-sm font-bold text-black"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Connect;
