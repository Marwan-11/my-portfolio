import { AiOutlineArrowRight } from "react-icons/ai";

const HistoryCard = ({ cardData }: { cardData: any }) => {
  const item = cardData;
  return (
    <div className="before:border-primary border-r-muted-foreground before:bg-foreground relative min-w-[300px] flex-1 border-0 border-r-4 px-4 before:absolute before:-right-[10px] before:top-0 before:z-20 before:h-4 before:w-4 before:rounded-full before:border-4 before:content-['']">
      <div className=" bg-card-foreground border-muted-foreground  my-4 rounded-lg border p-8">
        <div className=" flex justify-between">
          <h5 className=" text-background mb-4 text-lg font-semibold">
            {item.title}
          </h5>
          <p className=" text-muted bg-primary h-fit w-fit  rounded-3xl px-4 py-2 text-xs font-semibold capitalize">
            {item.date}
          </p>
        </div>
        <p className=" text-muted mb-4 text-sm font-thin capitalize italic">
          {item.disc}
        </p>
        <p className=" text-muted-foreground mb-4 w-full text-sm font-normal">
          {item.info}
        </p>
        <a href="#" className="group ms-2">
          <p className=" text-primary inline-block text-sm capitalize">
            {item.link}
          </p>
          <AiOutlineArrowRight className=" text-primary ms-1 inline-block duration-500 group-hover:ms-3" />
        </a>
      </div>
    </div>
  );
};
export default HistoryCard;
