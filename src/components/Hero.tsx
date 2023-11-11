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
        content: "A designer",
        tag: "span",
        yoyo: true,
      },
      {
        content: "Tech enthusiast",
        tag: "span",
        yoyo: true,
      },
    ],
    repeat: 10000,
    repeatDelay: 1,
  },
];
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url(../../images/code.jpg)" }}
      className=" h-[30rem] rounded-lg bg-cover bg-center bg-no-repeat lg:mx-4"
    >
      <div className=" flex h-full p-16 text-center backdrop-blur-sm backdrop-grayscale-[40%]">
        <div className=" m-auto">
          <h1 className=" mb-4 text-5xl font-extrabold capitalize text-white ">
            discover my Amazing art space!
          </h1>
          <p className=" mb-6 text-white lg:text-3xl">
            {`<`}
            <span className=" text-primary">code</span>
            {`>`}
            Hello I&apos;m <TypeAnimation text={textSequence} />
            {` <`}
            <span className=" text-primary">code</span>
            {`/>`}
          </p>
          <a href="#Projects">
            <button className="rounded-lg bg-primary px-8 py-4 text-xs font-bold text-muted hover:text-foreground">
              EXPLORE NOW
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
