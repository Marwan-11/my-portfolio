import { EducationData, WorkData } from "@/lib/const";
import History from "./Histroy";

const Experience = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <History data={EducationData} name="education" ids="education" />
      <History data={WorkData} name="work" ids="work" />
    </div>
  );
};
export default Experience;
