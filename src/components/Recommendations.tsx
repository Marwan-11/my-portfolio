import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
  return (
    <div className=" py-12 px-12 ">
      <div className=" py-7 my-8">
        <h4 className=" text-white text-6xl">Recommendations</h4>
      </div>
      <div className=" grid gap-11 h-full grid-cols-auto py-9 ">
        {services.map((item) => {
          return (
            <div className=" bg-box-gray  px-8 py-8 rounded-2xl relative min-h-full min-w-full  ">
              <div className=" my-5 mx-7">
                <h5 className=" font-bold text-4xl text-white">{item.title}</h5>
              </div>
              <div>
                <img
                  src={item.img}
                  alt="img"
                  className=" rounded-full w-28 absolute -top-14 right-4  "
                />
              </div>
              <div className=" mx-7">
                <p className=" text-icon-gray text-xl font-thin italic ">
                  {item.job}
                </p>
              </div>
              <div className=" my-5 mx-7">
                <p className=" text-icon-gray text-xl font-normal">
                  {item.disc}
                </p>
              </div>
              <div className=" my-5 mx-7">
                <p className=" text-yellow-400 hover:text-yellow-500 text-2xl bg-my-black rounded-3xl flex w-fit py-1">
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
          <IoIosArrowBack className=" text-yellow-400 hover:text-yellow-500  text-2xl inline-block mx-2" />
        </button>
        <button>
          <IoIosArrowForward className=" text-yellow-400 hover:text-yellow-500 text-2xl inline-block mx-2" />
        </button>
      </div>
    </div>
  );
};
export default Recommendations;
