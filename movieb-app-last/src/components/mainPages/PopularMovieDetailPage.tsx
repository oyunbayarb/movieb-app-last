import { ArrowRight } from "lucide-react";
import { OneMovieCard } from "../elements";

export const PopularMovie = () => {
  const PopularMovieData = [
    {
      adult: false,
      backdrop_path: "/2n7lYEeIbucsEQCswRcVB6ZYmMP.jpg",
      genre_ids: [878, 12, 18],
      id: 777443,
      original_language: "en",
      original_title: "The Electric State",
      overview:
        "An orphaned teen hits the road with a mysterious robot to find her long-lost brother, teaming up with a smuggler and his wisecracking sidekick.",
      popularity: 27.757,
      poster_path: "/jRdxyW5ZmhD3ycStlb7gwOewTuE.jpg",
      release_date: "2025-03-07",
      title: "The Electric State",
      video: false,
      vote_average: 6.8,
      vote_count: 482,
    },
    {
      adult: false,
      backdrop_path: "/2siOHQYDG7gCQB6g69g2pTZiSia.jpg",
      genre_ids: [10751, 14],
      id: 447273,
      original_language: "en",
      original_title: "Snow White",
      overview:
        "A princess joins forces with seven dwarfs to liberate her kingdom from her cruel stepmother, the Evil Queen.",
      popularity: 24.058,
      poster_path: "/xWWg47tTfparvjK0WJNX4xL8lW2.jpg",
      release_date: "2025-03-19",
      title: "Snow White",
      video: false,
      vote_average: 3.3,
      vote_count: 40,
    },
    {
      adult: false,
      backdrop_path: "/m4FEubjmtytpMDchQfDmbJKHOG6.jpg",
      genre_ids: [99],
      id: 1437446,
      original_language: "en",
      original_title: "The Twister: Caught in the Storm",
      overview:
        "In May 2011, a massive tornado ripped through Joplin, Missouri. With pulse-pounding firsthand footage, this documentary goes inside a deadly twister.",
      popularity: 22.729,
      poster_path: "/ggXb37lX9gW4SR7kpMaraXDFeFR.jpg",
      release_date: "2025-03-18",
      title: "The Twister: Caught in the Storm",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/vnNLcHsXQ5N9dDLsNJW2Bm8UNmG.jpg",
      genre_ids: [99],
      id: 1204967,
      original_language: "en",
      original_title: "USAH: Uncommon Stories of American Horror",
      overview:
        "27 real-life stories of American horror are told by a mysterious narrator, who draws inspiration from some famous paintings of American art displayed in an ancient abbey.",
      popularity: 22.618,
      poster_path: "/FDGnXfWwRJETNa0TP4xq2Sjt5k.jpg",
      release_date: "2025-03-18",
      title: "USAH: Uncommon Stories of American Horror",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/qUc0Hol3eP74dbW4YyqT6oRLYgT.jpg",
      genre_ids: [878, 35, 12],
      id: 696506,
      original_language: "en",
      original_title: "Mickey 17",
      overview:
        "Unlikely hero Mickey Barnes finds himself in the extraordinary circumstance of working for an employer who demands the ultimate commitment to the job… to die, for a living.",
      popularity: 22.567,
      poster_path: "/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
      release_date: "2025-02-28",
      title: "Mickey 17",
      video: false,
      vote_average: 6.98,
      vote_count: 780,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 1437920,
      original_language: "en",
      original_title: "Centered: Joe Lieberman",
      overview:
        "In a time of deep political division, Centered: Joe Lieberman chronicles the remarkable career of Joe Lieberman, a principled and bipartisan politician who navigated the tumultuous world of American politics with unwavering integrity, offering timely lessons on the power of collaboration and leadership beyond party lines.",
      popularity: 22.509,
      poster_path: "/pGeRaZEmOo46DhgRePw4uAUSnkJ.jpg",
      release_date: "2025-03-18",
      title: "Centered: Joe Lieberman",
      video: false,
      vote_average: 7.833,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: "/ApBJ1YzoJsDBe8HjZaDTgqTCzMv.jpg",
      genre_ids: [99],
      id: 1437701,
      original_language: "en",
      original_title: "Leaving Neverland 2: Surviving Michael Jackson",
      overview:
        "Explores the personal toll on James Safechuck and Wade Robson after they went public with accusations against pop icon Michael Jackson. The two men continue to seek justice as they face backlash from his global army of fans. With exclusive access to court hearings, the film shows the extent to which the Jackson estate has fought to prevent Robson and Safechuck from having their day in court.",
      popularity: 22.508,
      poster_path: "/wPmKY6KaLj3PEPoDuy0tAX4MKYs.jpg",
      release_date: "2025-03-18",
      title: "Leaving Neverland 2: Surviving Michael Jackson",
      video: false,
      vote_average: 5.25,
      vote_count: 4,
    },
    {
      adult: false,
      backdrop_path: "/sBtuuQ2MPliv76mjckkfwB3mNNO.jpg",
      genre_ids: [99],
      id: 1417181,
      original_language: "en",
      original_title: "Dawn of Impressionism: Paris 1874",
      overview:
        "The Impressionists are the most popular group in art history – millions flock every year to marvel at their masterpieces. But, to begin with, they were scorned, penniless outsiders. 1874 was the year that changed everything; the first Impressionists, “hungry for independence”, broke the mould by holding their own exhibition outside official channels. Impressionism was born and the art world was changed forever.  What led to that first groundbreaking show 150 years ago? Who were the maverick personalities that wielded their brushes in such a radical and provocative way? The spectacular Musée d’Orsay exhibition brings fresh eyes to this extraordinary tale of passion and rebellion. The story is told not by historians and curators but in the words of those who witnessed the dawn of Impressionism: the artists, press and people of Paris, 1874.",
      popularity: 22.493,
      poster_path: "/lSU85MrxOtlrvtiRlI9GTPBGiwK.jpg",
      release_date: "2025-03-18",
      title: "Dawn of Impressionism: Paris 1874",
      video: false,
      vote_average: 4.0,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: "/axTt8unBOfjEZaxrx2xzklAqo7r.jpg",
      genre_ids: [27, 53],
      id: 1439804,
      original_language: "en",
      original_title: "Spider in the Cupboard",
      overview:
        "SMILE, YOU'RE ON CAMERA...\r Jen is a crisis hotline volunteer, using the service to cope with losing her sister at a young age. Little does she know, a former caller has beensecretly living in her apartment, recording her every move with a home video camera. Jen is sent into a spiral by thecombination ofJohn Doe's subtle\r maniuplations and the apathy of Jen's loved ones, namely Harry.",
      popularity: 22.474,
      poster_path: "/9lKBcNmWdSbODDuF6TBO6UZvAyL.jpg",
      release_date: "2025-03-18",
      title: "Spider in the Cupboard",
      video: false,
      vote_average: 4.0,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [53],
      id: 1436099,
      original_language: "en",
      original_title: "Act of Kindness",
      overview:
        "A young woman living in her car has her life turned upside down after a friendly encounter in the woods goes south.",
      popularity: 22.452,
      poster_path: "/jC9eJYTxvREpBeaR3KJFv3SUq4o.jpg",
      release_date: "2025-03-18",
      title: "Act of Kindness",
      video: false,
      vote_average: 5.25,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: "/lt2f4VxklsOQqWxKsxL5db53Pyb.jpg",
      genre_ids: [99, 10770],
      id: 1442200,
      original_language: "ca",
      original_title: "Revolució 304",
      overview: "",
      popularity: 22.438,
      poster_path: "/8B4vut9fWBvM0lI083LnXuBjzOz.jpg",
      release_date: "2025-03-18",
      title: "Revolució 304",
      video: false,
      vote_average: 8.2,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: "/qZRuKglsKV3EeiZurVY7wpumNHW.jpg",
      genre_ids: [18],
      id: 1149463,
      original_language: "fr",
      original_title: "Magma",
      overview:
        "Katia Reiter directs the Guadeloupe Volcano Observatory. A passionate volcanologist,  she’s waved goodbye to the idea of one day fulfilling her professional dream of managing a major eruption. But she hadn’t appreciated the unpredictable nature of the Soufrière... or of young volcanologist Aimé Lubin.",
      popularity: 21.899,
      poster_path: "/gblm8Nip5NSDL8BK6mjuQB6xY8e.jpg",
      release_date: "2025-03-19",
      title: "Magma",
      video: false,
      vote_average: 6.0,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: "/sJY1nxg2sa6Gfjh0ROwt68yeq65.jpg",
      genre_ids: [35, 18],
      id: 1266809,
      original_language: "fr",
      original_title: "La Cache",
      overview:
        "An eccentric family portrait set during the May 1968 protests in Paris. A nine-year-old boy stays with his grandparents and uncles while his parents protest. When an illustrious guest seeks refuge in the apartment, the family’s dynamics change.",
      popularity: 21.169,
      poster_path: "/r9xf19feljoQSQrTFmcrikID4Kq.jpg",
      release_date: "2025-03-19",
      title: "The Safe House",
      video: false,
      vote_average: 5.0,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: "/tmLw2UucOFO0Uu8ran2qpGLPj0u.jpg",
      genre_ids: [18],
      id: 1262495,
      original_language: "es",
      original_title: "Sariri",
      overview:
        "In La Lágrima, a desertic mining lost town, women live under the strict rules of patriarchy. Dina (16), pressed by an unwanted pregnancy, plans to escape. But when she finds out her sister Sariri (11), has to initiate womanhood after the arrival of her menarche, she’ll have to decide if they’ll escape together through the desert.",
      popularity: 21.162,
      poster_path: "/7jij0dVQBagcXboNr3M9FQRwcxn.jpg",
      release_date: "2025-03-19",
      title: "Sariri",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/wTKTYyEJ3H0UokKuVVtSdKVincm.jpg",
      genre_ids: [18],
      id: 898271,
      original_language: "es",
      original_title: "Algo viejo, algo nuevo, algo prestado",
      overview:
        "A working-class family in Buenos Aires runs an underground sports betting operation, which becomes matriarchal after the father's death.",
      popularity: 21.144,
      poster_path: "/thz7YtbeigHazKeDkmD3QyxQlBv.jpg",
      release_date: "2025-03-19",
      title: "Something Old, Something New, Something Borrowed",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 1445168,
      original_language: "fr",
      original_title: "J'existe",
      overview:
        "A group of young LGBT+ people from Central Africa talk about their living conditions and their hopes.",
      popularity: 21.143,
      poster_path: "/gjYD2D41kQdIYhi91fqo7M6BhM.jpg",
      release_date: "2025-03-19",
      title: "I Exist",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/tShQQJoROZihitwhs5VGA7OaHJC.jpg",
      genre_ids: [18],
      id: 1442918,
      original_language: "bg",
      original_title: "Диви ягоди",
      overview:
        "Overworked New York architect Daphne Bello arrives in the Rhodope Mountains to inherit the abandoned house of her grandmother, a woman she never knew, who recently passed away at the age of 102. As she searches for the truth about her long-deceased Bulgarian father, Daphne clashes with her eccentric local cousin Orlin, who is eager to rid her of the supposedly worthless property—while keeping secret the unique mineral spring flowing beneath it. Unraveling the dramatic history of her father’s lineage, still alive in the memories of the village elders, Daphne discovers an unexpected opportunity to rediscover herself.",
      popularity: 21.143,
      poster_path: "/mJrJSzrLP8MiCtBjPVKE29QCQ5Q.jpg",
      release_date: "2025-03-19",
      title: "Wild Strawberries",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/qMYb0pTEnsYsYPVD1uJIpOMumYB.jpg",
      genre_ids: [18, 35],
      id: 1107215,
      original_language: "fr",
      original_title: "Ma mère, Dieu et Sylvie Vartan",
      overview:
        "In 1963, Esther gives birth to Roland, the youngest of a large family. Roland is born with a club foot that prevents him from standing. Against everyone's advice, she promises her son that he will walk like the others and that he will have a fabulous life. From then on, Esther will do everything in her power to keep this promise. Through decades of trials and miracles of life, this film is the story of a true, funny and moving story, that of an incredible destiny and the greatest love there is: that of a mother for her child.",
      popularity: 21.14,
      poster_path: "/sIYUhbkjgedkYuiQ9MW3fzyc7Gf.jpg",
      release_date: "2025-03-19",
      title: "My Mom, God and Sylvie Vartan",
      video: false,
      vote_average: 6.0,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 1442431,
      original_language: "es",
      original_title: "Legítimo",
      overview: "",
      popularity: 21.137,
      poster_path: "/7WqrPjiyPCUUji4GdQII0LVLCr0.jpg",
      release_date: "2025-03-19",
      title: "Legítimo",
      video: false,
      vote_average: 0.0,
      vote_count: 0,
    },
  ];
  const imageRenderer = (imgPath: string) => {
    const baseURL = "https://image.tmdb.org/t/p/w300";
    return baseURL + imgPath;
  };

  return (
    <div className="w-full flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-semibold text-2xl">Popular</p>
        <button className="flex-row gap-2 flex">
          See more
          <ArrowRight />
        </button>
      </div>
      <div className="flex flex-wrap gap-8">
        {PopularMovieData.slice(0, 10).map((Element, index) => {
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
