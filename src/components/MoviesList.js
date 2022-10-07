import MovieListItem from "./MovieListItem";


const MoviesList = ({movies,selectMovie}) => {

    const movieListItems = movies.map((movie)=>{
        return <MovieListItem 
                    movie={movie} 
                    selectMovie={selectMovie}
               
                />
    })

    return(
        <div className="movie-tile-container">
        
            {movieListItems}
        </div>
    );
}

export default MoviesList;