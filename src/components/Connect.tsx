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
      <div className=" border-muted-foreground rounded-lg border lg:px-[15px]">
        <div className=" bg-box-gray mb-[30px] flex flex-col overflow-hidden rounded-lg p-[30px] ">
          <div className=" mb-7 flex h-14 flex-row-reverse ">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" placeholder:text-accent  text-background focus:border-primary bg-foreground border-muted-foreground  focus:ring-primary peer h-full w-full  flex-1 rounded-r-lg border-y border-r px-5 text-lg focus:outline-none focus:ring-1 "
            />
            <BsFillPersonFill className=" border-muted-foreground bg-muted-foreground peer-focus:text-foreground peer-focus:bg-primary mx-auto h-full w-12  rounded-l-lg  border-y border-l  p-3  text-sm " />
          </div>

          <div className=" mb-7 flex h-14 flex-row-reverse ">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" placeholder:text-accent  text-background focus:border-primary bg-foreground border-muted-foreground  focus:ring-primary peer h-full w-full  flex-1 rounded-r-lg border-y border-r px-5 text-lg focus:outline-none focus:ring-1 "
            />
            <MdAlternateEmail className=" border-muted-foreground bg-muted-foreground peer-focus:text-foreground peer-focus:bg-primary mx-auto h-full w-12  rounded-l-lg  border-y border-l  p-3  text-sm " />
          </div>

          <div className=" mb-7 flex flex-row-reverse  ">
            <textarea
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="placeholder:Name  min-h-40 placeholder:text-accent  bg-foreground text-background focus:border-primary focus:ring-primary border-muted-foreground peer w-full flex-1 resize-none rounded-r-lg border-y border-r  px-5 py-3 text-lg focus:outline-none focus:ring-1 "
            />
            <MdEmail className=" border-muted-foreground peer-focus:text-foreground  peer-focus:bg-primary bg-muted-foreground mx-auto h-40  w-12 rounded-l-lg  border-y   border-l  p-3 text-sm" />
          </div>

          <div className="mt-6 flex">
            <button
              onClick={sendMail}
              className=" bg-primary hover:text-foreground text-muted mr-auto rounded-lg px-8 py-4 text-xs font-bold"
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
