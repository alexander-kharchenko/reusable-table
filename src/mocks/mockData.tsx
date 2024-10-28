import HappyIcon from "../assets/happy.svg?react";
import NeutralIcon from "../assets/neutral.svg?react";
import SadIcon from "../assets/sad.svg?react";

export const movieHeaders = [
  { id: "name", name: "Movie name" },
  { id: "releaseYear", name: "Release year" },
  { id: "runtime", name: "Running time (min)" },
  { id: "viewersRating", name: "Viewers rating" },
];

export const movies = [
  {
    name: "Blade Runner",
    releaseYear: "1982",
    runtime: 117,
    viewersRating: <HappyIcon fill="#00ee70" width={40} />,
  },
  {
    name: "Fight Club",
    releaseYear: "1999",
    runtime: 139,
    viewersRating: <NeutralIcon fill="#eeee00" width={40} />,
  },
  {
    name: "Batman & Robin",
    releaseYear: "1997",
    runtime: 125,
    viewersRating: <SadIcon fill="ee0000" width={40} />,
  },
];
