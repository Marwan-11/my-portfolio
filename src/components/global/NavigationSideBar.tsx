import { useSidebars } from "@/context/useSidebars";
import { ModeToggle } from "./mode-toggle";
import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";

const NavigationSideBar = () => {
  const { isSideBarOpen, toggleSidebar } = useSidebars();

  return (
    <aside className="flex h-full flex-col justify-start bg-card-foreground">
      <button
        onClick={toggleSidebar}
        className={`fixed top-7 z-[500] ms-auto lg:top-8 ${
          isSideBarOpen ? "right-48" : "right-8"
        }`}
      >
        {isSideBarOpen ? (
          <AiOutlineClose className="text-2xl text-muted-foreground hover:text-muted" />
        ) : (
          <VscThreeBars className="text-2xl text-muted-foreground hover:text-muted " />
        )}
      </button>
      {isSideBarOpen && (
        <div>
          <nav className=" flex h-full flex-col bg-card-foreground shadow-sm ">
            <div className=" bg-box-gray duration-700">
              <div className=" mt-24">
                <ul className="">
                  <li className=" px-7  py-2 text-sm text-muted-foreground hover:text-background">
                    <a href="#home">Home</a>
                  </li>
                  <li className="px-7  py-2 text-sm text-muted-foreground hover:text-background">
                    <a href="#services">Services</a>
                  </li>
                  <li className=" px-7  py-2 text-sm text-muted-foreground hover:text-background">
                    <a href="#Projects">Projects</a>
                  </li>
                  <li className="px-7  py-2 text-sm text-muted-foreground hover:text-background">
                    <a href="#education">Education</a>
                  </li>
                  <li className="px-7  py-2 text-sm text-muted-foreground hover:text-background">
                    <a href="#work">Work</a>
                  </li>
                  <li className="px-7 py-2 text-sm text-muted-foreground hover:text-background">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <hr className=" border-1  mx-7 mt-4 border-muted opacity-30" />
              <div className="flex items-center justify-evenly py-4">
                <ModeToggle />
              </div>
            </div>
          </nav>
        </div>
      )}
    </aside>
  );
};
export default NavigationSideBar;
