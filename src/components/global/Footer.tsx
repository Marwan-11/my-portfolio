import { MdOutlineCopyright, MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className=" mx-8 my-4 flex justify-center rounded-lg  border border-muted-foreground bg-foreground px-3 py-2 shadow-sm shadow-secondary lg:items-center lg:justify-between">
      <div className="flex items-center justify-center">
        <img
          src="/images/logo-color-5a993285.svg"
          alt="logo"
          className="my-auto w-8"
        />
        <p className="mx-5 my-auto  hidden text-muted lg:flex">
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
          <a
            title="email"
            href="mailto:marwanyahia151@gmail.com"
            target="_blank"
          >
            <MdEmail className=" mx-3 text-2xl text-muted-foreground  hover:text-primary" />
          </a>
          <a title="Github" href="https://github.com/Marwan-11" target="_blank">
            <AiFillGithub className=" mx-3 text-2xl text-muted-foreground  hover:text-primary" />
          </a>
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/marwan-yahia/"
            target="_blank"
          >
            <AiFillLinkedin className=" mx-3 text-2xl text-muted-foreground  hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
