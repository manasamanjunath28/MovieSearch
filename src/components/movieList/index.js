import React from "react";
import Movie from "../movie";
import PropTypes from 'prop-types';
const MovieList = ({ movies, viewMovieInfo }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        movies.map(movie => <Movie key={movie.id} movie={movie} viewInfo={viewMovieInfo} />)
                    }
                </div>
            </div>
        </div>
    )
}
MovieList.propTypes = {
    movies: PropTypes.array,
    viewMovieInfo:PropTypes.func
  };
export default MovieList;