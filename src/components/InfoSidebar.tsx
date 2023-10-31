import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { MdDone, MdEmail } from 'react-icons/md';
import { BiSolidDownload } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const InfoSidebar = () => {
  const dateNow: number = +new Date().getFullYear();

  const birthDay: number = +new Date(2000, 4, 11).getFullYear();

  const year = dateNow - birthDay;

  return (
    <div className="">
      <div className="">
        <p className="t-4xl py-8  text-icon-gray hover:text-white  fixed">
          <BsThreeDotsVertical />
        </p>
      </div>
      <div className=" p-[30px] text-center bg-side-gray w-[290px] h-[235px] fixed">
        <img
          src="../../public/images/me.jpg"
          alt=""
          className=" rounded-full mx-auto w-[90px] h-[90px] mb-[10px] "
        />
        <p className=" text-white text-center mb[10px] text-sm font-bold">
          Marwan Yahia
        </p>
        <p className=" text-icon-gray py-2 text-center text-[13px]">
          Front-end Developer
        </p>
      </div>
      <div className=" p-[30px] text-center bg-side-gray w-[280px] h-[235px]"></div>
      <div className=" px-[10px]">
        <div className=" flex py-[15px] px-[10px] justify-between ">
          <div className="px-[10px]">
            <p className=" py-2  text-[13px] text-white">Residence :</p>
            <p className=" py-2  text-[13px] text-white">City :</p>
            <p className=" py-2  text-[13px] text-white">Age :</p>
          </div>
          <div className=" text-right px-[10px]">
            <p className=" py-2  text-[13px] text-icon-gray">Egypt</p>
            <p className=" py-2 text-[13px] text-icon-gray">Qaliobia</p>
            <p className=" py-2  text-[13px] text-icon-gray">{year}</p>
          </div>
        </div>
        <hr className=" mx-[20px] border-1 border-icon-gray opacity-30" />
        <div className=" flex flex-wrap py-[10px]  mx-auto">
          <p className=" w-18 text-4xl  py-6 px-6 text-orange-600 hover:text-orange-700 mx-auto ">
            <FaHtml5 />
          </p>
          <p className=" w-18 text-4xl py-6 px-6 text-blue-600 hover:text-blue-800 mx-auto ">
            <FaCss3Alt />
          </p>
          <p className=" w-18 text-4xl py-6 px-6 text-yellow-500 hover:text-yellow-600 mx-auto">
            <IoLogoJavascript />
          </p>
          <p className=" w-18 text-4xl py-6 px-6 text-blue-800 hover:text-blue-900 mx-auto">
            <SiTypescript />
          </p>
          <p className=" w-18 text-4xl py-6 px-6 text-blue-400 hover:text-blue-500 mx-auto">
            <SiTailwindcss />
          </p>
          <p className=" w-18 text-4xl py-6 px-6 text-blue-500 hover:text-blue-600 mx-auto">
            <FaReact />
          </p>
        </div>
        <hr className=" mx-[20px] border-1 border-icon-gray opacity-30" />
        <div className="py-[15px] px-[10px] mb-[10px]">
          <p className=" px-[10px] text-icon-gray flex text-[13px]">
            <MdDone className=" mr-3 text-yellow-400 text-xl" />
            Bootstrap, Materialize
          </p>
          <p className=" px-[10px] text-icon-gray flex text-[13px]">
            <MdDone className=" mr-3 text-yellow-400 text-xl" />
            Stylus, Sass, Less
          </p>
          <p className="px-[10px] text-icon-gray flex text-[13px]">
            <MdDone className=" mr-3 text-yellow-400 text-xl" />
            Gulp, Webpack, Grunt
          </p>
          <p className="px-[10px] text-icon-gray flex text-[13px]">
            <MdDone className=" mr-3 text-yellow-400 text-xl" />
            GIT knowledge
          </p>
        </div>
        <hr className=" mx-[20px] border-1 border-icon-gray opacity-30" />
        <div className=" my-[10px] px-[10px]">
          <a href="#" className=" px-[10px] ">
            <button className="text-icon-gray text-[13px] hover:text-white ">
              DOWNLOAD CV
              <BiSolidDownload className=" inline mx-1 text-yellow-400 hover:text-yellow-500 text-xl" />
            </button>
          </a>
        </div>
        <div className=" bg-side-gray px-[35px] fixed bottom-0 left-0 w-[290px] h-[50px] ">
          <p className="grid grid-cols-4 my-[12px]">
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
