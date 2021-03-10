import React from "react";
import PropTypes from 'prop-types';
const MovieInfo = ({ closeMovieInfo, currentMovie }) => {
  const { poster_path, title,name,known_for_department, overview, release_date ,media_type,profile_path} = currentMovie;

  const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
  const imageUrl = "http://image.tmdb.org/t/p/w185";
  
  let currentMoviePoster = DEFAULT_PLACEHOLDER_IMAGE;
  if(media_type === 'person' && profile_path) {
    currentMoviePoster = `${imageUrl}${profile_path}`;
  } else if(poster_path) {
    currentMoviePoster = `${imageUrl}${poster_path}`;
  }



  return (
    <div className="container">
      <div data-testid="closeMovie" className="row closeMovie" onClick={closeMovieInfo}>
        <span style={{ marginLeft: 10 }}>Go Back</span>
      </div>

      <div className="row">
        <div className="col s12 m4">
          <img
            width="200"
            alt={`The movie titled: ${title?title:name}`}
            src={currentMoviePoster}
            className="movieImage"
          />
        </div>
        <div className="col s12 m8">
          <div className="info-container">
            <p>{title?title:name}</p>
            <p>{release_date}</p>
            <p>{overview?overview:known_for_department}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
    currentMovie: PropTypes.array,
    media_type:PropTypes.string,
    profile_path:PropTypes.string,
    poster_path:PropTypes.string,
    movie:PropTypes.object,
    title:PropTypes.string,
    name:PropTypes.string,
    known_for_department:PropTypes.string, 
    overview:PropTypes.string, 
    release_date:PropTypes.string,
    closeMovieInfo:PropTypes.func
  };

export default MovieInfo;
