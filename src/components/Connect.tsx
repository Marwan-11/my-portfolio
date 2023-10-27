import { BsFillPersonFill } from 'react-icons/bs';
import { MdAlternateEmail, MdEmail } from 'react-icons/md';

const Connect = () => {
  return (
    <div className=" mt-10 px-[20px]">
      <h4 className=" mb-[20px] font-bold text-white text-[17px]">
        Get in touch
      </h4>
      <div className=" px-[15px]">
        <div className=" p-[30px] mb-[30px] flex flex-col bg-box-gray overflow-hidden rounded-2xl ">
          <div className=" flex flex-row-reverse h-14 mb-7 ">
            <input
              type="text"
              placeholder="Name"
              className=" peer  flex-1 placeholder:text-icon-gray  focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 px-5 h-full w-full bg-slate-700 text-white text-2xl "
            />
            <BsFillPersonFill className=" peer-focus:text-black peer-focus:bg-yellow-500 p-[10px]  w-14  bg-zinc-800 h-full  mx-auto  text-icon-gray " />
          </div>

          <div className=" flex flex-row-reverse h-14 mb-7 ">
            <input
              type="email"
              placeholder="Email"
              className=" peer  flex-1 placeholder:text-icon-gray focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 px-5 h-full w-full  bg-slate-700 text-white text-2xl "
            />
            <MdAlternateEmail className="peer-focus:text-black peer-focus:bg-yellow-500 p-[10px]  w-14   bg-zinc-800 h-full  mx-auto  text-icon-gray " />
          </div>

          <div className=" flex flex-row-reverse mb-7  ">
            <textarea
              type="text"
              placeholder="Message"
              className="peer  flex-1   placeholder:text-icon-gray  py-3 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 px-5  w-full placeholder:Name bg-slate-700 text-white text-2xl "
            />
            <MdEmail className="peer-focus:text-black peer-focus:bg-yellow-500 p-[10px]  w-14 h-full  bg-zinc-800   mx-auto  text-icon-gray " />
          </div>

          <button className=" px-[35px]  mb-7 ml-7 w-fit text-black bg-yellow-400 text-xl font-bold h-[45px]">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Connect;
