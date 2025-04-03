"use client";

import { axiosInstance } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type castDataType = {
  name: string;
  profile_path: string;
  character: string;
};

export const CastingTeamMemberCard = () => {
  const { movieId } = useParams();
  const [castingMemberDetailData, setCastingMemberDetailData] = useState({
    cast: [],
  });

  const fetchData = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${movieId}/credits?language=en-US`
    );
    setCastingMemberDetailData(data);
  };
  console.log(castingMemberDetailData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[200px] bg-[#F4F4F5] rounded-lg">
      {castingMemberDetailData.cast.map((element, index) => {
        return (
          <div>
            <img
              key={index}
              className="rounded-lg w-[50px] h-[50px]"
              alt="CastingMemberImage"
              src={`https://image.tmdb.org/t/p/original/${element.profile_path}`}
            />
            <p></p>
          </div>
        );
      })}
    </div>
  );
};
