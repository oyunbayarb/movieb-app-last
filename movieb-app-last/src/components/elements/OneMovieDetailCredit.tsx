"use client";

import { axiosInstance } from "@/lib/utils";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
type crewDataType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null;
  credit_id: string;
  department: string;
  job: string;
};

type castDataType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

type CreditsDataType = {
  crew: crewDataType[];
  cast: castDataType[];
};

export const OneMovieDetailCredit = () => {
  const { movieId } = useParams();

  const [oneMovieDetaiCreditData, setOneMovieDetailCreditData] =
    useState<CreditsDataType>({
      cast: [],
      crew: [],
    });

  const fetchOneMovieDetailCreditData = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${movieId}/credits?language=en-US`
    );
    setOneMovieDetailCreditData(data);
  };

  useEffect(() => {
    fetchOneMovieDetailCreditData();
  }, []);

  const test = oneMovieDetaiCreditData?.crew?.filter(
    (crew) => crew.job === "Director"
  );
  const test1 = oneMovieDetaiCreditData?.crew?.filter(
    (element) => element.known_for_department === "Writing"
  );
  const test2 = oneMovieDetaiCreditData?.cast?.filter(
    (element) => element.known_for_department === "Acting"
  );

  return (
    <div className="flex gap-5 flex-col">
      <div className="w-screen rounded-lg h-fit">
        {test.map((element, index) => {
          return (
            <div
              key={index}
              className="w-fit h-fit flex-row flex gap-2 items-center"
            >
              <p className="font-bold text-[20px]">{element.job}</p>
              <p className="font-normal text-[16px]">{element.name}</p>
            </div>
          );
        })}
      </div>
      <div className="w-screen rounded-lg h-fit">
        <div className="w-fit h-[28px] flex-row flex gap-2 items-center">
          <p className="font-bold">Writing</p>
          {test1?.map((el, i) => {
            return (
              <span className="font-normal" key={i}>
                {el.name},
              </span>
            );
          })}
        </div>
      </div>
      <div className="w-screen rounded-lg h-fit">
        <div className="w-fit h-[28px] flex-row flex gap-2 items-center">
          <p className="font-bold text-[20px]">Stars</p>
          {test2?.slice(0, 5).map((el, i) => {
            return (
              <span className="font-normal" key={i}>
                {el.name},
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
