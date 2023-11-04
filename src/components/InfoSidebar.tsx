import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { MdDone, MdEmail } from "react-icons/md";
import { BiSolidDownload } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

interface InfoSidebarProps {
  isInfoBarOpen: boolean;
}

const InfoSidebar = ({ isInfoBarOpen }: InfoSidebarProps) => {
  const dateNow: number = +new Date().getFullYear();

  const birthDay: number = +new Date(2000, 4, 11).getFullYear();

  const year = dateNow - birthDay;

  return (
    <div className="relative">
      <div
        className={` bg-accent-foreground text-background border-muted-foreground  fixed h-60 w-72  rounded-t border-x border-t  px-4 text-center  ${
          isInfoBarOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        <div className="m-auto">
          <img
            src="../../public/images/me.jpg"
            alt=""
            className=" mx-auto mb-[10px] h-[90px] w-[90px] rounded-full "
          />
          <p className=" mb[10px] text-background hover:text-primary text-center text-sm font-bold">
            Marwan Yahia
          </p>
          <p className=" text-accent py-2 text-center text-[13px]">
            Front-end Developer
          </p>
        </div>
      </div>
      <div className=" h-60 w-full px-4" />
      <div className=" px-3">
        <div className=" flex justify-between px-[10px] py-[15px] ">
          <div className="px-[10px]">
            <p className=" text-background  py-2 text-[13px]">Residence :</p>
            <p className=" text-background  py-2 text-[13px]">City :</p>
            <p className=" text-background  py-2 text-[13px]">Age :</p>
          </div>
          <div className=" px-[10px] text-right">
            <p className=" text-muted-foreground  py-2 text-[13px]">Egypt</p>
            <p className=" text-muted-foreground py-2 text-[13px]">Qaliobia</p>
            <p className=" text-muted-foreground  py-2 text-[13px]">{year}</p>
          </div>
        </div>
        <hr className=" border-1  border-muted mx-[20px] opacity-30" />
        <div className=" mx-auto flex flex-wrap  py-[10px]">
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
        <hr className=" border-1  border-muted mx-[20px] opacity-30" />
        <div className="mb-[10px] px-[10px] py-[15px]">
          <p className=" text-background flex px-[10px] text-[13px]">
            <MdDone className=" text-primary mr-3 text-xl" />
            Bootstrap, Materialize
          </p>
          <p className=" text-background flex px-[10px] text-[13px]">
            <MdDone className=" text-primary mr-3 text-xl" />
            Stylus, Sass, Less
          </p>
          <p className="text-background flex px-[10px] text-[13px]">
            <MdDone className=" text-primary mr-3 text-xl" />
            Gulp, Webpack, Grunt
          </p>
          <p className="text-background flex px-[10px] text-[13px]">
            <MdDone className=" text-primary mr-3 text-xl" />
            GIT knowledge
          </p>
        </div>
        <hr className=" border-1  border-muted mx-[20px] opacity-30" />
        <div className=" group my-[10px] px-[10px]">
          <a href="#" className=" px-[10px] ">
            <button className="text-muted-foreground group-hover:text-background text-[13px] ">
              DOWNLOAD CV
              <BiSolidDownload className=" text-primary mx-1 inline text-xl duration-300 group-hover:mt-1" />
            </button>
          </a>
        </div>
      </div>
      <div className=" h-14 w-full  px-4" />
      <div
        className={` bg-accent-foreground border-muted-foreground fixed  bottom-0 h-14  w-72 items-center justify-evenly rounded-b-lg border-x border-b px-4 ${
          isInfoBarOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        <a href="#">
          <MdEmail className=" text-muted-foreground mx-auto text-2xl hover:text-green-500 " />
        </a>
        <a href="#">
          <AiFillGithub className=" text-muted-foreground mx-auto text-2xl hover:text-cyan-500 " />
        </a>
        <a href="#">
          <AiFillLinkedin className=" text-muted-foreground mx-auto text-2xl hover:text-blue-700 " />
        </a>
        <a href="#">
          <AiFillFacebook className=" text-muted-foreground mx-auto text-2xl hover:text-blue-700 " />
        </a>
      </div>
    </div>
  );
};
export default InfoSidebar;
