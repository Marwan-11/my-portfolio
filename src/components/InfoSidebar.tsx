import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { MdDone, MdEmail } from "react-icons/md";
import { BiSolidDownload } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const InfoSidebar = () => {
  const dateNow: number = +new Date().getFullYear();

  const birthDay: number = +new Date(2000, 4, 11).getFullYear();

  const year = dateNow - birthDay;

  return (
    <div className="">
      <div className="">
        <p className="t-4xl fixed  py-8 text-icon-gray  hover:text-white">
          <BsThreeDotsVertical />
        </p>
      </div>
      <div className=" fixed h-[235px] w-[290px] bg-side-gray p-[30px] text-center">
        <img
          src="../../public/images/me.jpg"
          alt=""
          className=" mx-auto mb-[10px] h-[90px] w-[90px] rounded-full "
        />
        <p className=" mb[10px] text-center text-sm font-bold text-white">
          Marwan Yahia
        </p>
        <p className=" py-2 text-center text-[13px] text-icon-gray">
          Front-end Developer
        </p>
      </div>
      <div className=" h-[235px] w-[280px] bg-side-gray p-[30px] text-center"></div>
      <div className=" px-[10px]">
        <div className=" flex justify-between px-[10px] py-[15px] ">
          <div className="px-[10px]">
            <p className=" py-2  text-[13px] text-white">Residence :</p>
            <p className=" py-2  text-[13px] text-white">City :</p>
            <p className=" py-2  text-[13px] text-white">Age :</p>
          </div>
          <div className=" px-[10px] text-right">
            <p className=" py-2  text-[13px] text-icon-gray">Egypt</p>
            <p className=" py-2 text-[13px] text-icon-gray">Qaliobia</p>
            <p className=" py-2  text-[13px] text-icon-gray">{year}</p>
          </div>
        </div>
        <hr className=" border-1 mx-[20px] border-icon-gray opacity-30" />
        <div className=" mx-auto flex flex-wrap  py-[10px]">
          <p className=" w-18 mx-auto  px-6 py-6 text-3xl text-orange-600 hover:text-orange-700 ">
            <FaHtml5 />
          </p>
          <p className=" w-18 mx-auto px-6 py-6 text-3xl text-blue-600 hover:text-blue-800 ">
            <FaCss3Alt />
          </p>
          <p className=" w-18 mx-auto px-6 py-6 text-3xl text-yellow-500 hover:text-yellow-600">
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
        <hr className=" border-1 mx-[20px] border-icon-gray opacity-30" />
        <div className="mb-[10px] px-[10px] py-[15px]">
          <p className=" flex px-[10px] text-[13px] text-icon-gray">
            <MdDone className=" mr-3 text-xl text-yellow-400" />
            Bootstrap, Materialize
          </p>
          <p className=" flex px-[10px] text-[13px] text-icon-gray">
            <MdDone className=" mr-3 text-xl text-yellow-400" />
            Stylus, Sass, Less
          </p>
          <p className="flex px-[10px] text-[13px] text-icon-gray">
            <MdDone className=" mr-3 text-xl text-yellow-400" />
            Gulp, Webpack, Grunt
          </p>
          <p className="flex px-[10px] text-[13px] text-icon-gray">
            <MdDone className=" mr-3 text-xl text-yellow-400" />
            GIT knowledge
          </p>
        </div>
        <hr className=" border-1 mx-[20px] border-icon-gray opacity-30" />
        <div className=" my-[10px] px-[10px]">
          <a href="#" className=" px-[10px] ">
            <button className="text-[13px] text-icon-gray hover:text-white ">
              DOWNLOAD CV
              <BiSolidDownload className=" mx-1 inline text-xl text-yellow-400 hover:text-yellow-500" />
            </button>
          </a>
        </div>
        <div className=" fixed bottom-0 left-0 h-[50px] w-[290px] bg-side-gray px-[35px] ">
          <p className="my-[12px] grid grid-cols-4">
            <a href="#">
              <MdEmail className=" mx-auto text-2xl text-gray-400 hover:text-green-500 " />
            </a>
            <a href="#">
              <AiFillGithub className=" mx-auto text-2xl text-gray-400 hover:text-cyan-500 " />
            </a>
            <a href="#">
              <AiFillLinkedin className=" mx-auto text-2xl text-gray-400 hover:text-blue-700 " />
            </a>
            <a href="#">
              <AiFillFacebook className=" mx-auto text-2xl text-gray-400 hover:text-blue-700 " />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default InfoSidebar;
