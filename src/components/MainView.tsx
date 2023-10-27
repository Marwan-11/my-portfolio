const MainView = () => {
  return (
    <div
      style={{ backgroundImage: 'url(../../images/bg.jpg)' }}
      className=" p-[60px] mx-[15px] h-[30rem] bg-cover bg-no-repeat bg-center "
    >
      <div className=" pt-[30px] text-left  h-full  backdrop-blur-sm backdrop-grayscale-[40%] lg:text-center">
        <h1 className=" text-4xl text-white mb-[15px] font-extrabold">
          Discover my Amazing Art Space!
        </h1>
        <p className=" mb-[25px] text-3xl text-yellow-400">
          i am here where are you ?
        </p>
        <button className=" text-xs text-black bg-yellow-400 px-[35px] h-[45px]">
          EXPLORE NOW
        </button>
      </div>
    </div>
  );
};
export default MainView;
