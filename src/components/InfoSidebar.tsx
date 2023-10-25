import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { MdDone, MdEmail } from 'react-icons/md';
import { BiSolidDownload } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { useState } from 'react';

const InfoSidebar = () => {
  const [isOpen, setisOpen] = useState();
  return (
    <div className="">
      <div className="">
        <p className="t-4xl py-8  text-icon-gray hover:text-white  fixed">
          <BsThreeDotsVertical />
        </p>
      </div>
      <div className=" p-12 text-center bg-side-gray w-96 h-96 fixed">
        <img
          src="../../images/me.jpg"
          alt=""
          className=" rounded-full mx-auto w-32 "
        />
        <p className=" py-5 text-white text-center text-2xl font-bold">
          Marwan Yahia
        </p>
        <p className=" text-icon-gray py-2 text-center text-xl">
          Front-end Developer
        </p>
      </div>
      <div className=" p-12 text-center bg-side-gray w-full h-96"></div>
      <div className=" flex py-8 px-6 justify-between ">
        <div className="">
          <p className=" py-2  text-xl text-white">Residence :</p>
          <p className=" py-2  text-xl text-white">City :</p>
          <p className=" py-2  text-xl text-white">Age :</p>
        </div>
        <div className=" text-right">
          <p className=" py-2  text-xl text-icon-gray">Egypt</p>
          <p className=" py-2  text-xl text-icon-gray">Qaliobia</p>
          <p className=" py-2  text-xl text-icon-gray">23</p>
        </div>
      </div>

      <hr className=" mx-6 border-2 border-icon-gray opacity-30" />

      <div className=" flex flex-wrap py-8  mx-auto">
        <p className=" w-32 text-6xl  py-6 px-6 text-orange-600 hover:text-orange-700 mx-auto ">
          <FaHtml5 />
        </p>
        <p className=" w-32 text-6xl py-6 px-6 text-blue-600 hover:text-blue-800 mx-auto ">
          <FaCss3Alt />
        </p>
        <p className=" w-32 text-6xl py-6 px-6 text-yellow-500 hover:text-yellow-600 mx-auto">
          <IoLogoJavascript />
        </p>
        <p className=" w-32 text-6xl py-6 px-6 text-blue-800 hover:text-blue-900 mx-auto">
          <SiTypescript />
        </p>
        <p className=" w-32 text-6xl py-6 px-6 text-blue-400 hover:text-blue-500 mx-auto">
          <FaReact />
        </p>
      </div>

      <hr className=" mx-6 border-2 border-icon-gray opacity-30" />

      <div className=" py-8 px-6 ">
        <p className=" text-icon-gray flex text-xl">
          <span className=" mr-3 text-yellow-400 text-3xl">
            <MdDone />
          </span>
          Bootstrap, Materialize
        </p>
        <p className=" text-icon-gray flex text-xl">
          <span className=" mr-3 text-yellow-400 text-3xl">
            <MdDone />
          </span>
          Stylus, Sass, Less
        </p>
        <p className=" text-icon-gray flex text-xl">
          <span className=" mr-3 text-yellow-400 text-3xl">
            <MdDone />
          </span>
          Gulp, Webpack, Grunt
        </p>
        <p className=" text-icon-gray flex text-xl">
          <span className=" mr-3 text-yellow-400 text-3xl">
            <MdDone />
          </span>
          GIT knowledge
        </p>
      </div>

      <hr className=" mx-6 border-2 border-icon-gray opacity-30" />

      <div className="py-8 px-6">
        <p>
          <a href="#" className="flex ">
            <button className="text-icon-gray text-xl hover:text-white ">
              DOWNLOAD CV
            </button>
            <button className=" px-3 text-yellow-400 hover:text-yellow-500 text-3xl">
              <BiSolidDownload />
            </button>
          </a>
        </p>
      </div>

      <div className=" bg-side-gray py-8 grid grid-cols-4 fixed bottom-0 left-0 w-96 ">
        <p className=" mx-auto">
          <a href="#" className=" text-4xl text-gray-400 hover:text-green-500 ">
            <MdEmail />
          </a>
        </p>
        <p className="mx-auto">
          <a href="#" className=" text-4xl text-gray-400 hover:text-cyan-500 ">
            <AiFillGithub />
          </a>
        </p>
        <p className="mx-auto">
          <a href="#" className=" text-4xl hover:text-blue-800 text-gray-400 ">
            <AiFillLinkedin />
          </a>
        </p>
        <p className="mx-auto">
          <a href="#" className=" text-4xl hover:text-blue-800 text-gray-400 ">
            <AiFillFacebook />
          </a>
        </p>
      </div>
    </div>
  );
};
export default InfoSidebar;
