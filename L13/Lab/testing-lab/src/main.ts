import { setupMovies } from "./components/movies.ts";
import "./style.css";

setupMovies(document.querySelector<HTMLButtonElement>("#app")!);
