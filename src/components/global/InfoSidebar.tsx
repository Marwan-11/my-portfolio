import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { MdDone, MdEmail } from "react-icons/md";
import { BiSolidDownload } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { useSidebars } from "../../context/useSidebars";
import { BsThreeDotsVertical } from "react-icons/bs";

const InfoSidebar = () => {
  const { isInfoBarOpen, toggleInfobar } = useSidebars();

  return (
    <div className="relative">
      <button
        onClick={toggleInfobar}
        className={`fixed top-7 z-[500] ms-auto lg:top-8 lg:hidden ${
          isInfoBarOpen ? "left-60" : "left-8"
        }`}
      >
        {isInfoBarOpen ? (
          <AiOutlineClose className="text-2xl text-muted-foreground hover:text-muted " />
        ) : (
          <BsThreeDotsVertical className="text-2xl text-muted-foreground hover:text-muted " />
        )}
      </button>
      <div
        className={`fixed left-0 h-60 w-72 rounded-t  bg-accent-foreground px-4  text-center text-background  ${
          isInfoBarOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        <div className="m-auto">
          <img
            src="/images/me.jpg"
            alt=""
            className=" mx-auto mb-4 h-24 w-24 rounded-full "
          />
          <p className=" text-md text-center font-bold text-background hover:text-primary">
            Marwan Yahia
          </p>
          <p className=" py-2 text-center text-sm text-accent">
            Front-end Developer
          </p>
        </div>
      </div>
      <div className=" h-60 w-full px-4" />
      <div className=" px-3">
        <div className=" flex justify-between py-5 ">
          <div className="px-3">
            <p className=" py-2 text-sm text-background">Residence :</p>
            <p className=" py-2  text-sm text-background">City :</p>
            <p className=" py-2  text-sm text-background">Age :</p>
          </div>
          <div className=" px-3 text-right">
            <p className=" py-2  text-sm text-muted-foreground">Egypt</p>
            <p className=" py-2 text-sm text-muted-foreground">Qaliobia</p>
            <p className=" py-2  text-sm text-muted-foreground">{getMyAge()}</p>
          </div>
        </div>
        <hr className=" border-1  mx-3 border-muted opacity-30" />
        <div className=" group mx-3 my-3">
          <a
            title="CV"
            href="../../../public/Frontend Developer Marwan Yahia.pdf"
            className=" block w-full  text-sm text-muted-foreground group-hover:text-background"
            download
          >
            DOWNLOAD CV
            <BiSolidDownload className=" mx-2 inline text-xl text-primary duration-300 group-hover:mt-1" />
          </a>
        </div>
        <hr className=" border-1  mx-3 border-muted opacity-30" />

        <div className=" mx-auto flex flex-wrap">
          <p className=" w-18 mx-auto  px-6 py-6 text-3xl text-orange-600 hover:text-orange-700 ">
            <FaHtml5 />
          </p>
          <p className=" w-18 mx-auto px-6 py-6 text-3xl text-blue-600 hover:text-blue-800 ">
            <FaCss3Alt />
          </p>
          <p className=" w-18 mx-auto px-6 py-6 text-3xl text-yellow-400 hover:text-yellow-500">
            <IoLogoJavascript />
          </p>
          <p className=" w-18 mx-auto px-6 py-6 text-3xl text-blue-800 hover:text-blue-900">
            <SiTypescript />
          </p>
          <p className=" w-18 mx-auto px-6 py-6 text-3xl text-blue-400 hover:text-blue-500">
            <SiTailwindcss />
          </p>
          <p className=" w-18 mx-auto px-6 py-6 text-3xl text-blue-500 hover:text-blue-600">
            <FaReact />
          </p>
        </div>

        <hr className=" border-1  mx-3 border-muted opacity-30" />

        <div className="mx-3 py-4">
          <p className=" flex break-keep  text-sm text-background">
            <MdDone className=" mr-3 text-xl text-primary" />
            Html, Css
          </p>
          <p className=" flex break-keep text-sm text-background">
            <MdDone className=" mr-3 text-xl text-primary" />
            Tailwind Css
          </p>
          <p className="flex break-keep text-sm text-background">
            <MdDone className=" mr-3 text-xl text-primary" />
            Javascript, Typescript
          </p>
          <p className="flex break-keep text-sm text-background">
            <MdDone className=" mr-3 text-xl text-primary" />
            React.JS
          </p>
          <p className="flex break-keep text-sm text-background">
            <MdDone className=" mr-3 text-xl text-primary" />
            GIT knowledge
          </p>
        </div>
      </div>
      <div className=" h-14 w-full  px-4" />
      <div
        className={`fixed bottom-0 left-0  h-14 w-72 items-center justify-evenly rounded-b-lg  bg-accent-foreground px-4 ${
          isInfoBarOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        <a title="email" href="mailto:marwanyahia151@gmail.com" target="_blank">
          <MdEmail className=" mx-auto text-2xl text-muted-foreground hover:text-primary " />
        </a>
        <a title="Github" href="https://github.com/Marwan-11" target="_blank">
          <AiFillGithub className=" mx-auto text-2xl text-muted-foreground hover:text-primary " />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/marwan-yahia/"
          target="_blank"
        >
          <AiFillLinkedin className=" mx-auto text-2xl text-muted-foreground hover:text-primary " />
        </a>
      </div>
    </div>
  );
};
export default InfoSidebar;

const getMyAge = () => {
  const dateNow = +new Date().getFullYear();

  const birthDay = +new Date(2000, 4, 11).getFullYear();

  return dateNow - birthDay;
};
