//Controller

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Login Page

//Login function
function userLogin(username, password){
    const usernameInput = document.getElementById('loginUsernameInput');
    username = usernameInput.value.charAt(0).toUpperCase() + usernameInput.value.slice(1);
    password = document.getElementById('loginPasswordInput').value;
    for (let user of model.users){
        if (username === user.username && password === user.password){
            model.app.loggedInUser = user;
            model.app.currentPage = 'mainPage';
            mainPageView();
            return true;
        }
    }
    alert('username or password is wrong, try again');
    return false;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Registration Page
function registerUser(){
    const usernameInput = document.getElementById('registerUsername');
    const username = usernameInput.value.charAt(0).toUpperCase() + usernameInput.value.slice(1);
    const email = document.getElementById('registerEmail').value.toLowerCase();
    const password1 = document.getElementById('registerPassword1').value;
    const password2 = document.getElementById('registerPassword1').value;
    
    if(password1.value === password2.value){
        const newUser = {
            username: username,
            email: email,
            password: password1,
            profileImage: './img/profileImages/emptyUser.jpg',
            isAdmin: false,
            description: '',
            favoriteMovies: [],
        };
        model.users.push(newUser);
        // Can set the newly registered user as logged in once registered.
        // model.app.users.loggedInUser = newUser;
        // mainPageView();
        loginView();
    } else {
        alert('Passwords do not match. Please enter the same password in both fields.');
        return;
    }
    
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main page 

function previousCardInHigestRatedCarousel(){
    currentIndexOfMainCarousel = (currentIndexOfMainCarousel - 1 + model.movies.length) % model.movies.length;
    showHigestRatedMoviesCarouselView();
}
function nextCardInHigestRatedCarousel(){
    currentIndexOfMainCarousel = (currentIndexOfMainCarousel + 1 ) % model.movies.length;
    showHigestRatedMoviesCarouselView();
}

// Logout funtion
function userLogout(){
    model.app.loggedInUser = null;
    loginView();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Profile Page

function addMovieToLoggedInUserFavorites(movieId) {
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
        console.log('Movie is already in favorites');
        return;
    }
    // Check if the movie title matches as an additional condition
    if (user.favoriteMovies.some(favMovie => favMovie.title === movie.title)) {
        console.log('Movie with the same title is already in favorites');
        return;
    }
    // If all conditions are met, add the movie to the user's favoriteMovies
    user.favoriteMovies.push(movie);
    console.log(`Added "${movie.title}" to ${user.username}'s favorite movies.`);
}