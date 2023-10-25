import { BsFillPersonFill } from 'react-icons/bs';
import { MdAlternateEmail, MdEmail } from 'react-icons/md';

const Connect = () => {
  return (
    <div className=" my-8">
      <div className=" py-12 px-12 w-full border-r-2 border-gray-400">
        <div>
          <h4 className=" text-white text-4xl">Education</h4>
        </div>
      </div>

      <div className=" flex flex-col bg-box-gray overflow-hidden px-14 py-14 rounded-2xl ">
        <div className=" flex h-28 ">
          <div className=" text-4xl my-8 flex-1 text-gray-300 bg-zinc-800 w-24">
            <BsFillPersonFill />
          </div>
          <div className=" my-8 flex-3 w-full">
            <input
              type="text"
              className=" px-3 w-full h-9 placeholder:Name bg-gray-600 text-white text-lg "
            />
          </div>
        </div>
        <div className=" flex">
          <div className=" text-4xl my-8 flex-1 text-gray-300 bg-zinc-800 w-24">
            <MdAlternateEmail />
          </div>
          <div className=" my-8 flex-3 w-full">
            <input
              type="email"
              className=" px-3 w-full h-9 placeholder:Name bg-gray-600 text-white text-lg "
            />
          </div>
        </div>
        <div className=" flex">
          <div className=" text-4xl my-8  text-gray-300 bg-zinc-800 w-24">
            <MdEmail />
          </div>
          <div className=" my-8 flex-3 w-full">
            <textarea
              type="text"
              className=" px-3 w-full h-9 placeholder:Name bg-gray-600 text-white text-lg "
            />
          </div>
        </div>
        <div className=" w-fit">
          <button className=" text-black bg-yellow-400 px-12 py-8 rounded-lg text-xl font-bold   ">
            SEND MESSAGE{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Connect;
