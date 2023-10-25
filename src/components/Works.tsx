import { AiOutlineArrowRight } from 'react-icons/ai';

const Works = () => {
  const services: { img: string; title: string; disc: string; link: string }[] =
    [
      {
        img: '../../images/bg.jpg',
        title: 'Web Development',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
      {
        img: '../../images/bg.jpg',
        title: 'UI/UX Design',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
      {
        img: '../../images/bg.jpg',
        title: 'Sound Design',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
      {
        img: '../../images/bg.jpg',
        title: 'Game Design',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
      {
        img: '../../images/bg.jpg',
        title: 'Game Design',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
      {
        img: '../../images/bg.jpg',
        title: 'Game Design',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
        link: 'order now',
      },
    ];

  return (
    <div className=" py-12 px-12 w-full">
      <div>
        <div>
          <h4 className=" text-white text-4xl">WORKS</h4>
        </div>
      </div>
      <div className=" grid gap-10 grid-cols-auto py-9">
        {services.map((item) => {
          return (
            <div>
              <div>
                <img src={`${item.img}`} alt="" />
              </div>
              <div className=" bg-box-gray overflow-hidden px-8 py-8 rounded-2xl ">
                <div className=" my-5 mx-7">
                  <h5 className=" font-semibold text-2xl text-white">
                    {item.title}
                  </h5>
                </div>
                <div className=" my-5 mx-7">
                  <p className=" text-gray-500 text-xl font-normal">
                    {item.disc}
                  </p>
                </div>
                <div className=" my-5 mx-7">
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
