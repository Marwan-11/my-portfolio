import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";

const LinksSidebar = ({ toggleSidebar, isOpen }: any) => {
  return (
    <aside className="flex h-full flex-col justify-start bg-box-gray">
      <button onClick={toggleSidebar} className={`m-auto mt-8`}>
        {isOpen ? (
          <AiOutlineClose className="text-2xl text-icon-gray hover:text-white" />
        ) : (
          <VscThreeBars className="text-2xl text-icon-gray hover:text-white" />
        )}
      </button>

      {isOpen && (
        <div className={``}>
          <nav className=" flex h-full flex-col bg-box-gray shadow-sm ">
            <div className=" bg-box-gray duration-700">
              <div className=" mt-[100px]">
                <ul className="">
                  <li className=" px-[30px] py-[7px] text-[13px] text-icon-gray hover:text-white">
                    <a href="#">Home</a>
                  </li>
                  <li className=" px-[30px] py-[7px] text-[13px] text-icon-gray hover:text-white">
                    <a href="#">Services</a>
                  </li>
                  <li className=" px-[30px] py-[7px] text-[13px] text-icon-gray hover:text-white">
                    <a href="#">Works</a>
                  </li>
                  <li className=" px-[30px] py-[7px] text-[13px] text-icon-gray hover:text-white">
                    <a href="#">Resume</a>
                  </li>
                  <li className=" px-[30px] py-[7px] text-[13px] text-icon-gray hover:text-white">
                    <a href="#">Blog</a>
                  </li>
                  <li className=" px-[30px] py-[7px] text-[13px] text-icon-gray hover:text-white">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <hr className=" border-1 mx-[30px] mt-4 border-icon-gray opacity-30" />

              <div className="  mt-4  grid grid-cols-2 ">
                <button className=" mx-auto text-2xl text-white">
                  <MdLightMode />
                </button>
                <button className=" mx-auto text-2xl text-white">
                  <MdDarkMode />
                </button>
              </div>
              <hr className=" border-1 mx-[30px] mt-4 border-icon-gray opacity-30" />

              <div className=" mt-4 grid  grid-cols-4 px-[30px] ">
                <button className=" mx-auto mb-5 h-5 w-5 rounded-full  bg-red-600"></button>
                <button className=" mx-auto mb-5 h-5 w-5 rounded-full  bg-orange-600"></button>
                <button className=" mx-auto mb-5 h-5 w-5 rounded-full  bg-yellow-400"></button>
                <button className=" mx-auto mb-5 h-5 w-5 rounded-full  bg-green-500"></button>
                <button className=" mx-auto mb-5 h-5 w-5  rounded-full  bg-lime-400"></button>
                <button className=" mx-auto mb-5 h-5 w-5 rounded-full  bg-blue-600"></button>
                <button className=" mx-auto mb-5 h-5 w-5 rounded-full  bg-cyan-400"></button>
                <button className=" mx-auto mb-5 h-5 w-5 rounded-full  bg-purple-500"></button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </aside>
  );
};
export default LinksSidebar;
