import {
  Hero,
  Footer,
  Experience,
  Projects,
  Services,
  InfoSidebar,
  NavigationSideBar,
  ContactForm,
} from "./components";
import BackToTop from "./components/BackToTop";
import { useSidebars } from "./context/useSidebars";

function App() {
  const { isInfoBarOpen, isSideBarOpen } = useSidebars();
  return (
    <div className=" flex h-full ">
      <div
        className={` no-scrollbar fixed left-0 top-0 z-50 h-full overflow-y-scroll  bg-card-foreground shadow-xl ${
          isInfoBarOpen ? "w-72" : "w-0 lg:w-72"
        }`}
      >
        <InfoSidebar />
      </div>
      <div className=" w-full flex-1 overflow-hidden lg:ml-72 lg:mr-20">
        <div className=" fixed z-20 mb-2 flex h-20 w-full bg-accent-foreground" />
        <div className="mb-2 flex h-20 w-full" />
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <ContactForm />
        <Footer />
      </div>
      <div
        className={`bg-box-gray fixed right-0 top-0 z-20 h-full shadow-xl ${
          isSideBarOpen ? "w-60" : "w-0 lg:w-20"
        }`}
      >
        <NavigationSideBar />
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
