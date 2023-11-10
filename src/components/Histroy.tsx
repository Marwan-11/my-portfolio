import SectionHeader from "./ui/SectionHeader";
import HistoryCard from "./HistoryCard";
const History = ({
  data,
  name,
  ids,
}: {
  name: string;
  data: EducationDataType[];
  ids: string;
}) => {
  return (
    <div className="mr-4 mt-10 lg:mr-0 lg:w-[50%] lg:px-[20px]" id={ids}>
      <SectionHeader>{name}</SectionHeader>
      <div className=" flex flex-col justify-between lg:py-9">
        {data.map((item) => {
          return <HistoryCard cardData={item} key={item.title} />;
        })}
      </div>
    </div>
  );
};
export default History;
