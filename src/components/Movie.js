import React from 'react'
import { Link } from "react-router-dom";

function Movie(props) {

    

    return (
    <div className="movie">
        <div className="movie-title">
        {props.movie.title}
        <span className="movie-year">
            {props.movie.date}
        </span>
        </div>
        <div>
            <button onClick={() => props.removeMovie(props.movie.id)}>삭제</button>
        </div>
    </div>
    )
}

export default Movie
