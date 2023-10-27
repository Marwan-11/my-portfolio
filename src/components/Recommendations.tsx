import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import carousel from '../Carousel';
import { useState } from 'react';

const Recommendations = () => {
  const services = [
    {
      title: 'name',
      job: 'bvcsrxgtrbb',
      img: '../../images/avatar-01.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'name',
      job: 'bdhsfgdbb',
      img: '../../images/avatar-02.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'name',
      job: 'bbsrhfdhb',
      img: '../../images/avatar-03.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'name',
      job: 'bbbfgshgh',
      img: '../../images/avatar-04.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'name',
      job: 'bbdshdfhfb',
      img: '../../images/avatar-05.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'name',
      job: 'bberyerhdfb',
      img: '../../images/avatar-06.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
  ];

  const [current, setCurrent] = useState(services.length - 1);

  const prev = () =>
    setCurrent((current) =>
      current === 0 ? services.length - 1 : current - 1
    );

  const next = () =>
    setCurrent((current) => (services.length - 1 ? 0 : current + 1));

  return (
    <div className=" mt-10 px-[20px]">
      <h4 className=" mb-[20px] font-bold text-white text-[17px]">
        Recommendations
      </h4>
      <div className=" flex overflow-hidden ">
        {services.map((item) => {
          return (
            <div className=" px-[15px] min-w-fit">
              <div className=" relative my-[15px] bg-box-gray  px-8 py-8 rounded-2xl ">
                <h5 className=" mb-[16px] font-semibold text-[14px] text-white">
                  {item.title}
                </h5>
                <img
                  src={item.img}
                  alt="img"
                  className=" rounded-full w-16 absolute -top-9 right-7  "
                />
                <p className=" text-icon-gray mb-[16px] text-[13px] font-thin italic ">
                  {item.job}
                </p>
                <p className=" text-gray-500 mb-[16px] text-[13px] font-normal">
                  {item.disc}
                </p>
                <p className=" text-yellow-400 hover:text-yellow-500 text-xl bg-gray-400 rounded-3xl flex w-fit py-1">
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
          <IoIosArrowBack
            onClick={prev}
            className=" text-yellow-400 hover:text-yellow-500  text-2xl inline-block mx-2"
          />
        </button>
        <button>
          <IoIosArrowForward
            onClick={next}
            className=" text-yellow-400 hover:text-yellow-500 text-2xl inline-block mx-2"
          />
        </button>
      </div>
    </div>
  );
};
export default Recommendations;
