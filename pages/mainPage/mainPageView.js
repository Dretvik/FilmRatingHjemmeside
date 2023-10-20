
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hoved View
function mainPageView() {
    app.innerHTML = menuLogoAndSearch +/*HTML*/`
    <!-- CarouselView -->
    <div class="carouselContainer">
    <div id="mainCarouselButtonsDiv">Higest Rated Movies:<br>
    <button id="prevButton" onclick="previousCardInHigestRatedCarousel()">Previous</button>
    <button id="nextButton" onclick="nextCardInHigestRatedCarousel()">Next</button>
    </div>
    <div id="moviesCarousel" class="carousel"></div>
    </div>
    
    <button id="leaderboardButton" onclick="showHideLeaderboard()">Show All Movies</button>
    <div id='moviesDiv' style="display: none;"></div>
     `;
     showHigestRatedMoviesCarouselView();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Carousel view funksjon for Hoved Siden
function showHigestRatedMoviesCarouselView(){
    const movies = model.movies.slice(); // Lager kopi av movies array'et
    movies.sort((a, b) => b.overallRating - a.overallRating); // Sorterer movies array'et etter overallRating

    const moviesCarousel = document.getElementById('moviesCarousel');
    moviesCarousel.innerHTML = '';


    for (let i = 0; i < 3; i++) {
        const currentIndex = (currentIndexOfMainCarousel + i) % movies.length;
        const movie = movies[currentIndex];

        const movieCard = document.createElement('div');
        movieCard.classList.add('movieCardsInCarousel');
        movieCard.innerHTML = /*HTML*/ `
        <div onclick="movieInfoPageView(${movie.id})" class="movieCardsInCarousel" id=movieCard${movie.id}>
        <h2 class="movieTitles">${movie.title}</h2>
        <img src="./img/movieCovers/${movie.cover}" class="coverImages">
        <p class=infoSpan>Info about this movie:</p>
        <div><span class=infoSpan>Rating: </span><span class="movieInfoSpan">${movie.overallRating}/1000</span></div>
        <div><span class=infoSpan>Your rating: </span><span class="movieInfoSpan">${movie.personalRating}/1000</span></div>
        <div><span class=infoSpan>Length: </span><span class="movieInfoSpan">${movie.duration}</span></div>
        <div><span class=infoSpan>Genre: </span><span class="movieInfoSpan">${movie.genre}</span></div>
        </div>
        `;
    moviesCarousel.appendChild(movieCard);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// View for hele biblioteket av filmer
function showMoviesView(){
    for (let movie of model.movies){
        document.getElementById('moviesDiv').innerHTML += /*HTML*/`
        <div onclick="movieInfoPageView(${movie.id})" class="movieCards" id=movieCard${movie.id}>
        <h2 class="movieTitles">${movie.title}</h2>
        <img src="./img/movieCovers/${movie.cover}" class="coverImages">
        <p class=infoSpan>Info about this movie:</p>
        <div><span class=infoSpan>Rating: </span><span class="movieInfoSpan">${movie.overallRating}/1000</span></div>
        <div><span class=infoSpan>Your rating: </span><span class="movieInfoSpan">${movie.personalRating}/1000</span></div>
        <div><span class=infoSpan>Length: </span><span class="movieInfoSpan">${movie.duration}</span></div>
        <div><span class=infoSpan>Genre: </span><span class="movieInfoSpan">${movie.genre}</span></div>
        </div>
        `;
    } 
}
function showHideLeaderboard(){
    movieDivStyle = document.getElementById('moviesDiv').style;
    if (movieDivStyle.display === 'none'){
        movieDivStyle.display = 'grid';
        document.getElementById('moviesDiv').innerHTML = '';
        showMoviesView();
    } else {
        movieDivStyle.display = 'none';
        document.getElementById('moviesDiv').innerHTML = '';
    }
}
