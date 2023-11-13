import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import SectionHeader from "./ui/SectionHeader";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendMail = () => {
    fetch("https://sendmail-api-docs.vercel.app/api/send", {
      method: "POST",
      body: JSON.stringify({
        to: "marwanyahia151@gmail.com",
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
    <div id="contact" className="mt-10 lg:px-8">
      <SectionHeader>Get in touch with me</SectionHeader>
      <div className=" mt-7 rounded-lg border border-muted-foreground shadow-sm shadow-secondary lg:px-3">
        <div className=" bg-box-gray mb-7 flex flex-col overflow-hidden rounded-lg p-7">
          <div className=" mb-7 flex h-14 flex-row-reverse ">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" peer  h-full w-full flex-1 rounded-r-lg  border-y border-r border-muted-foreground bg-foreground  px-5 text-lg text-background placeholder:text-accent focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary "
            />
            <BsFillPersonFill className=" mx-auto h-full w-12 rounded-l-lg border-y border-l border-muted-foreground  bg-muted-foreground  p-3 text-sm  peer-focus:border-primary  peer-focus:bg-primary peer-focus:text-foreground peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-primary " />
          </div>

          <div className=" mb-7 flex h-14 flex-row-reverse ">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" peer  h-full w-full flex-1 rounded-r-lg  border-y border-r border-muted-foreground bg-foreground  px-5 text-lg text-background placeholder:text-accent focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary "
            />
            <MdAlternateEmail className=" mx-auto h-full w-12 rounded-l-lg border-y border-l border-muted-foreground  bg-muted-foreground  p-3 text-sm  peer-focus:border-primary  peer-focus:bg-primary peer-focus:text-foreground peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-primary " />
          </div>

          <div className=" mb-7 flex flex-row-reverse  ">
            <textarea
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="placeholder:Name  min-h-40 peer  w-full flex-1 resize-none rounded-r-lg border-y border-r border-muted-foreground bg-foreground px-5 py-3 text-lg text-background  placeholder:text-accent focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary "
            />
            <MdEmail className=" mx-auto h-40  w-12 rounded-l-lg border-y border-l  border-muted-foreground bg-muted-foreground  p-3   text-sm  peer-focus:border-primary  peer-focus:bg-primary peer-focus:text-foreground peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-primary" />
          </div>

          <div className="mt-6 flex">
            <button
              onClick={sendMail}
              className=" mx-auto rounded-lg bg-primary px-8 py-4 text-xs font-bold text-muted hover:text-foreground md:mx-0 md:mr-auto"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
