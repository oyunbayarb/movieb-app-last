import { Footer, Header } from "../elements";
import {
  LoadingMovieCard,
  LoadingPageTitle,
  LoadingPlayingSection,
} from "./LoadingMovieSection";

export const LoadingHomePage = () => {
  return (
    <div>
      <Header />
      <LoadingPlayingSection />
      <div className="flex-col p-10 flex gap-8">
        <div className="flex-wrap flex gap-5">
          <LoadingPageTitle />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
        </div>
        <div className="flex-wrap flex gap-5">
          <LoadingPageTitle />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
        </div>
        <div className="flex-wrap flex gap-5">
          <LoadingPageTitle />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
          <LoadingMovieCard />
        </div>
      </div>

      <Footer />
    </div>
  );
};
