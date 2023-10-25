import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { MdDone } from 'react-icons/md';
import { BiSolidDownload } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const InfoSidebar = () => {
  return (
    <div className="">
      <div className="relative">
        <p className=" text-4xl py-8 absolute right-3 hover:text-white">
          <BsThreeDotsVertical />
        </p>
      </div>
      <div className=" py-8  text-center bg-slate-500 w-full h-full rounded-lg">
        <img
          src="../../images/avatar-01.png"
          alt=""
          className=" rounded-full my-5 mx-auto"
        />
        <p className=" py-5 text-center text-3xl font-bold">Marwan Yahia</p>
        <p className=" py-2 text-center text-xl">Front-end Developer</p>
      </div>
      <div className=" flex py-8 justify-between border-b-2 border-gray-600  ">
        <div className="">
          <p className=" py-2  text-xl text-blue-300">Residence :</p>
          <p className=" py-2  text-xl text-blue-300">City :</p>
          <p className=" py-2  text-xl text-blue-300">Age :</p>
        </div>
        <div className="">
          <p className=" py-2  text-xl text-gray-500">Egypt</p>
          <p className=" py-2  text-xl text-gray-500">Qaliobia</p>
          <p className=" py-2  text-xl text-gray-500">23</p>
        </div>
      </div>

      <div className=" grid grid-cols-3 py-8 text-center mx-auto border-b-2 border-gray-600">
        <p className=" text-4xl py-6 text-orange-600 hover:text-orange-700 mx-auto ">
          <FaHtml5 />
        </p>
        <p className=" text-4xl py-6 text-blue-600 hover:text-blue-800 mx-auto ">
          <FaCss3Alt />
        </p>
        <p className=" text-4xl py-6 text-yellow-500 hover:text-yellow-600 mx-auto">
          <IoLogoJavascript />
        </p>
        <p className=" text-4xl py-6 text-blue-800 hover:text-blue-900 mx-auto">
          <SiTypescript />
        </p>
        <p className=" text-4xl py-6 text-blue-400 hover:text-blue-500 mx-auto">
          <FaReact />
        </p>
      </div>

      <div className=" py-8  border-b-2 border-gray-600">
        <p className=" text-gray-500 flex text-xl">
          <span className=" px-3 text-yellow-400 text-3xl">
            <MdDone />
          </span>
          Bootstrap, Materialize
        </p>
        <p className=" text-gray-500 flex text-xl">
          <span className=" px-3 text-yellow-400 text-3xl">
            <MdDone />
          </span>
          Stylus, Sass, Less
        </p>
        <p className=" text-gray-500 flex text-xl">
          <span className=" px-3 text-yellow-400 text-3xl">
            <MdDone />
          </span>
          Gulp, Webpack, Grunt
        </p>
        <p className=" text-gray-500 flex text-xl">
          <span className=" px-3 text-yellow-400 text-3xl">
            <MdDone />
          </span>
          GIT knowledge
        </p>
      </div>
      <div className="py-8 border-b-2 border-gray-600">
        <p>
          <a href="#" className="flex ">
            <span className="text-gray-500 text-xl hover:text-white ">
              DOWNLOAD CV
            </span>
            <span className=" px-3 text-yellow-400 text-3xl">
              <BiSolidDownload />
            </span>
          </a>
        </p>
      </div>
      <div className=" rounded-lg py-8 grid grid-cols-3 ">
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
