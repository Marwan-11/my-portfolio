import SectionHeader from "./ui/SectionHeader";
import HistoryCard from "./HistoryCard";
const Hestory = ({ data, name }: { name: string; data: any[] }) => {
  return (
    <div className="mr-4 mt-10 lg:mr-0 lg:w-[50%] lg:px-[20px]">
      <SectionHeader>{name}</SectionHeader>
      <div className=" flex flex-wrap justify-between lg:flex-row lg:py-9">
        {data.map((item) => {
          return <HistoryCard cardData={item} key={item.name} />;
        })}
      </div>
    </div>
  );
};
export default Hestory;
