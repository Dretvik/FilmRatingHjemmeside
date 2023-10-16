////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Page

function displaySearchedMovies(movies) {
    app.innerHTML = /*HTML*/`
    <img id="turtlePowerLogo" src="${model.app.logo}.jpg">
    <h1>TurtlePower Movies</h1>
    <!--Adding dropdown menu -->
    <div class="dropdown">
      <button class="dropbtn">Menu</button>
      <div class="dropdown-content">
        <button onclick="mainPageView()">Main Page</button>
        <button onclick="profilePageView()">Profile Page</button>
        <br>
        <button onclick="userLogout()">Logout</button>
        <!-- Add more buttons here if needed -->
      </div>
    </div>
    <!--  Adding Search for title function -->
    <div class="searchDiv">
    <input type="text" id="searchInput" placeholder="Search for Movie Titles...">
    <button class="searchButton" onclick="performSearch()">Search</button>
    </div>
    <div id='moviesDiv'></div>
    `; 
    for (let movie of movies){
        document.getElementById('moviesDiv').innerHTML += /*HTML*/` 
            <div class="movieCards" id=movieCard${movie.id}>
                <h2 class="movieTitles">${movie.title}</h2>
                <img src="./img/movieCovers/${movie.cover}" class="coverImages">
                <p class=infoSpan>Info about this movie:</p>
                <div><span class=infoSpan>Rating: </span><span class="movieInfoSpan">${movie.overallRating}/1000</span></div>
                <div><span class=infoSpan>Your rating: </span><span class="movieInfoSpan">${movie.personalRating}/1000</span></div>
                <div><span class=infoSpan>Length: </span><span class="movieInfoSpan">${movie.duration}</span></div>
                <div><span class=infoSpan>Genre: </span><span class="movieInfoSpan">${movie.genre}</span></div>
                <div><span class=infoSpan>Directed by: </span><span class="movieInfoSpan">${movie.directors}</span></div>
                <div><span class=infoSpan>Staring: </span><span class="movieInfoSpan">${movie.staringActors}</span></div>
                <div class="movieDescriptionDiv"><span class=infoSpan>Description:</span><span class="movieInfoSpan">${movie.description}</span></div>
                <div><span class=infoSpan></span><span class="movieInfoSpan"></span></div>
                <button onclick="addMovieToLoggedInUserFavorites(${movie.id})">Add to favorites</button>
            </div>
    `;
    }
}