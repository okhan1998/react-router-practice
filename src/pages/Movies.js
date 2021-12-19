import React, {useState} from 'react'
import MovieAdd from '../components/MovieAdd';
import Movie from '../components/Movie';

function Movies() {
    const [movies, setMovies] = useState([]);
    const removeMovie = (id) => {
        console.log(id);
        setMovies(movies.filter(x => x.id != id));
      }
    const renderMovies = movies.length != 0 ? movies.map(movie => {
        return(
          <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
          );
      })
      : '추가된 영화가 없습니다.';
    
      const addMovie = (movie) => {
        setMovies([
          ...movies,
          movie
        ])
      }
    return (
        
        <>
            <h1>Movie List</h1>
            <MovieAdd addMovie={addMovie}/>
            {renderMovies} 
        </>
    )
}

export default Movies