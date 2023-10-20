////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Page

function displaySearchedMovies(movies) {
    app.innerHTML = menuLogoAndSearch + /*HTML*/`
    <div id='moviesDiv'></div>
    `; 
    for (let movie of movies){
        document.getElementById('moviesDiv').innerHTML += /*HTML*/` 
            <div onclick="movieInfoPageView(${movie.id})" class="movieCards" id=movieCard${movie.id}>
                <h2 class="movieTitles">${movie.title}</h2>
                <img src="./img/movieCovers/${movie.cover}" class="coverImages">
                <p class=infoSpan>Info about this movie:</p>
                <div><span class=infoSpan>Rating: </span><span class="movieInfoSpan">${movie.overallRating}/1000</span></div>
                <div><span class=infoSpan>Your rating: </span><span class="movieInfoSpan">${movie.personalRating}/1000</span></div>
                <div><span class=infoSpan>Length: </span><span class="movieInfoSpan">${movie.duration}</span></div>
                <div><span class=infoSpan>Genre: </span><span class="movieInfoSpan">${movie.genre}</span></div>
    `;
    }
}