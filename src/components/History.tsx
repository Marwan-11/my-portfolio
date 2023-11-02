import { AiOutlineArrowRight } from "react-icons/ai";
import SectionHeader from "./ui/SectionHeader";
import Hestory from "./Hestroy";

const History = () => {
  const education = [
    {
      title: "Web Development",
      disc: "well done",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore corporis exercitationem culpa. Laboriosam, a!",
      date: "jan 2023-feb 2023",
      link: "order now",
    },
    {
      title: "UI/UX Design",
      disc: "well done",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore corporis exercitationem culpa. Laboriosam, a!",

      date: "jan 2023-feb 2023",
      link: "order now",
    },
    {
      title: "Sound Design",
      disc: "well done",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore corporis exercitationem culpa. Laboriosam, a!",

      date: "jan 2023-feb 2023",
      link: "order now",
    },
    {
      title: "Game Design",
      disc: "well done",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore corporis exercitationem culpa. Laboriosam, a!",

      date: "jan 2023-feb 2023",
      link: "order now",
    },
  ];
  const work = [
    {
      title: "Web Development",
      disc: "well done",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore corporis exercitationem culpa. Laboriosam, a!",

      date: "jan 2023-feb 2023",
      link: "order now",
    },
    {
      title: "UI/UX Design",
      disc: "well done",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore corporis exercitationem culpa. Laboriosam, a!",

      date: "jan 2023-feb 2023",
      link: "order now",
    },
    {
      title: "Sound Design",
      disc: "well done",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore corporis exercitationem culpa. Laboriosam, a!",

      date: "jan 2023-feb 2023",
      link: "order now",
    },
    {
      title: "Game Design",
      disc: "well done",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore corporis exercitationem culpa. Laboriosam, a!",

      date: "jan 2023-feb 2023",
      link: "order now",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      <Hestory data={education} name="education" />
      <Hestory data={work} name="work" />
    </div>
  );
};
export default History;
