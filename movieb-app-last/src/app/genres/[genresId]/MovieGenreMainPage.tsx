("use client");

import { axiosInstance } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronRight } from "lucide-react";
import { OneMovieCard } from "@/components/elements";

type genreDataType = {
  id: number;
  name: string;
};

export const MoviesGenreMainPage = () => {
  const { genresId } = useParams();

  const [genreMoviesData, setGenreMoviesData] = useState<genreDataType[]>([]);

  const fetchgenreMoviesData = async () => {
    const { data } = await axiosInstance.get(
      `/genre/movie/list?language=en-US`
    );
    setGenreMoviesData(data.genres);
  };

  useEffect(() => {
    fetchgenreMoviesData();
  }, []);

  return (
    <div>
      <p className="font-semibold text-[30px]">Search filter</p>
      <div>
        <div>
          <Popover>
            <PopoverTrigger>Genre</PopoverTrigger>
            <PopoverContent className="w-[530px] h-[333px]">
              <p className="font-semibold text-2xl">Genres</p>
              <p className="font-medium text-[16px] mb-5">
                See lists of movies by genre
              </p>
              <div className="flex-wrap flex gap-[5px]">
                {genreMoviesData.map((element, index) => {
                  return (
                    <button
                      key={index}
                      className="min-w-[115px] flex justify-evenly p-[2px] border-2 border-[#E4E4E7] rounded-full"
                    >
                      {element.name}
                      <ChevronRight />
                    </button>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        {/* <div className="flex flex-wrap gap-8">
          {genreMoviesData.map((Element, index) => {
            return (
                <OneMovieCard/>
                movieTitle={Element.title}
                releaseDate={Element.release_date}
                key={index}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
};
