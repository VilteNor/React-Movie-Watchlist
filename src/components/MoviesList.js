import MovieListItem from "./MovieListItem";


const MoviesList = ({movies}) => {

    const movieListItems = movies.map((movie)=>{
        return <MovieListItem 
                    movie={movie} 
               
                />
    })

    return(
        <div className="movie-tile-container">
        
            {movieListItems}
        </div>
    );
}

export default MoviesList;