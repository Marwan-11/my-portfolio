// import { AiFillStar } from "react-icons/ai";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import SectionHeader from "./ui/SectionHeader";
// import { RecommendationsData } from "@/lib/const";

// const Recommendations = () => {
//   return (
//     <div className="mt-10 lg:px-[20px]">
//       <SectionHeader classes="mb-20">Recommendations</SectionHeader>
//       <div className="">
//         {RecommendationsData.map((item) => {
//           return (
//             <div className="my-10 min-w-fit px-4">
//               <div className=" relative my-4 rounded-lg  border border-muted-foreground bg-card-foreground  px-8 py-8 ">
//                 <h5 className="mb-4 text-lg font-semibold capitalize text-background">
//                   {item.title}
//                 </h5>
//                 <img
//                   src={item.img}
//                   alt="img"
//                   className="absolute -top-9 right-7 w-16 rounded-full hover:border-muted"
//                 />
//                 <p className="mb-4 text-sm font-thin capitalize italic text-muted">
//                   {item.job}
//                 </p>
//                 <p className="mb-4 text-sm font-normal text-muted-foreground">
//                   {item.disc}
//                 </p>
//                 <p className="flex w-fit rounded-3xl border border-muted-foreground px-2 py-1 text-xl text-primary duration-300 hover:border-muted">
//                   <AiFillStar />
//                   <AiFillStar />
//                   <AiFillStar />
//                   <AiFillStar />
//                   <AiFillStar />
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="text-center">
//         <button title="arrow">
//           <IoIosArrowBack className=" mx-2  inline-block   text-2xl text-primary hover:text-primary-foreground" />
//         </button>
//         <button title="arrow">
//           <IoIosArrowForward className=" mx-2 inline-block text-2xl text-primary hover:text-primary-foreground" />
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Recommendations;
