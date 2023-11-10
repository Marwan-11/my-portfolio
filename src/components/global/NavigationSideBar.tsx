import { ModeToggle } from "./mode-toggle";

interface NavigationSideBarProps {
  isSideBarOpen: boolean;
}

const NavigationSideBar = ({ isSideBarOpen }: NavigationSideBarProps) => {
  return (
    <aside className="flex h-full flex-col justify-start bg-card-foreground">
      {isSideBarOpen && (
        <div>
          <nav className=" flex h-full flex-col bg-card-foreground shadow-sm ">
            <div className=" bg-box-gray duration-700">
              <div className=" mt-[100px]">
                <ul className="">
                  <li className=" px-[30px]  py-[7px] text-[13px] text-muted-foreground hover:text-background">
                    <a href="#home">Home</a>
                  </li>
                  <li className="px-[30px]  py-[7px] text-[13px] text-muted-foreground hover:text-background">
                    <a href="#services">Services</a>
                  </li>
                  <li className=" px-[30px]  py-[7px] text-[13px] text-muted-foreground hover:text-background">
                    <a href="#Projects">Projects</a>
                  </li>
                  <li className=" px-[30px]  py-[7px] text-[13px] text-muted-foreground hover:text-background">
                    <a href="#education">Education</a>
                  </li>
                  <li className="px-[30px]  py-[7px] text-[13px] text-muted-foreground hover:text-background">
                    <a href="#work">Work</a>
                  </li>
                  <li className="px-[30px]  py-[7px] text-[13px] text-muted-foreground hover:text-background">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <hr className=" border-1  mx-[30px] mt-4 border-muted opacity-30" />
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
