import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";

interface HeaderProps {
  isInfoBarOpen: boolean;
  isSideBarOpen: boolean;
  toggleSidebar: () => void;
  toggleInfobar: () => void;
}

const Header = ({
  isInfoBarOpen,
  isSideBarOpen,
  toggleSidebar,
  toggleInfobar,
}: HeaderProps) => {
  return (
    <div id="home" className=" z-30 mb-2 flex h-20 w-full bg-accent-foreground">
      <button
        onClick={toggleSidebar}
        className={`fixed top-7 z-50 ms-auto lg:top-8 ${
          isSideBarOpen ? "fixed right-48" : "absolute right-8"
        }`}
      >
        {isSideBarOpen ? (
          <AiOutlineClose className="text-2xl text-muted-foreground hover:text-muted" />
        ) : (
          <VscThreeBars className="text-2xl text-muted-foreground hover:text-muted " />
        )}
      </button>
      <button
        onClick={toggleInfobar}
        className={`fixed top-7 z-50 ms-auto lg:top-8 lg:hidden ${
          isInfoBarOpen ? "fixed left-60" : "absolute left-8"
        }`}
      >
        {isInfoBarOpen ? (
          <AiOutlineClose className="text-2xl text-muted-foreground hover:text-muted " />
        ) : (
          <BsThreeDotsVertical className="text-2xl text-muted-foreground hover:text-muted " />
        )}
      </button>
    </div>
  );
};

export default Header;
