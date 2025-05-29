import { nanoid } from "nanoid";
import type { MovieAction, MovieType } from "../types/Movie.types";

export function validateMovie(
  movie: { title: string; year: number },
  existingMovies: MovieType[]
): string[] {
  const errors: string[] = [];
  // This is only an academic example, in a real application movies can have titles with special characters, numbers, etc.
  const titleRegex = /^[\w\s\-'.]{2,100}$/i;

  if (!movie.title.trim()) errors.push("Title is required");
  else if (movie.title.trim().length < 2) errors.push("Title is too short");
  else if (!titleRegex.test(movie.title))
    errors.push("Title contains invalid characters");

  if (typeof movie.year !== "number" || Number.isNaN(movie.year))
    errors.push("Year must be a number");
  else if (movie.year < 1888) errors.push("Year must be 1888 or later");

  const duplicate = existingMovies.some(
    (m) =>
      m.title.toLowerCase() === movie.title.toLowerCase() &&
      m.year === movie.year
  );
  if (duplicate) errors.push("This movie already exists");

  return errors;
}

export function sortMoviesByYear(
  movies: MovieType[],
  ascending = true
): MovieType[] {
  return [...movies].sort((a, b) =>
    ascending ? a.year - b.year : b.year - a.year
  );
}

export const movieReducer = (
  currentState: MovieType[],
  action: MovieAction
): MovieType[] => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...currentState,
        {
          id: nanoid(),
          createdAt: new Date(),
          ...action.payload,
        },
      ];
    case "REMOVE_MOVIE":
      return currentState.filter((movie) => movie.id !== action.payload);
    default:
      return currentState;
  }
};

export function formatMovie(movie: MovieType): string {
  const dateStr = movie.createdAt.toISOString().split("T")[0];
  return `${movie.title} (${movie.year}) — Added on ${dateStr}`;
}
