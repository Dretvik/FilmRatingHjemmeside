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