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
    <div className=" py-12 px-12">
      <div>
        <div>
          <h4 className=" text-white text-3xl">WORKS</h4>
        </div>
      </div>
      <div className=" grid gap-10 grid-cols-auto py-9">
        {services.map((item) => {
          return (
            <div className="overflow-hidden h-96 w-full relative group">
              <div className=" w-full">
                <img src={`${item.img}`} alt="Project photo" className="" />
              </div>
              <div className=" h-48 absolute top-[-100%] duration-500  bg-box-gray  px-8 py-4 group-hover:top-[50%]">
                <div className=" my-2 mx-7">
                  <h5 className=" font-semibold text-2xl text-white">
                    {item.title}
                  </h5>
                </div>
                <div className=" my-2 mx-7">
                  <p className=" text-gray-500 text-xl font-normal">
                    {item.disc}
                  </p>
                </div>
                <div className=" my-2 mx-7">
                  <a href="#">
                    <p className=" text-yellow-400 inline-block  text-2xl">
                      {item.link}
                    </p>
                    <AiOutlineArrowRight className=" text-yellow-400 inline-block" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Works;
