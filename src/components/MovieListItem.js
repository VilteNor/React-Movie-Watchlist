const MovieListItem = ({movie,selectMovie}) => {
    const handleClick = () => {
        selectMovie(movie);
    }


    return (
        <div className="movie-tile" onClick={handleClick}>
            <h4>{movie.Title} </h4>
        <img src={movie.Poster} alt="movie poster image" />
        <p>Release date: <b>{movie.Year}</b></p>
        
        </div>
    );
}

export default MovieListItem;