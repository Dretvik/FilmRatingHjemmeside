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

function saveProfileInfo() {
    const user = model.app.loggedInUser;
    const newDescription = document.getElementById('editProfileDescriptionInput').value;
    const newName = document.getElementById('editProfileNameInput').value;
    const newImage = document.getElementById('imageInputField').value;

    // Hvis ikke noe er valgt vil den ikke gjøre noen endringer
    if (newDescription.trim() !== '') {
        user.description = newDescription;
    }
    if (newImage.trim() !== '') {
        user.profileImage = newImage;
    }
    if (newName.trim() !== ''){
        user.displayName = newName;
    }
    editProfileAddToFavMovie();
    profilePageView();
}

function editProfileAddToFavMovie(){
    const user = model.app.loggedInUser;
    const selectedMovies = [];
    const movieCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let checkbox of movieCheckboxes) {
        if (checkbox.checked) {
            selectedMovies.push(checkbox.value);
        }
    }
    if (selectedMovies.length > 0) {
        user.favoriteMovies = selectedMovies;
    }
}

function generateFavMovieList(movieTitles) {
    let movieList = '';
    if (movieTitles.length > 0) {
        for (let movieTitle of movieTitles) {
            movieList += `
            <label for="${movieTitle}">${movieTitle}</label><br>
        `;
        }
    } 
    else {
        movieList = 'No favorite movies selected';
    }
    return movieList;
}