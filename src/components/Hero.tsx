import Typewriter from "typewriter-effect";
import { scrollToSection } from "../components/global/NavigationSideBar";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url(../../images/code.jpg)" }}
      className="h-[30rem] rounded-lg bg-cover bg-center bg-no-repeat lg:mx-9"
      id="home"
    >
      <div className=" flex h-full p-16 text-center backdrop-blur-sm backdrop-grayscale-[40%]">
        <div className=" m-auto">
          <h1 className=" mb-4 text-5xl font-extrabold capitalize text-white ">
            discover my Amazing art space!
          </h1>
          <p className=" mb-6 text-white lg:text-3xl">
            {`<`}
            <span className=" text-primary">code</span>
            {`>`}Hello I&apos;m{" "}
            <Typewriter
              options={{
                strings: ["A Developer.", "A Designer.", "A Tech Enthusiast."],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
            {`</`}
            <span className=" text-primary">code</span>
            {`>`}
          </p>

          <button
            onClick={() => scrollToSection("Projects")}
            className="rounded-lg bg-primary px-8 py-4 text-xs font-bold text-muted hover:text-foreground"
          >
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
