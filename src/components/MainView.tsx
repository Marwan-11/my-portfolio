const MainView = () => {
  return (
    <div className=" h-full my-20 mx-auto ">
      <div>
        <div className=" absolute top-20">
          <h1 className=" text-6xl text-white m-11">
            Discover my Amazing Art Space!
          </h1>
        </div>
        <div className=" absolute bottom-7">
          <button className=" text-3xl text-black bg-yellow-400 m-11 p-5 rounded-lg">
            EXPLORE NOW
          </button>
        </div>
      </div>
      <img src="../../images/bg.jpg" alt="" className="" />
    </div>
  );
};
export default MainView;
