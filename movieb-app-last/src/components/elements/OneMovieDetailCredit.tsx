"use client";

import { axiosInstance } from "@/lib/utils";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { CastingTeamMemberCard } from "./CastingTeamMemberCard";

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

export const OneMovieDetailCredit = () => {
  const { movieId } = useParams();

  const [oneMovieDetaiCreditData, setOneMovieDetailCreditData] = useState({
    cast: [],
    crew: [],
  });

  const fetchOneMovieDetailCreditData = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${movieId}/credits?language=en-US`
    );
    setOneMovieDetailCreditData(data);
  };
  console.log(oneMovieDetaiCreditData);

  useEffect(() => {
    fetchOneMovieDetailCreditData();
  }, []);

  const test = oneMovieDetaiCreditData?.crew?.filter((crew) => {
    return crew.known_for_department.includes("Directing");
  });

  return (
    <div className="w-screen h-fit">
      <div>
        <p className="font-bold text-4xl">Casting Team Members</p>
        {/* {test.map((element, index) => {
          return <p key={index}> {element.name}</p>;
        })} */}
        <CastingTeamMemberCard />
      </div>
    </div>
  );
};
