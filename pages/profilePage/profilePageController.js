////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Profile Page

function addMovieToLoggedInUserFavorites(movieId) {
    favoriteDiv = document.getElementById('isFavoriteInfoDiv');
    if (!model.app.loggedInUser) {
        console.log('No logged-in user. Please log in first.');
        return;
    }
    const user = model.app.loggedInUser;
    const movie = model.movies.find(movie => movie.id === movieId);
    if (!movie) {
        console.log('Movie not found');
        return;
    }
    // Check if the movie is not already in the user's favoriteMovies array
    const isAlreadyFavorite = user.favoriteMovies.some(favMovie => favMovie.id === movie.id);
    if (isAlreadyFavorite) {
        favoriteDiv.innerHTML = `This movie is allready in your favorites`;
        return;
    }
    // Check if the movie title matches as an additional condition
    if (user.favoriteMovies.some(favMovie => favMovie.title === movie.title)) {
        console.log('Movie with the same title is already in favorites');
        return;
    }
    // If all conditions are met, add the movie to the user's favoriteMovies
    user.favoriteMovies.push(movie);
    favoriteDiv.innerHTML = `Added "${movie.title}" to ${user.username}'s favorite movies.`;
}