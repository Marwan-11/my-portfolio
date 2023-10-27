import { AiOutlineArrowRight } from 'react-icons/ai';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
      link: 'order now',
    },
    {
      title: 'UI/UX Design',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
      link: 'order now',
    },
    {
      title: 'Sound Design',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
      link: 'order now',
    },
    {
      title: 'Game Design',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
      link: 'order now',
    },
    {
      title: 'Game Design',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
      link: 'order now',
    },
    {
      title: 'Game Design',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
      link: 'order now',
    },
  ];

  return (
    <div className=" mt-10 px-[20px]">
      <h4 className=" mb-[20px] font-bold text-white text-[17px]">
        My Services
      </h4>
      <div className=" grid grid-cols-auto ">
        {services.map((item) => {
          return (
            <div className=" px-[15px]">
              <div className=" my-[15px] bg-box-gray overflow-hidden px-8 py-8 rounded-2xl ">
                <h5 className=" mb-[16px] font-semibold text-[14px] text-white">
                  {item.title}
                </h5>
                <p className=" text-gray-500 mb-[16px] text-[13px] font-normal">
                  {item.disc}
                </p>
                <a href="#">
                  <p className=" text-yellow-400 inline-block  text-[12px]">
                    {item.link}
                  </p>
                  <AiOutlineArrowRight className=" text-yellow-400 inline-block" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
