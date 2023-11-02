import { MdOutlineCopyright, MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className=" m-4 flex bg-slate-800 px-3 py-2 lg:items-center lg:justify-between">
      <div className="flex items-center justify-center">
        <img
          src="../../public/images/logo-color-5a993285.svg"
          alt="logo"
          className="my-auto w-8"
        />
        <p className="mx-5 my-auto  hidden text-gray-600 lg:flex">
          <MdOutlineCopyright className="mt-1" />
          <span className=" px-2">{date}</span>
          All Rights Reserved.
        </p>
      </div>
      <div className="">
        <div className="mb-2 flex items-center justify-center">
          <p className="mx-5 my-auto flex text-gray-600 lg:hidden">
            <MdOutlineCopyright className="mt-1" />
            <span className=" px-2">{date}</span>
            All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <a href="#">
            <MdEmail className=" mx-3 text-2xl text-gray-600  hover:text-green-500" />
          </a>
          <a href="#">
            <AiFillGithub className=" mx-3 text-2xl text-gray-600  hover:text-cyan-500" />
          </a>
          <a href="#">
            <AiFillLinkedin className=" mx-3 text-2xl text-gray-600  hover:text-blue-800" />
          </a>
          <a href="#">
            <AiFillFacebook className=" mx-3 text-2xl text-gray-600  hover:text-blue-800" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
