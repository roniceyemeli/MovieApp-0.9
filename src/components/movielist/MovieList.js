import React from 'react';
import MovieCard from '../moviecard/MovieCard';
import "./MovieList.css";

const MovieList = ({movielist}) => {
    return (
        <div className="container">
             <div className="row">
            {
                movielist.map(movie=><MovieCard movie={movie} key={movie.id}/>)
            }
            </div>
        </div>
    )
}

export default MovieList
