import { AiOutlineArrowRight } from "react-icons/ai";
import SectionHeader from "./ui/SectionHeader";
import { ServicesData } from "@/lib/const";

const ServicesSection = () => {
  return (
    <div className="my-20 lg:px-5" id="services">
      <SectionHeader>My Services</SectionHeader>
      <div className="  flex flex-wrap justify-between gap-4 lg:flex-row lg:py-9">
        {ServicesData.map((item) => {
          return (
            <div className=" min-w-[300px] flex-1 px-4 ">
              <div className=" my-4 overflow-hidden rounded-lg  border border-muted-foreground bg-card-foreground p-8 shadow-sm shadow-secondary ">
                <h5 className="mb-4 font-semibold text-card">{item.title}</h5>
                <p className=" mb-4 text-sm font-normal text-muted-foreground">
                  {item.disc}
                </p>
                <a href={item.link} className="group ms-2">
                  <p className="inline-block text-sm capitalize text-primary">
                    order now
                  </p>
                  <AiOutlineArrowRight className="ms-1 inline-block text-primary duration-500 group-hover:ms-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ServicesSection;
