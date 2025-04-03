"use client";

import { axiosInstance } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Badge, Dot } from "lucide-react";
import { Star } from "lucide-react";
import { OneMovieDetailCredit } from "../elements/OneMovieDetailCredit";

type MovieDataType = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  genres: string;
  overview: string;
};

export const OneMovieDetailPage = () => {
  const { movieId } = useParams();
  const [oneMovieDetaildata, setOneMovieDetaildata] = useState<MovieDataType>({
    adult: false,
    backdrop_path: "",
    original_title: "",
    poster_path: "",
    release_date: "",
    runtime: 0,
    vote_average: 0,
    vote_count: 0,
    genres: "",
    overview: "",
  });

  const fetchData = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${movieId}?language=en-US`
    );
    setOneMovieDetaildata(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen h-fit">
      <div className="w-full h-fit flex gap-6 flex-col">
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-4xl">
              {oneMovieDetaildata.original_title}
            </p>
            <p className="font-normal text-[18px] flex">
              {oneMovieDetaildata.release_date}
              <Dot />
              PG
              <Dot />
              {Math.floor(oneMovieDetaildata.runtime / 1000)}
            </p>
          </div>
          <div className="flex-col">
            <p>Rating</p>
            <Star className="size-5 fill-amber-400" />
            <p>{oneMovieDetaildata.vote_average}/10</p>
            <p className="w-[22px] text-xs"></p>
          </div>
        </div>
        <div className="w-full flex justify-between space-x-8 h-[428px]">
          <img
            className="rounded-lg w-[290px]  h-[428px]"
            src={`https://image.tmdb.org/t/p/original${oneMovieDetaildata.poster_path}`}
          ></img>

          <img
            className="rounded-lg w-full  h-[428px]"
            src={`https://image.tmdb.org/t/p/original${oneMovieDetaildata?.backdrop_path}`}
          ></img>
        </div>
        <div>
          <div className="w-[90px] h-[20px]">
            <p></p>
          </div>
          <p>{oneMovieDetaildata.overview}</p>
        </div>
      </div>
      <OneMovieDetailCredit></OneMovieDetailCredit>
    </div>
  );
};
