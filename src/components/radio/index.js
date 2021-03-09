
import React from "react";


const Radio = ({ onSelectType }) => {

    const handleChange = (e) => {
        onSelectType(e.target.value)
    }

    return (
        <div>
            <label >
                <input
                    id="movies"
                    value="movie"
                    name="type"
                    type="radio"
                    onChange={handleChange}
                />
                <span>Movies</span>
            </label>
            <label>
                <input
                    id="person"
                    value="person"
                    name="type"
                    type="radio"
                    onChange={handleChange}
                />
                <span>Person</span>
            </label>
            <label>
                <input
                    id="tvShows"
                    value="tv"
                    name="type"
                    type="radio"
                    onChange={handleChange}
                />
                <span>Tv Shows</span>
            </label>
        </div>
    )
}
export default Radio;
