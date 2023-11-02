import Services from "./components/Services";
import Recommendations from "./components/Recommendations";
import InfoSidebar from "./components/InfoSidebar";
import LinksSidebar from "./components/LinksSidebar";
import MainView from "./components/MainView";
import Works from "./components/Works";
import History from "./components/History";
import Contact from "./components/Contact";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" flex h-full ">
        <div className="  no-scrollbar  left-0 top-0 hidden h-full w-[290px] overflow-y-scroll bg-box-gray lg:visible lg:fixed lg:block">
          <InfoSidebar />
        </div>
        <div className=" ml-1 mr-1 w-full flex-1 overflow-hidden lg:ml-[290px] lg:mr-[80px]">
          <div className="mb-2 flex h-20 w-full bg-red-200">
            <button onClick={toggleSidebar} className={"ms-auto"}>
              {!isOpen && (
                <VscThreeBars className="text-2xl text-icon-gray hover:text-white" />
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
          className={`fixed right-0 top-0 h-full bg-box-gray ${
            isOpen ? "w-[320px]" : "w-[80px]"
          }`}
        >
          <LinksSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
          {/* NavigationSideBar */}
        </div>
      </div>
    </>
  );
}

export default App;
