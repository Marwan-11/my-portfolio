import { formatDate } from "@/lib/utils";
import { AiOutlineArrowRight } from "react-icons/ai";

const HistoryCard = ({ cardData }: { cardData: EducationDataType }) => {
  const item = cardData;
  return (
    <div className="relative min-w-[300px] flex-1 border-0 border-r-4 border-r-muted-foreground px-4 before:absolute before:-right-[10px] before:top-0 before:z-10 before:h-4 before:w-4 before:rounded-full before:border-4 before:border-primary before:bg-foreground before:content-[''] ">
      <div className=" my-4 rounded-lg  border border-muted-foreground bg-card-foreground p-8 shadow-sm shadow-secondary">
        <div className=" flex justify-between">
          <h5 className=" mb-4 text-lg font-semibold text-background">
            {item.title}
          </h5>
          <p className=" h-fit w-fit rounded-xl bg-primary  px-4 py-2 text-center text-xs font-semibold capitalize text-muted hover:text-foreground">
            <span className="break-keep">{formatDate(item.date.start)}</span>-
            <span className="break-keep">{formatDate(item.date.end)}</span>
          </p>
        </div>
        <p className=" mb-4 text-sm font-thin capitalize italic text-muted">
          {item.disc}
        </p>
        <p className=" mb-4 w-full text-sm font-normal text-muted-foreground">
          {item.info}
        </p>
        <a href={item.link} className="group ms-2">
          {`${item.linkDisc}` && (
            <div>
              <p className=" inline-block text-sm capitalize text-primary">
                {item.linkDisc}
              </p>
              <AiOutlineArrowRight className=" ms-1 inline-block text-primary duration-500 group-hover:ms-3" />
            </div>
          )}
        </a>
      </div>
    </div>
  );
};
export default HistoryCard;
