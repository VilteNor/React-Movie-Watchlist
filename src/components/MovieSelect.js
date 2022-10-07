const MovieSelect = ({selectedMovie, addSeenMovie}) => {
    const handleClick = () => {
        addSeenMovie(selectedMovie)
    }
    return(
        <div className="selected-movie">
            <h5>You selected: <br />
            {selectedMovie.Title}</h5>
            <button onClick={handleClick}>Add to seen movies</button>
        </div>
    )
}

export default MovieSelect;