"use client";

import { axiosInstance } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { OneMovieCard } from "./JustOneMovieCard";
import { ArrowRight } from "lucide-react";

type similarDataType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const OneMovieSimilarMovies = () => {
  const { movieId } = useParams();

  const [oneMovieSimilarMoviesData, setOneMovieSimilarMoviesData] = useState<
    similarDataType[]
  >([]);

  const fetchoneMovieSimilarMoviesData = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${movieId}/similar?language=en-US`
    );
    setOneMovieSimilarMoviesData(data.results);
  };

  useEffect(() => {
    fetchoneMovieSimilarMoviesData();
  }, []);

  const imageRenderer = (imgPath: string) => {
    const baseURL = "https://image.tmdb.org/t/p/w300";
    return baseURL + imgPath;
  };

  return (
    <div className="w-full flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-semibold text-2xl">More like this</p>
        <button className="flex-row gap-2 flex">
          See more
          <ArrowRight />
        </button>
      </div>
      <div className="flex flex-wrap gap-8">
        {oneMovieSimilarMoviesData.slice(0, 10).map((Element, index) => {
          return (
            <OneMovieCard
              id={Element.id}
              imageSrc={imageRenderer(Element.poster_path)}
              movieTitle={Element.title}
              releaseDate={Element.release_date}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
