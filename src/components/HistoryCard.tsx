import { AiOutlineArrowRight } from "react-icons/ai";

const HistoryCard = ({ cardData }: { cardData: any }) => {
  const item = cardData;
  return (
    <div className="relative min-w-[300px] flex-1 border-0 border-r-4 border-r-slate-800 px-4 before:absolute before:-right-[10px] before:top-0 before:z-20 before:h-4 before:w-4 before:rounded-full before:border-4 before:border-yellow-500 before:bg-slate-900 before:content-['']">
      <div className=" my-4 rounded-lg bg-box-gray p-8">
        <div className=" flex justify-between">
          <h5 className=" mb-4 text-lg font-semibold text-white">
            {item.title}
          </h5>
          <p className=" h-fit w-fit rounded-3xl bg-slate-900 px-4 py-2 text-xs font-semibold capitalize text-icon-gray">
            {item.date}
          </p>
        </div>
        <p className=" mb-4 text-sm font-thin capitalize italic text-gray-500">
          {item.disc}
        </p>
        <p className=" mb-4 w-full text-sm font-normal text-gray-500">
          {item.info}
        </p>
        <a href="#" className="group ms-2">
          <p className=" inline-block text-sm capitalize text-yellow-400 ">
            {item.link}
          </p>
          <AiOutlineArrowRight className=" ms-1 inline-block text-yellow-400 duration-500 group-hover:ms-3" />
        </a>
      </div>
    </div>
  );
};
export default HistoryCard;
