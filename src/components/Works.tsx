import { AiOutlineArrowRight } from 'react-icons/ai';

const Works = () => {
  const services: { img: string; title: string; disc: string; link: string }[] =
    [
      {
        img: '../../images/bg.jpg',
        title: 'Web Development',
        disc: 'Lorem ipsum dolor sitmmodi deserunt vita Veniam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
      {
        img: '../../images/bg.jpg',
        title: 'UI/UX Design',
        disc: 'Lorem ipsum dolor sit amet, co quasi! Veniam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
      {
        img: '../../images/bg.jpg',
        title: 'Sound Design',
        disc: 'Lorem ipsum dolor sit amitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
      {
        img: '../../images/bg.jpg',
        title: 'Game Design',
        disc: 'Lorem ipsum dolor sitserunt vitae,niam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
      {
        img: '../../images/bg.jpg',
        title: 'Game Design',
        disc: 'Lorem ipsum  deserunt vitae, vero m quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
      {
        img: '../../images/bg.jpg',
        title: 'Game Design',
        disc: 'Lorem ipsum dolor siterunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
    ];

  return (
    <div className=" mt-10 px-[20px] ">
      <h4 className=" mb-[20px] font-bold text-white text-[17px]">WORKS</h4>
      <div className=" flex gap-7  justify-between flex-wrap py-9 mx-[20px]">
        {services.map((item) => {
          return (
            <div className="overflow-hidden relative group">
              <img
                src={`${item.img}`}
                alt="Project photo"
                className=" w-[270px] border-none duration-500 group-hover:scale-[1.1]"
              />
              <div className=" h-[50%] w-full absolute left-0 bottom-[-100%]  bg-box-gray px-3 py-2  group-hover:bottom-[0] duration-500">
                <h5 className=" font-semibold text-[13px] text-white">
                  {item.title}
                </h5>
                <p className=" text-gray-500 text-[13px] font-normal">
                  {item.disc}
                </p>
                <a href="#" className="">
                  <p className=" text-yellow-400 inline-block  text-[13px]">
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
export default Works;
