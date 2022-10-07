import MovieListItem from "./MovieListItem";


const SeenMoviesList = ({seenMovies, selectMovie}) => {
    const seenMovieListItems = seenMovies.map((movie) => {
        return <MovieListItem movie={movie} selectMovie={selectMovie}/>
    })
    return(
        <div className="seen-movie-tile-container">
            {seenMovieListItems}
        </div>
    );
}

export default SeenMoviesList;