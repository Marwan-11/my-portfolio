import TypeAnimation from "react-typing-sequence";

const textSequence = [
  {
    text: [
      {
        content: "A developer",
        tag: "span",
        yoyo: true,
      },
      {
        content: "a desinger",
        tag: "span",
        yoyo: true,
      },
      {
        content: "tech enthusiast",
        tag: "span",
        yoyo: true,
      },
    ],
    repeat: 10000,
    repeatDelay: 1000,
  },
];
const MainView = () => {
  return (
    <div
      style={{ backgroundImage: "url(../../images/bg.jpg)" }}
      className=" h-[30rem] rounded-lg bg-cover bg-center bg-no-repeat lg:mx-4"
    >
      <div className=" flex h-full p-16 text-center backdrop-blur-sm backdrop-grayscale-[40%]">
        <div className=" m-auto">
          <h1 className=" mb-4 text-5xl font-extrabold capitalize text-white">
            discover my Amazing art space!
          </h1>
          <p className="mb-6 text-yellow-400 lg:text-3xl">
            {`<code> `}
            Hello I&apos;m <TypeAnimation text={textSequence} />
            {` </code>`}
          </p>
          <button className="rounded-sm bg-yellow-400 px-8 py-4 text-xs text-black">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainView;
