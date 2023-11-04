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
    repeatDelay: 10,
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
          <h1 className=" text-background mb-4 text-5xl font-extrabold capitalize">
            discover my Amazing art space!
          </h1>
          <p className=" text-background mb-6 lg:text-3xl">
            {`<`}
            <span className=" text-primary">code</span>
            {`>`}
            Hello I&apos;m <TypeAnimation text={textSequence} />
            {` <`}
            <span className=" text-primary">code</span>
            {`/>`}
          </p>
          <button className="bg-primary hover:text-foreground text-muted rounded-lg px-8 py-4 text-xs font-bold">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainView;
