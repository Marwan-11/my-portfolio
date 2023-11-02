import { AiOutlineArrowRight } from "react-icons/ai";
import SectionHeader from "./ui/SectionHeader";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
      link: "order now",
    },
    {
      title: "UI/UX Design",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
      link: "order now",
    },
    {
      title: "Sound Design",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
      link: "order now",
    },
    {
      title: "Game Design",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
      link: "order now",
    },
    {
      title: "Game Design",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
      link: "order now",
    },
    {
      title: "Game Design",
      disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
      link: "order now",
    },
  ];

  return (
    <div className="my-20 lg:px-5">
      <SectionHeader>My Services</SectionHeader>
      <div className="flex flex-wrap justify-between gap-4 lg:flex-row lg:py-9">
        {services.map((item) => {
          return (
            <div className="min-w-[300px] flex-1 px-4">
              <div className="my-4 overflow-hidden rounded-lg bg-box-gray p-8 ">
                <h5 className="mb-4 font-semibold text-white">{item.title}</h5>
                <p className="mb-4 text-sm font-normal text-gray-500">
                  {item.disc}
                </p>
                <a href={item.link} className="group ms-2">
                  <p className="inline-block text-sm capitalize text-yellow-400 ">
                    order now
                  </p>
                  <AiOutlineArrowRight className="ms-1 inline-block text-yellow-400 duration-500 group-hover:ms-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
