import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUp } from "react-icons/bs";
import SectionHeader from "./ui/SectionHeader";
import { ProjectsData } from "@/lib/const";

const Projects = () => {
  return (
    <div id="Projects" className="lg:px-4 ">
      <SectionHeader>Projects</SectionHeader>
      <div className=" mx-1 flex flex-wrap justify-between gap-7 py-9 lg:mx-5">
        {ProjectsData.map((item) => {
          return (
            <div className="group min-w-[325px] flex-1  lg:relative lg:overflow-hidden">
              <div className="h-72 overflow-hidden">
                <img
                  src={`${item.img}`}
                  alt="Project photo"
                  className="h-full w-full  border-none object-cover duration-500 group-hover:scale-[1.1] "
                />
              </div>
              <div className=" left-0 h-32 w-full  bg-card-foreground px-3 py-2 duration-500 lg:absolute lg:bottom-[-100%] lg:flex  lg:group-hover:bottom-[0]">
                <div className="m-auto text-center">
                  <div className=" mb-2 flex flex-row items-center justify-center">
                    <a title="Live" href={`${item.links.live}`} target="blank">
                      <BsBoxArrowUp className=" mx-4 text-xl text-muted-foreground hover:text-primary" />
                    </a>
                    <h5 className="text-lg font-semibold text-primary">
                      {item.name}
                    </h5>
                    <a
                      title="Github"
                      href={`${item.links.github}`}
                      target="blank"
                    >
                      <AiFillGithub className=" mx-4 text-xl text-muted-foreground hover:text-primary" />
                    </a>
                  </div>
                  <p className=" mb-2 text-left text-sm font-normal text-muted lg:text-center">
                    {item.disc.slice(0, 75)}...
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
