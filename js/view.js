//View

updateView();

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="container">
        <button onclick="showHideLeaderboard()">Show or hide Leaderboard</button>
        <div id='moviesDiv' style="display: none;"></div>
    <div>
     `;
}

function showMovies(){
    for (let movie of model.movies){
        document.getElementById('moviesDiv').innerHTML += /*HTML*/`
        <div class="movieCards" id=movieCard${movie.id}>
        <h2 class="movieTitles">${movie.title}</h2>
        <img src="./img/${movie.cover}" class="coverImages">
        <p class=infoSpan>Info about this movie:</p>
        <div><span class=infoSpan>Rating: </span><span class="movieInfoSpan">${movie.overallRating}/1000</span></div>
        <div><span class=infoSpan>Your rating: </span><span class="movieInfoSpan">${movie.personalRating}/1000</span></div>
        <div><span class=infoSpan>Length: </span><span class="movieInfoSpan">${movie.duration}</span></div>
        <div><span class=infoSpan>Genre: </span><span class="movieInfoSpan">${movie.genre}</span></div>
        <div><span class=infoSpan>Directed by: </span><span class="movieInfoSpan">${movie.directors}</span></div>
        <div><span class=infoSpan>Staring: </span><span class="movieInfoSpan">${movie.staringActors}</span></div>
        <div class="movieDescriptionDiv"><span class=infoSpan>Description:</span><span class="movieInfoSpan">${movie.description}</span></div>
        <div><span class=infoSpan></span><span class="movieInfoSpan"></span></div>
        </div>
        `;
    } 
}
function showHideLeaderboard(){
    movieDivStyle = document.getElementById('moviesDiv').style;
    if (movieDivStyle.display === 'none'){
        movieDivStyle.display = 'grid';
        showMovies();
    } else {
        movieDivStyle.display = 'none';
        document.getElementById('moviesDiv').innerHTML = '';
    }
}