import { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList";
import MovieSelect from "../components/MovieSelect";
import SeenMoviesList from "../components/SeenMoviesList";


const MoviesContainer = () => {

    const [movies, setMovies] = useState([]);
    const [seenMovies, setSeenMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchMovies = async () => {
    // API key: 8d197031
    // can make 1000 requests per day
        const response = await fetch("https://www.omdbapi.com/?s=Star-Wars&?i=tt3896198&apikey=8d197031");
        const jsonMovies = await response.json();
        const moviesData=jsonMovies.Search;
        setMovies(moviesData);
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    const addSeenMovie = (movie) => {
        if(seenMovies.includes(movie)){
            alert("You've already added this movie to the seen list!");
        } else {
            setSeenMovies([...seenMovies,movie])
        }
    }

    const selectMovie=(movie) => {
        setSelectedMovie(movie);
        // setSeenMovies([...seenMovies,movie])
    }
 

    return(
        <div className="main-container">
            <h2>Star Wars Saga</h2>
            <MoviesList movies={movies} selectMovie={selectMovie} />
            
            <div className="selected-movie-container">
            {
            selectedMovie ? 
                <MovieSelect 
                
                    selectedMovie={selectedMovie}
                    addSeenMovie={addSeenMovie}
                /> 
                : <div></div>
            }
            </div>
            
            <div className="seen-movies-container">
                <h3>Seen Movies List</h3>
            <SeenMoviesList 
                seenMovies={seenMovies}
                selectMovie={selectMovie}
            />
            </div>

        </div>
    );
}

export default MoviesContainer;