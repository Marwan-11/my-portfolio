import { useState } from "react";
import {
  Hero,
  Footer,
  Experience,
  Projects,
  Services,
  InfoSidebar,
  NavigationSideBar,
  ContactForm,
  Header,
} from "./components";
import BackToTop from "./components/BackToTop";

function App() {
  const [isInfoBarOpen, setInfoBarIsOpen] = useState(false);
  const [isSideBarOpen, setSideBarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarIsOpen((o) => !o);
    setInfoBarIsOpen(false);
  };

  const toggleInfobar = () => {
    setInfoBarIsOpen((o) => !o);
    setSideBarIsOpen(false);
  };

  return (
    <div className=" flex h-full ">
      <div
        className={` no-scrollbar fixed left-0 top-0 z-50 h-full overflow-y-scroll  bg-card-foreground shadow-xl ${
          isInfoBarOpen ? "w-72" : "w-0 lg:w-72"
        }`}
      >
        <InfoSidebar isInfoBarOpen={isInfoBarOpen} />
      </div>
      <div className=" w-full flex-1 overflow-hidden lg:ml-72 lg:mr-20">
        <Header
          isInfoBarOpen={isInfoBarOpen}
          isSideBarOpen={isSideBarOpen}
          toggleSidebar={toggleSidebar}
          toggleInfobar={toggleInfobar}
        />
        <Hero />
        <Services />

        <Projects />
        <Experience />
        <ContactForm />
        <Footer />
      </div>
      <div
        className={`bg-box-gray fixed right-0 top-0 z-20 h-full ${
          isSideBarOpen ? "w-60" : "w-0 lg:w-20"
        }`}
      >
        <NavigationSideBar isSideBarOpen={isSideBarOpen} />
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
