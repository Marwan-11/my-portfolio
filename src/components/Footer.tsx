import { MdOutlineCopyright, MdEmail } from 'react-icons/md';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className=" lg:mx-7 px-[30px] lg:flex lg:justify-between  bg-box-gray overflow-hidden rounded-lg">
      <div className=" flex bg-box-gray mt-4 ">
        <img
          src="../../public/images/logo-color-5a993285.svg"
          alt="logo"
          className="  my-auto w-8"
        />

        <div className=" mx-5 my-auto  text-gray-400">
          <p className=" text-[14px] flex">
            <MdOutlineCopyright className=" text-[18px] mt-[0.5px]" />
            <span className=" px-2">{date}</span>
            All Rights Reserved.
          </p>
        </div>
      </div>
      <div className=" rounded-lg py-8 flex mx-5 ">
        <a href="#">
          <MdEmail className=" text-2xl text-gray-400 hover:text-green-500  mx-3" />
        </a>
        <a href="#">
          <AiFillGithub className=" text-2xl text-gray-400 hover:text-cyan-500  mx-3" />
        </a>
        <a href="#">
          <AiFillLinkedin className=" text-2xl hover:text-blue-800 text-gray-400  mx-3" />
        </a>
        <a href="#">
          <AiFillFacebook className=" text-2xl hover:text-blue-800 text-gray-400  mx-3" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
