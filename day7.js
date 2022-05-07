class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const movie1 = new Movie("Casino Royale", "Eon Productions", "PG­13");

const getPG = (movieArr) => {
  let pgMovies = movieArr.filter((movie) => movie.rating === "PG");
  return pgMovies;
};
