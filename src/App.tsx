import Services from './components/Services';
import Recommendations from './components/Recommendations';
import InfoSidebar from './components/InfoSidebar';
import LinksSidebar from './components/LinksSidebar';
function App() {
  return (
    <div className=" h-full ">
      <div className=" bg-box-gray fixed  h-full w-60 top-0 left-0 p-5 overflow-y-scroll">
        <InfoSidebar />
      </div>
      <div className=" pl-60 pr-60 p-5">
        <Services />
        <Recommendations />
      </div>
      <div className=" bg-teal-900 fixed h-full w-60 top-0 right-0 p-5 ">
        <LinksSidebar />
      </div>
    </div>
  );
}

export default App;
