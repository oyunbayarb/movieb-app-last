import {
  PopularMovie,
  UpcomingMovie,
  NowPlayingMovie,
  TopratedMovie,
} from "@/components/mainPages";

export default function Home() {
  return (
    <div>
      <UpcomingMovie />
      <PopularMovie />
      <TopratedMovie />
      <NowPlayingMovie />
    </div>
  );
}
