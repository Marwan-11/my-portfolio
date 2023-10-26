const MainView = () => {
  return (
    <div
      style={{ backgroundImage: 'url(../../images/bg.jpg)' }}
      className=" h-[30rem] my-20 mx-auto bg-cover bg-no-repeat bg-center "
    >
      <div className=" h-full w-full backdrop-blur-sm backdrop-grayscale-[40%]">
        <div className=" py-7 text-center">
          <h1 className=" text-6xl text-white m-11 font-extrabold">
            Discover my Amazing Art Space!
          </h1>
        </div>
        <div className=" py-7 text-center">
          <p className=" text-3xl text-yellow-400">i am here where are you ?</p>
        </div>
        <div className=" py-7 text-left md:text-center">
          <button className=" text-3xl text-black bg-yellow-400 m-11 p-5">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainView;
