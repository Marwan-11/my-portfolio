import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const BackToTop = () => {
  const [toTop, settoTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        settoTop(true);
      } else {
        settoTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {toTop && (
        <button
          title="back to top"
          onClick={scrollUp}
          className="fixed bottom-10 right-6 text-2xl text-primary hover:bottom-12 lg:right-20 "
        >
          <BsFillArrowUpCircleFill />
        </button>
      )}
    </div>
  );
};
export default BackToTop;
