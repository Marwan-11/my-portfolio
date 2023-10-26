import { AiOutlineArrowRight } from 'react-icons/ai';

const History = () => {
  const education = [
    {
      title: 'Web Development',
      disc: 'well done',
      info: 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
      date: 'jan 2023-feb 2023',
      link: 'order now',
    },
    {
      title: 'UI/UX Design',
      disc: 'well done',
      info: 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',

      date: 'jan 2023-feb 2023',
      link: 'order now',
    },
    {
      title: 'Sound Design',
      disc: 'well done',
      info: 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',

      date: 'jan 2023-feb 2023',
      link: 'order now',
    },
    {
      title: 'Game Design',
      disc: 'well done',
      info: 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',

      date: 'jan 2023-feb 2023',
      link: 'order now',
    },
  ];
  const work = [
    {
      title: 'Web Development',
      disc: 'well done',
      info: 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',

      date: 'jan 2023-feb 2023',
      link: 'order now',
    },
    {
      title: 'UI/UX Design',
      disc: 'well done',
      info: 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',

      date: 'jan 2023-feb 2023',
      link: 'order now',
    },
    {
      title: 'Sound Design',
      disc: 'well done',
      info: 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',

      date: 'jan 2023-feb 2023',
      link: 'order now',
    },
    {
      title: 'Game Design',
      disc: 'well done',
      info: 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',

      date: 'jan 2023-feb 2023',
      link: 'order now',
    },
  ];

  return (
    <div className=" flex">
      <div className=" py-12 px-12 w-full">
        <div>
          <div>
            <h4 className=" text-white text-6xl">Education</h4>
          </div>
        </div>
        <div className=" grid gap-10 grid-cols-auto py-9">
          {education.map((item) => {
            return (
              <div className=" bg-box-gray overflow-hidden px-8 py-8 rounded-2xl ">
                <div className=" my-5 mx-7 flex justify-between">
                  <h5 className=" font-semibold text-2xl text-white">
                    {item.title}
                  </h5>
                  <div className=" p-2 bg-slate-900 px-6 rounded-3xl w-fit h-fit ">
                    <h5 className=" font-semibold text-2xl  text-icon-gray">
                      {item.date}
                    </h5>
                  </div>
                </div>
                <div className=" my-5 mx-7">
                  <p className=" text-icon-gray text-xl font-thin italic pb-3">
                    {item.disc}
                  </p>
                  <p className=" text-icon-gray text-xl font-normal">
                    {item.info}
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
            );
          })}
        </div>
      </div>
      <div className=" py-12 px-12 w-full">
        <div>
          <div>
            <h4 className=" text-white text-6xl">Work History</h4>
          </div>
        </div>
        <div className=" grid gap-10 grid-cols-auto py-9">
          {work.map((item) => {
            return (
              <div className=" bg-box-gray overflow-hidden px-8 py-8 rounded-2xl ">
                <div className=" my-5 mx-7 flex justify-between">
                  <h5 className=" font-semibold text-2xl text-white">
                    {item.title}
                  </h5>
                  <div className=" p-2 bg-slate-900 px-6 rounded-3xl w-fit h-fit ">
                    <h5 className=" font-semibold text-2xl  text-icon-gray">
                      {item.date}
                    </h5>
                  </div>
                </div>
                <div className=" my-5 mx-7">
                  <p className=" text-icon-gray text-xl italic font-thin pb-3">
                    {item.disc}
                  </p>
                  <p className=" text-icon-gray text-xl font-normal">
                    {item.info}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default History;
