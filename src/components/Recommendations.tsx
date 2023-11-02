import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useState } from 'react';
import avatar1 from "../../public/images/avatar-01.png";
import SectionHeader from "./ui/SectionHeader";

const Recommendations = () => {
  const services = [
    {
      title: "name",
      job: "bvcsrxgtrbb",
      img: avatar1,
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
    {
      title: "name",
      job: "bdhsfgdbb",
      img: "../../images/avatar-02.png",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
    {
      title: "name",
      job: "bbsrhfdhb",
      img: "../../images/avatar-03.png",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
    {
      title: "name",
      job: "bbbfgshgh",
      img: "../../images/avatar-04.png",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
    {
      title: "name",
      job: "bbdshdfhfb",
      img: "../../images/avatar-05.png",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
    {
      title: "name",
      job: "bberyerhdfb",
      img: "../../images/avatar-06.png",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
  ];

  // const [current, setCurrent] = useState(services.length - 1);

  // const prev = () =>
  //   setCurrent((current) =>
  //     current === 0 ? services.length - 1 : current - 1
  //   );

  // const next = () =>
  //   setCurrent((current) => (services.length - 1 ? 0 : current + 1));

  return (
    <div className="mt-10 lg:px-[20px]">
      <SectionHeader classes="mb-20">Recommendations</SectionHeader>
      <div className="">
        {services.map((item) => {
          return (
            <div className="my-10 min-w-fit px-4">
              <div className="relative my-4 rounded-lg  bg-box-gray px-8 py-8 ">
                <h5 className="mb-4 text-lg font-semibold capitalize text-white">
                  {item.title}
                </h5>
                <img
                  src={item.img}
                  alt="img"
                  className="absolute -top-9 right-7 w-16 rounded-full"
                />
                <p className="mb-4 text-sm font-thin capitalize italic text-zinc-500">
                  {item.job}
                </p>
                <p className="mb-4 text-sm font-normal text-zinc-500">
                  {item.disc}
                </p>
                <p className="flex w-fit rounded-3xl border border-slate-800 px-2 py-1 text-xl text-yellow-400 duration-300 hover:border-slate-600 hover:text-yellow-500">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button>
          <IoIosArrowBack className=" mx-2  inline-block  text-2xl text-yellow-400 hover:text-yellow-500" />
        </button>
        <button>
          <IoIosArrowForward className=" mx-2 inline-block text-2xl text-yellow-400 hover:text-yellow-500" />
        </button>
      </div>
    </div>
  );
};
export default Recommendations;
