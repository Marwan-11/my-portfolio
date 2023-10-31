import Services from './components/Services';
import Recommendations from './components/Recommendations';
import InfoSidebar from './components/InfoSidebar';
import LinksSidebar from './components/LinksSidebar';
import MainView from './components/MainView';
import Works from './components/Works';
import History from './components/History';
import Contact from './components/Contact';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" h-full flex ">
      <div className="  bg-box-gray  h-full w-[290px] top-0 left-0 overflow-y-scroll no-scrollbar hidden lg:block lg:fixed lg:visible">
        <InfoSidebar />
      </div>
      <div className=" flex-1 ml-1 mr-1 overflow-hidden w-full lg:ml-[290px] lg:mr-[80px]">
        <MainView />
        <Services />
        <Recommendations />
        <Works />
        <History />
        <Contact />
        <Connect />
        <Footer />
      </div>
      <div className="h-full top-0 right-0 bg-box-gray w-[80px] hidden lg:block lg:fixed ">
        <LinksSidebar />
      </div>
    </div>
  );
}

export default App;
