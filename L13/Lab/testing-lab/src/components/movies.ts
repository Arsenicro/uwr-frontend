import {
  formatMovie,
  movieReducer,
  sortMoviesByYear,
  validateMovie,
} from "../helpers/helpers";
import type { MovieType } from "../types/Movie.types";

export function setupMovies(element: HTMLElement) {
  let movies: MovieType[] = [];
  let ascending = true;

  function renderAddMovieForm() {
    const form = document.createElement("form");
    form.className = "movie-form";

    const titleInput = document.createElement("input");
    titleInput.className = "movie-input";
    titleInput.placeholder = "Movie Title";
    titleInput.required = true;

    const yearInput = document.createElement("input");
    yearInput.className = "movie-input";
    yearInput.placeholder = "Release Year";
    yearInput.type = "number";
    yearInput.required = true;
    yearInput.min = "1888";
    yearInput.max = String(new Date().getFullYear() + 1);

    const addButton = document.createElement("button");
    addButton.className = "movie-button";
    addButton.textContent = "Add Movie";
    addButton.type = "submit";

    const errorMsg = document.createElement("div");
    errorMsg.className = "movie-error";

    form.append(titleInput, yearInput, addButton, errorMsg);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      errorMsg.textContent = "";

      const title = titleInput.value.trim();
      const year = Number(yearInput.value);

      const errors = validateMovie({ title, year }, movies);
      if (errors.length > 0) {
        errorMsg.textContent = errors.join(", ");
        return;
      }

      movies = movieReducer(movies, {
        type: "ADD_MOVIE",
        payload: { title, year },
      });
      renderMovies(movies);
      form.reset();
    });

    element.appendChild(form);
  }

  function renderMovies(movies: MovieType[]) {
    const oldList = element.querySelector(".movie-list");
    const oldForm = element.querySelector(".movie-form");
    const oldToggle = element.querySelector(".sort-toggle");
    if (oldList) element.removeChild(oldList);
    if (oldForm) element.removeChild(oldForm);
    if (oldToggle) element.removeChild(oldToggle);

    const sortedMovies = sortMoviesByYear(movies, ascending);

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "movie-button sort-toggle";
    toggleBtn.textContent = ascending ? "Sort Descending" : "Sort Ascending";
    toggleBtn.addEventListener("click", () => {
      ascending = !ascending;
      renderMovies(movies);
    });
    element.appendChild(toggleBtn);

    const movieList = document.createElement("ul");
    movieList.className = "movie-list";

    sortedMovies.forEach((movie) => {
      const movieItem = document.createElement("li");
      movieItem.className = "movie-item";
      movieItem.textContent = formatMovie(movie);

      const removeButton = document.createElement("button");
      removeButton.className = "remove-button";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        movies = movieReducer(movies, {
          type: "REMOVE_MOVIE",
          payload: movie.id,
        });
        renderMovies(movies);
      });

      movieItem.appendChild(removeButton);
      movieList.appendChild(movieItem);
    });

    renderAddMovieForm();
    element.appendChild(movieList);
  }

  renderAddMovieForm();
  renderMovies(movies);
}
