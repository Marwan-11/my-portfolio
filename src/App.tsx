import Services from "./components/Services";
import Recommendations from "./components/Recommendations";
import InfoSidebar from "./components/InfoSidebar";
import LinksSidebar from "./components/LinksSidebar";
import MainView from "./components/MainView";
import Works from "./components/Works";
import History from "./components/History";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";

function App() {
  const [isInfoBarOpen, setInfoBarIsOpen] = useState(false);
  const [isSideBarOpen, setSideBarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarIsOpen(!isSideBarOpen);
  };

  const toggleInfobar = () => {
    setInfoBarIsOpen(!isInfoBarOpen);
  };

  return (
    <>
      <div className=" flex h-full ">
        <div
          className={` border-muted-foreground no-scrollbar bg-card-foreground fixed left-0 top-0 z-50 h-full overflow-y-scroll rounded-lg border-x ${
            isInfoBarOpen ? "w-72" : "w-0 lg:w-72"
          }`}
        >
          <InfoSidebar isInfoBarOpen={isInfoBarOpen} />
        </div>
        <div className=" ml-1 mr-1 w-full flex-1 overflow-hidden lg:ml-72 lg:mr-20">
          <div className="bg-accent-foreground  z-30 mb-2 flex h-20 w-full rounded-t-lg ">
            <button
              onClick={toggleSidebar}
              className={`fixed top-11 z-50 ms-auto lg:top-8 ${
                isSideBarOpen ? "right-48" : "right-8"
              }`}
            >
              {isSideBarOpen ? (
                <AiOutlineClose className="text-muted-foreground hover:text-muted text-2xl" />
              ) : (
                <VscThreeBars className="text-muted-foreground hover:text-muted text-2xl " />
              )}
            </button>
            <button
              onClick={toggleInfobar}
              className={`fixed top-11 z-50 ms-auto lg:top-8 lg:hidden ${
                isInfoBarOpen ? "left-60" : "left-8"
              }`}
            >
              {isInfoBarOpen ? (
                <AiOutlineClose className="text-muted-foreground hover:text-muted text-2xl " />
              ) : (
                <BsThreeDotsVertical className="text-muted-foreground hover:text-muted text-2xl " />
              )}
            </button>
          </div>

          <MainView />
          {/* Hero */}
          <Services />
          <Recommendations />
          <Works />
          {/* Projects */}
          <History />
          {/* Experience */}
          {/* <Contact /> */}
          {/* ContactInfo */}
          <Connect />
          {/* ContactMe */}
          <Footer />
        </div>
        <div
          className={`bg-box-gray fixed right-0 top-0 h-full ${
            isSideBarOpen ? "w-60" : "w-0 lg:w-20"
          }`}
        >
          <LinksSidebar
            toggleSidebar={toggleSidebar}
            isSideBarOpen={isSideBarOpen}
          />
          {/* NavigationSideBar */}
        </div>
      </div>
    </>
  );
}

export default App;
