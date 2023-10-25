import { MdOutlineCopyright, MdEmail } from 'react-icons/md';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className=" flex justify-between  bg-box-gray overflow-hidden rounded-2xl">
      <div className=" flex bg-box-gray px-8 py-8  ">
        <div className=" my-auto">
          <img
            src="../../images/logo-color-5a993285.svg"
            alt="logo"
            className=" w-8"
          />
        </div>

        <div className=" mx-5 my-auto  text-gray-400">
          <p className=" text-xl flex">
            <span className=" text-2xl">
              <MdOutlineCopyright />
            </span>
            <span className=" px-2">{date}</span>
            All Rights Reserved.
          </p>
        </div>
      </div>
      <div className=" rounded-lg py-8 flex mx-5 ">
        <p className=" px-4">
          <a href="#" className=" text-4xl text-gray-400 hover:text-green-500 ">
            <MdEmail />
          </a>
        </p>
        <p className=" px-4">
          <a href="#" className=" text-4xl text-gray-400 hover:text-cyan-500 ">
            <AiFillGithub />
          </a>
        </p>
        <p className="px-4">
          <a href="#" className=" text-4xl hover:text-blue-800 text-gray-400 ">
            <AiFillLinkedin />
          </a>
        </p>
        <p className="px-4">
          <a href="#" className=" text-4xl hover:text-blue-800 text-gray-400 ">
            <AiFillFacebook />
          </a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
