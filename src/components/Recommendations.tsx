import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import {Swiper , SwiperSlide} FROM 'Swiper/react'

const Recommendations = () => {
  const services = [
    {
      title: 'name',
      job: 'bbb',
      img: '../../images/avatar-01.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'name',
      job: 'bbb',
      img: '../../images/avatar-02.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'name',
      job: 'bbb',
      img: '../../images/avatar-03.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'name',
      job: 'bbb',
      img: '../../images/avatar-04.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'name',
      job: 'bbb',
      img: '../../images/avatar-05.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'name',
      job: 'bbb',
      img: '../../images/avatar-06.png',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
  ];
  return (
    <div className=" py-12 px-12 w-full">
      <div className=" py-7">
        <div>
          <h4 className=" text-white text-4xl">Recommendations</h4>
        </div>
      </div>
      <div className=" w-full overflow-hidden flex items-center justify-center h-full  flex-row  gap-10  relative py-16 mx-auto my-0">
        {services.map((item) => {
          return (
            <div className=" bg-box-gray  px-8 py-8 rounded-2xl relative min-w-full min-h-full  ">
              <div className=" my-5 mx-7">
                <h5 className=" font-semibold text-2xl text-white">
                  {item.title}
                </h5>
              </div>
              <div>
                <img
                  src={item.img}
                  alt="img"
                  className=" rounded-full w-28 absolute -top-14 right-4  "
                />
              </div>
              <div className=" mx-7">
                <p className=" text-gray-500 text-xl font-normal">{item.job}</p>
              </div>
              <div className=" my-5 mx-7">
                <p className=" text-gray-500 text-xl font-normal">
                  {item.disc}
                </p>
              </div>
              <div className=" my-5 mx-7">
                <p className=" text-yellow-400 inline-block  text-2xl bg-my-black rounded-3xl flex w-fit px-3 py-1">
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
          <IoIosArrowBack className=" text-yellow-400 text-2xl inline-block mx-2" />
        </button>
        <button>
          <IoIosArrowForward className=" text-yellow-400 text-2xl inline-block mx-2" />
        </button>
      </div>
    </div>
  );
};
export default Recommendations;
