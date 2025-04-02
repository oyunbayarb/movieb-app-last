import {
  PopularMovie,
  UpcomingMovie,
  NowPlayingMovie,
  TopratedMovie,
} from "@/components/mainPages";
import { NowPlayingMovieSlidePage } from "@/components/mainPages/NowPlayingMovieSlidePage";
import { TestPage } from "@/components/mainPages/Test";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-fit gap-13 p-20">
      <TestPage />
      {/* <NowPlayingMovieSlidePage /> */}
      <UpcomingMovie />
      <PopularMovie />
      <TopratedMovie />
      <NowPlayingMovie />
    </div>
  );
}
