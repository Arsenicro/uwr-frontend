export interface MovieType {
  id: string;
  title: string;
  year: number;
  createdAt: Date;
}

export type MovieAction =
  | { type: "ADD_MOVIE"; payload: Omit<MovieType, "id" | "createdAt"> }
  | { type: "REMOVE_MOVIE"; payload: string };
