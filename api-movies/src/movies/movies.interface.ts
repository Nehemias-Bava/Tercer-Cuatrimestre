import { Url } from "url";

export interface iMovie {
    id: number;
    title: string;
    year: number;
    director: string;
    duration: number;
    poster: Url;
    genre: string;
    rate: number;
  }