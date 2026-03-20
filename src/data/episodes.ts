import episodeThumb1 from "@/assets/episode-thumb-1.jpg";
import episodeThumb2 from "@/assets/episode-thumb-2.jpg";
import episodeThumb3 from "@/assets/episode-thumb-3.jpg";

export interface Episode {
  id: string;
  number: number;
  title: string;
  summary: string;
  thumbnail: string;
  date: string;
  duration: string;
  spotifyUrl: string;
  appleUrl: string;
  youtubeUrl: string;
}

// ─── ADD NEW EPISODES HERE ───
// Copy an existing episode object, update the fields, and add it to the top of the array.
// The first episode in the array appears first on the site.
export const episodes: Episode[] = [
  {
    id: "ep-3",
    number: 3,
    title: "The Myth of Having It Together",
    summary: "We unpack the performance of 'doing fine' — from curated school drop-off outfits to pretending you meal-prepped. Spoiler: nobody actually has it together, and that's the whole point.",
    thumbnail: episodeThumb3,
    date: "March 14, 2026",
    duration: "47 min",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: "ep-2",
    number: 2,
    title: "Marriage Is a Group Project Nobody Asked For",
    summary: "An honest conversation about the weird logistics of loving someone forever — from passive-aggressive dishwasher loading to actually communicating your needs. Revolutionary stuff.",
    thumbnail: episodeThumb2,
    date: "March 7, 2026",
    duration: "52 min",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: "ep-1",
    number: 1,
    title: "Welcome to the Delusion",
    summary: "The one where we introduce ourselves, explain why we started this podcast, and immediately overshare. A strong foundation of emotional honesty and questionable life choices.",
    thumbnail: episodeThumb1,
    date: "February 28, 2026",
    duration: "44 min",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
];
