///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Movie Info Page
function movieInfoPageView(movieId){
    const movie = model.movies.find(movie => movie.id === movieId);

    app.innerHTML = menuLogoAndSearch + /*HTML*/`
    <div id="movieInfoButtonsDiv">
        <button class="movieInfoButtons" onclick="addMovieToLoggedInUserFavorites(${movie.id})">Add to favorites</button>
        <button class="movieInfoButtons">Rate Movie</button>
    </div>
    <div id="isFavoriteInfoDiv"></div>
    <div id="isPersonallyRatedDiv"></div>
    <div id="movieInfoContainer">
    <h1>${movie.title}</h1>
    <img src="./img/movieCovers/${movie.cover}" id="movieInfoCoverImage">
    <h4 class="movieInfoH4">Info about ${movie.title}:</h4>
        <div class="movieInformationContainer">
            <span class="movieInfoAreaA">Genre:</span>
            <span class="movieInfoAreaB">${movie.genre}</span>
            <span class="movieInfoAreaA">Year of release:</span>
            <span class="movieInfoAreaB">${movie.releaseDate}</span>
            <span class="movieInfoAreaA">Length of movie:</span>
            <span class="movieInfoAreaB">${movie.duration}</span>
            <span class="movieInfoAreaA">Overall Rating:</span>
            <span class="movieInfoAreaB">${movie.overallRating} of 1000</span>
            <span class="movieInfoAreaA">Your Personal Rating:</span>
            <span class="movieInfoAreaB">${movie.personalRating}</span>
            <span class="movieInfoAreaA">Movie Description:</span>
            <span class="movieInfoAreaB">${movie.description}</span>
        </div>
        <h4 class="movieInfoH4">Top credirs</h4>
        <div class="movieInformationContainer">
            <span class="movieInfoAreaA">Directors:</span>
            <span class="movieInfoAreaB">${movie.directors}</span>
            <span class="movieInfoAreaA">Actors:</span>
            <span class="movieInfoAreaB">
                ${movie.staringActors[0]}
                <br>
                ${movie.staringActors[1]}
                <br>
                ${movie.staringActors[2]}
            </span>
        </div>
    </div>
    `;

}