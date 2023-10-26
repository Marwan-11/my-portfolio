import { BsFillPersonFill } from 'react-icons/bs';
import { MdAlternateEmail, MdEmail } from 'react-icons/md';

const Connect = () => {
  return (
    <div className=" py-8 px-8 my-8">
      <div className=" py-12 px-12 w-full">
        <h4 className=" text-white text-5xl">Get in touch</h4>
      </div>

      <div className=" flex flex-col bg-box-gray overflow-hidden px-14 py-4 rounded-2xl ">
        <div className=" flex h-16 m-7 ">
          <div className=" w-16 my-8  bg-zinc-800 h-full">
            <BsFillPersonFill className=" text-4xl mx-auto my-3 text-icon-gray " />
          </div>
          <div className=" h-full my-8 flex-1">
            <input
              type="text"
              placeholder="Name"
              className=" placeholder:text-icon-gray  focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 px-5 h-full w-full bg-slate-700 text-white text-2xl "
            />
          </div>
        </div>

        <div className=" flex h-16 m-7 ">
          <div className=" w-16 my-8  bg-zinc-800 h-full">
            <MdAlternateEmail className=" text-4xl mx-auto my-3 text-icon-gray " />
          </div>
          <div className=" my-8 flex-1 h-full">
            <input
              type="email"
              placeholder="Email"
              className=" placeholder:text-icon-gray focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 px-5 h-full w-full  bg-slate-700 text-white text-2xl "
            />
          </div>
        </div>

        <div className=" flex h-52 m-7 ">
          <div className=" w-16 my-8  bg-zinc-800 h-full">
            <MdEmail className=" text-4xl mx-auto my-3 text-icon-gray " />
          </div>
          <div className=" my-8 flex-1 h-full">
            <textarea
              type="text"
              placeholder="Message"
              className="  placeholder:text-icon-gray  py-3 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 px-5 h-full  w-full placeholder:Name bg-slate-700 text-white text-2xl "
            />
          </div>
        </div>

        <div className=" mx-7 mt-16 w-fit">
          <button className=" my-5 text-black bg-yellow-400 px-12 py-6  text-xl font-bold   ">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Connect;
