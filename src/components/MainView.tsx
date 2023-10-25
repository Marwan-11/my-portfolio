const MainView = () => {
  return (
    <div
      style={{ backgroundImage: 'url(../../images/bg.jpg)' }}
      className=" h-[30rem] my-20 mx-auto bg-cover bg-no-repeat bg-center "
    >
      <div className=" h-full w-full backdrop-blur-sm backdrop-grayscale-[40%]">
        <div className=" absolute top-20">
          <h1 className=" text-6xl text-white m-11">
            Discover my Amazing Art Space!
          </h1>
        </div>
        <div className="">
          <button className=" text-3xl text-black bg-yellow-400 m-11 p-5 rounded-lg">
            EXPLORE NOW
          </button>
        </div>
      </div>
      {/* <img src="../../images/bg.jpg" alt="" className="" /> */}
    </div>
  );
};
export default MainView;
