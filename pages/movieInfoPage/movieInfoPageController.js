///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Movie Info Page

function submitMovieRating(id) {
    const movieRatingInput = document.getElementById('movieRatingInput');
    const rating = parseFloat(movieRatingInput.value);

    if (isNaN(rating) || rating < 0 || rating > 1000) {
        alert('Please enter a valid rating between 1 and 10.');
    } else {
        const movieId = id; 
        const movie = model.movies.find(movie => movie.id === movieId);
        movie.personalRating = rating; 

        movieInfoPageView(movieId);
    }
}