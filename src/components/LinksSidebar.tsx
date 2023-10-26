import { VscThreeBars } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useState } from 'react';

const LinksSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="h-full bg-box-gray">
      <button
        onClick={toggleSidebar}
        className={`${
          isOpen ? 'right-48 top-4' : 'top-4 right-10'
        } duration-700 p-1.5   absolute  z-10`}
      >
        {isOpen ? (
          <AiOutlineClose className="text-icon-gray text-4xl hover:text-white" />
        ) : (
          <VscThreeBars className="text-icon-gray text-4xl hover:text-white" />
        )}
      </button>

      <div
        className={`fixed right-0 top-0 ${
          isOpen ? 'w-64' : 'w-32'
        } h-full bg-box-gray shadow-sm duration-700`}
      >
        <nav className=" h-full flex flex-col bg-box-gray shadow-sm ">
          {isOpen && (
            <div className=" duration-700 bg-box-gray">
              <div className=" mt-32">
                <ul className=" px-3">
                  <li className=" text-icon-gray text-2xl my-5 mx-4 hover:text-white">
                    <a href="#">Home</a>
                  </li>
                  <li className=" text-icon-gray text-2xl my-5 mx-4 hover:text-white">
                    <a href="#">Services</a>
                  </li>
                  <li className=" text-icon-gray text-2xl my-5 mx-4 hover:text-white">
                    <a href="#">Works</a>
                  </li>
                  <li className=" text-icon-gray text-2xl my-5 mx-4 hover:text-white">
                    <a href="#">Resume</a>
                  </li>
                  <li className=" text-icon-gray text-2xl my-5 mx-4 hover:text-white">
                    <a href="#">Blog</a>
                  </li>
                  <li className=" text-icon-gray text-2xl my-5 mx-4 hover:text-white">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <hr className=" mx-6 border-2 border-icon-gray opacity-30" />

              <div className="  grid  grid-cols-2  py-7">
                <button className=" text-4xl text-white mx-auto">
                  <MdLightMode />
                </button>
                <button className=" text-5xl text-white mx-auto">
                  <MdDarkMode />
                </button>
              </div>
              <hr className=" mx-6 border-2 border-icon-gray opacity-30" />

              <div className=" m-6  grid grid-cols-4 ">
                <button className=" mb-5 mx-auto w-9 h-9 bg-red-600  rounded-full"></button>
                <button className=" mb-5 mx-auto w-9 h-9 bg-orange-600  rounded-full"></button>
                <button className=" mb-5 mx-auto w-9 h-9 bg-yellow-400  rounded-full"></button>
                <button className=" mb-5 mx-auto w-9 h-9 bg-green-500  rounded-full"></button>
                <button className=" mb-5 mx-auto w-9 h-9  bg-lime-400  rounded-full"></button>
                <button className=" mb-5 mx-auto w-9 h-9 bg-blue-600  rounded-full"></button>
                <button className=" mb-5 mx-auto w-9 h-9 bg-cyan-400  rounded-full"></button>
                <button className=" mb-5 mx-auto w-9 h-9 bg-purple-500  rounded-full"></button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
};
export default LinksSidebar;
