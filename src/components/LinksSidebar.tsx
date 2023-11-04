import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";

const LinksSidebar = ({ isSideBarOpen }: any) => {
  return (
    <aside className="bg-card-foreground flex h-full flex-col justify-start">
      {isSideBarOpen && (
        <div className={``}>
          <nav className=" bg-card-foreground flex h-full flex-col shadow-sm ">
            <div className=" bg-box-gray duration-700">
              <div className=" mt-[100px]">
                <ul className="">
                  <li className=" text-muted-foreground  hover:text-background px-[30px] py-[7px] text-[13px]">
                    <a href="#">Home</a>
                  </li>
                  <li className="text-muted-foreground  hover:text-background px-[30px] py-[7px] text-[13px]">
                    <a href="#">Services</a>
                  </li>
                  <li className=" text-muted-foreground  hover:text-background px-[30px] py-[7px] text-[13px]">
                    <a href="#">Works</a>
                  </li>
                  <li className=" text-muted-foreground  hover:text-background px-[30px] py-[7px] text-[13px]">
                    <a href="#">Resume</a>
                  </li>
                  <li className="text-muted-foreground  hover:text-background px-[30px] py-[7px] text-[13px]">
                    <a href="#">Blog</a>
                  </li>
                  <li className="text-muted-foreground  hover:text-background px-[30px] py-[7px] text-[13px]">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <hr className=" border-1  border-muted mx-[30px] mt-4 opacity-30" />

              <div className="  mt-4  grid grid-cols-2 ">
                <button className="text-muted-foreground hover:text-background  mx-auto text-2xl">
                  <MdLightMode />
                </button>
                <button className="text-muted-foreground hover:text-background  mx-auto text-2xl">
                  <MdDarkMode />
                </button>
              </div>
              <hr className=" border-1  border-muted mx-[30px] mt-4 opacity-30" />

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
