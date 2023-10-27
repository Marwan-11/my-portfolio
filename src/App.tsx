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
      <div className="  bg-box-gray fixed  h-full w-[290px] top-0 left-0 overflow-y-scroll no-scrollbar">
        <InfoSidebar />
      </div>
      <div className=" flex-1 overflow-hidden ml-[290px] mr-[80px]">
        <MainView />
        <Services />
        <Recommendations />
        <Works />
        <History />
        <Contact />
        <Connect />
        <Footer />
      </div>
      <div className="fixed h-full top-0 right-0 bg-box-gray w-[80px] ">
        <LinksSidebar />
      </div>
    </div>
  );
}

export default App;
