import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUp } from "react-icons/bs";
import SectionHeader from "./ui/SectionHeader";

const Works = () => {
  const Projects = [
    {
      name: "React To-Do List with Vite and Tailwind CSS",
      disc: "a modern and highly performant To-Do List application using React as the front-end library, Vite as the build tool, and Tailwind CSS for responsive and stylish UI components. This To-Do List app offers a seamless and visually appealing way for users to manage their tasks, and it showcases your skills in building web applications with cutting-edge technologies.",
      img: "https://raw.githubusercontent.com/Marwan-11/to-do-react/main/reactToDo.png",
      links: {
        github: "https://github.com/Marwan-11/to-do-react",
        live: "https://to-do-react-8d6ozk1ew-marwan-yahias-projects.vercel.app/",
      },
    },
    {
      name: "Todo JS",
      disc: "A simple and interactive To-Do List application using only plain (vanilla) JavaScript, HTML, and CSS. The To-Do List app will allow users to create, manage, and organize their tasks, providing a practical example of my front-end web development skills.",
      img: "https://raw.githubusercontent.com/Marwan-11/js-toDoList/main/todo.png",
      links: {
        github: "https://github.com/Marwan-11/js-toDoList",
        live: "https://marwan-11.github.io/js-toDoList/",
      },
    },
    {
      name: "Marwan",
      disc: "A personal landing page from scratch, showcasing my web design and development skills. This landing page will serve as an online introduction, or digital business card. It's an opportunity to express my creativity and design sensibilities",
      img: "https://raw.githubusercontent.com/Marwan-11/html-css-template-3/main/marwan.png",
      links: {
        github: "https://github.com/Marwan-11/html-css-template-3",
        live: "https://marwan-11.github.io/html-css-template-3/",
      },
    },
    {
      name: "Kasper",
      disc: 'This project involves customizing and building a website based on the "Kasper Template." The "Kasper Template" serves as the foundation for creating a unique and personalized website. The task is to adapt the template to meet specific design and content requirements, showcasing your web design and development skills.',
      img: "https://raw.githubusercontent.com/Marwan-11/html-css-template-2/main/kasper.png",
      links: {
        github: "https://github.com/Marwan-11/html-css-template-2",
        live: "https://marwan-11.github.io/html-css-template-2/",
      },
    },
    {
      name: "Leon",
      disc: "Leon is a stunning and informative website using HTML and CSS. This project is an opportunity to showcase HTML and CSS skills while demonstrating proficiency in web development.",
      img: "https://raw.githubusercontent.com/Marwan-11/html-css-template-1/main/leon.png",
      links: {
        github: "https://github.com/Marwan-11/html-css-template-1",
        live: "https://marwan-11.github.io/html-css-template-1/",
      },
    },
  ];

  return (
    <div className="  mt-10 lg:px-[20px] ">
      <SectionHeader>Works</SectionHeader>
      <div className=" flex flex-wrap justify-between gap-7 py-9 lg:mx-[20px]">
        {Projects.map((item) => {
          return (
            <div className="group min-w-[325px] flex-1 rounded-lg lg:relative lg:overflow-hidden">
              <div className="h-72">
                <img
                  src={`${item.img}`}
                  alt="Project photo"
                  className="h-full w-full rounded-t-lg border-none object-cover duration-500 lg:rounded-lg"
                />
              </div>
              <div className=" left-0 h-32 w-full rounded-b-lg  bg-slate-950 px-3 py-2 duration-500 lg:absolute lg:bottom-[-100%] lg:flex lg:rounded-lg lg:group-hover:bottom-[0]">
                <div className="m-auto text-center">
                  <div className=" mb-2 flex flex-row items-center justify-center">
                    <a href={`${item.links.live}`} target="blank">
                      <BsBoxArrowUp className=" mx-4 text-xl text-gray-400 hover:text-cyan-500" />
                    </a>
                    <h5 className="text-lg font-semibold text-white">
                      {item.name}
                    </h5>
                    <a href={`${item.links.github}`} target="blank">
                      <AiFillGithub className=" mx-4 text-xl text-gray-400 hover:text-cyan-500" />
                    </a>
                  </div>
                  <p className=" mb-2 text-left text-sm font-normal text-icon-gray lg:text-center">
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
export default Works;
