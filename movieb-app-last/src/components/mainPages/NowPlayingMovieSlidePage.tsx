// "use client";

// import { axiosInstance } from "@/lib/utils";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Ellipsis } from "lucide-react";

// type MovieDataType = {
//   // adult: boolean;
//   backdrop_path: string;
//   // original_title: string;
//   // poster_path: string;
//   // release_date: string;
// };
// export const NowPlayingMovieSlidePage = () => {
//   const { movieId } = useParams();
//   const [nowPlayingSlideData, setNowPlayingSlideData] = useState({});

//   useState<MovieDataType>({
//     // adult: false,
//     backdrop_path: "",
//     // original_title: "",
//     // poster_path: "",
//     // release_date: "",
//   });

//   const fetchData = async () => {
//     const { data } = await axiosInstance.get(
//       `/movie/${movieId}?language=en-US`
//     );
//     setNowPlayingSlideData(data.results);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const firstFiveMovies=nowPlayingSlideData.slice(0,5)

//   return (
//     <div>
//       <Carousel className="w-screen h-[600px]">
//         <CarouselContent className="w-screen h-[600px]">
//           {firstFiveMovies.map(el, index() => {
//             return (
//               <CarouselItem>
//                 <img
//                   src={`https://image.tmdb.org/t/p/original${nowPlayingSlideData.poster_path}`}
//                 ></img>
//               </CarouselItem>
//             );
//           })}
//           <Ellipsis className="absolute" />;
//         </CarouselContent>
//         <CarouselPrevious className="flex absolute left-10 size-10" />
//         <CarouselNext className="flex absolute right-10 size-10" />
//       </Carousel>
//     </div>
//   );
// };
