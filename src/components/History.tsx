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
    <div className=" lg:flex">
      <div className="  mt-10 lg:px-[20px]">
        <h4 className=" text-center lg:text-left lg:mb-[20px] font-bold text-white text-[17px]">
          Education
        </h4>
        <div className=" flex gap-4  justify-between flex-wrap lg:py-9 lg:flex-row">
          {education.map((item) => {
            return (
              <div className=" px-[15px] flex-1 min-w-[300px]">
                <div className=" my-[15px] bg-box-gray overflow-hidden px-8 py-8 rounded-lg ">
                  <div className=" flex justify-between">
                    <h5 className=" mb-[16px] font-semibold text-[14px] text-white">
                      {item.title}
                    </h5>
                    <h5 className=" p-2 bg-slate-900 px-6 rounded-3xl w-fit h-fit  font-semibold  text-[12px]  text-icon-gray">
                      {item.date}
                    </h5>
                  </div>
                  <p className=" text-gray-500 mb-[16px] text-[13px] font-thin italic">
                    {item.disc}
                  </p>
                  <p className=" text-gray-500 mb-[16px] text-[13px] font-normal">
                    {item.info}
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
      <div className="  mt-10 lg:px-[20px]">
        <h4 className="text-center lg:text-left lg:mb-[20px] font-bold text-white text-[17px]">
          Work History
        </h4>
        <div className="  flex gap-4  justify-between flex-wrap lg:py-9 lg:flex-row">
          {work.map((item) => {
            return (
              <div className=" px-[15px] flex-1 min-w-[300px]">
                <div className=" my-[15px] bg-box-gray overflow-hidden px-8 py-8 rounded-lg ">
                  <div className=" flex justify-between">
                    <h5 className=" mb-[16px] font-semibold text-[14px] text-white">
                      {item.title}
                    </h5>
                    <h5 className=" p-2 bg-slate-900 px-6 rounded-3xl w-fit h-fit  font-semibold text-[12px]  text-icon-gray">
                      {item.date}
                    </h5>
                  </div>
                  <p className=" text-gray-500 mb-[16px] text-[13px] font-thin italic">
                    {item.disc}
                  </p>
                  <p className=" text-gray-500 mb-[16px] text-[13px] font-normal">
                    {item.info}
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
    </div>
  );
};
export default History;
