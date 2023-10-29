import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUp } from 'react-icons/bs';

const Works = () => {
  const Projects = [
    {
      name: 'Todo React',
      img: 'https://raw.githubusercontent.com/Marwan-11/to-do-react/main/reactToDo.png',
      links: {
        github: 'https://github.com/Marwan-11/to-do-react',
        live: 'https://to-do-react-8d6ozk1ew-marwan-yahias-projects.vercel.app/',
      },
    },
    {
      name: 'Todo JS',
      img: 'https://raw.githubusercontent.com/Marwan-11/js-toDoList/main/todo.png',
      links: {
        github: 'https://github.com/Marwan-11/js-toDoList',
        live: 'https://marwan-11.github.io/js-toDoList/',
      },
    },
    {
      name: 'Marwan',
      img: 'https://raw.githubusercontent.com/Marwan-11/html-css-template-3/main/marwan.png',
      links: {
        github: 'https://github.com/Marwan-11/html-css-template-3',
        live: 'https://marwan-11.github.io/html-css-template-3/',
      },
    },
    {
      name: 'Kasper',
      img: 'https://raw.githubusercontent.com/Marwan-11/html-css-template-2/main/kasper.png',
      links: {
        github: 'https://github.com/Marwan-11/html-css-template-2',
        live: 'https://marwan-11.github.io/html-css-template-2/',
      },
    },
    {
      name: 'Leon',
      img: 'https://raw.githubusercontent.com/Marwan-11/html-css-template-1/main/leon.png',
      links: {
        github: 'https://github.com/Marwan-11/html-css-template-1',
        live: 'https://marwan-11.github.io/html-css-template-1/',
      },
    },
  ];

  return (
    <div className=" mt-10 px-[20px] ">
      <h4 className=" mb-[20px] font-bold text-white text-[17px]">WORKS</h4>
      <div className=" flex gap-7  justify-between flex-wrap py-9 mx-[20px]">
        {Projects.map((item) => {
          return (
            <div className="overflow-hidden relative group">
              <img
                src={`${item.img}`}
                alt="Project photo"
                className=" w-[270px] border-none duration-500 group-hover:scale-[1.1]"
              />
              <div className=" h-[50%] w-full absolute left-0 bottom-[-100%]  bg-box-gray px-3 py-2  group-hover:bottom-[0] duration-500">
                <h5 className=" font-semibold text-[13px] text-white mb-4">
                  {item.name}
                </h5>
                <div className=" flex flex-row justify-around">
                  <a href={`${item.links.live}`} target="blank">
                    <BsBoxArrowUp className=" mx-auto text-2xl text-gray-400 hover:text-cyan-500 " />
                  </a>
                  <a href={`${item.links.github}`} target="blank">
                    <AiFillGithub className=" mx-auto text-2xl text-gray-400 hover:text-cyan-500 " />
                  </a>
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
