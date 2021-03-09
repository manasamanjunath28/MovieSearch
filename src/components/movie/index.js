import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie, viewInfo }) => {
  const imageUrl = "http://image.tmdb.org/t/p/w185";
  let moviePoster = DEFAULT_PLACEHOLDER_IMAGE;
  if(movie.media_type === 'person' && movie.profile_path) {
    moviePoster = `${imageUrl}${movie.profile_path}`;
  } else if(movie.poster_path) {
    moviePoster = `${imageUrl}${movie.poster_path}`;
  }
  
 
  //const profilePoster = movie.profile_path ? `${imageUrl}${movie.profile_path}` : DEFAULT_PLACEHOLDER_IMAGE;
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            width="200"
            alt={`The movie titled: ${movie.title}`}
            src={moviePoster}
            className="movieImage"
          />
          <div className="card-content">
            <p>
              <a href="#" onClick={() => viewInfo(movie.id)}>
                View Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
