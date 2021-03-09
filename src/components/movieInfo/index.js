import React from "react";

const MovieInfo = ({ closeMovieInfo, currentMovie }) => {
  const { poster_path, title, overview, release_date } = currentMovie;

  const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
  const imageUrl = "http://image.tmdb.org/t/p/w185";

  const currentMoviePoster = poster_path
    ? `${imageUrl}${poster_path}`
    : DEFAULT_PLACEHOLDER_IMAGE;
  return (
    <div className="container">
      <div data-testid="closeMovie" className="row closeMovie" onClick={closeMovieInfo}>
        <span style={{ marginLeft: 10 }}>Go Back</span>
      </div>

      <div className="row">
        <div className="col s12 m4">
          <img
            width="200"
            alt={`The movie titled: ${title}`}
            src={currentMoviePoster}
            className="movieImage"
          />
        </div>
        <div className="col s12 m8">
          <div className="info-container">
            <p>{title}</p>
            <p>{release_date}</p>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
