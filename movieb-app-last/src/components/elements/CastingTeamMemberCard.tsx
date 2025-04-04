// "use client";

// import { axiosInstance } from "@/lib/utils";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// type castDataType = {
//   name: string;
//   profile_path: string;
//   character: string;
// };

// export const CastingTeamMemberCard = () => {
//   const { movieId } = useParams();
//   const [castingMemberDetailData, setCastingMemberDetailData] = useState({
//     cast: [],
//   });

//   const fetchData = async () => {
//     const { data } = await axiosInstance.get(
//       `/movie/${movieId}/credits?language=en-US`
//     );
//     setCastingMemberDetailData(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="w-screen bg-[#F4F4F5] rounded-lg h-fit">
//       {castingMemberDetailData.cast.map((element, index) => {
//         return (
//           <div className="w-full h-full flex-wrap">
//             <p>{element.name}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
