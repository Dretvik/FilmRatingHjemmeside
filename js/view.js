//View

//View for Login side
function loginView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="loginPageContainer">
        <div id="loginContainer">
            <img id="turtlePowerLogo" src="${model.app.logo}.jpg">
            <h1>Welcome to TurtlePower Movies</h1>
            <div class="loginDivs">Username:<input type="text" placeholder="Username"></div>
            <br>
            <div class="loginDivs">Password:<input type="password" placeholder="Password"></div>
            <br>
            <div id= "loginButtonsDiv">
            <button id="loginButton" onclick="updateMainView()">Login</button>
            <button id="registerButton" onclick="registrationView()">Register</button>
         </div>
         <br>
         <button>Forgot password?</button>
         
         
        </div>
    </div>
    `;
}

// View for registrerings side
function registrationView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="registrationPageContainer">
        <div id="registrationContainer">
            <img id="turtlePowerLogo" src="${model.app.logo}.jpg">
            <h1>TurtlePower Movies</h1>
            <div id="registerDiv">
            <div class="registrationDivs">
                <span class="registerGridAreaA">Username:</span>
                <input class="registerGridAreaB" type="text" placeholder="Username" value="">
            </div>
            <div class="registrationDivs">
                <span class="registerGridAreaA">E-Mail:</span>
                <input class="registerGridAreaB" type="email" placeholder="E-Mail" value="">
            </div>
            <div class="registrationDivs">
                <span class="registerGridAreaA">Your password:</span>
                <input class="registerGridAreaB" type="text" placeholder="Password" value="">
            </div>
            <div class="registrationDivs">
                <span class="registerGridAreaA">Enter password again:</span>
                <input class="registerGridAreaB" type="text" placeholder="Password" value="">
            </div>
            </div>
            <div id= "registrationButtonsDiv">
            <button id="registerButton" onclick="loginView()">Register</button>
         </div>
        </div>
    </div>
    `;
}


// Hoved View
function updateMainView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <img id="turtlePowerLogo" src="${model.app.logo}.jpg">
    <h1>TurtlePower Movies</h1>
    <div id="container">
        <button onclick="loginView()">Logout</button>
        <button onclick="showHideLeaderboard()">Show or hide Leaderboard</button>
        <div id='moviesDiv' style="display: none;"></div>
    <div>
     `;
}



// View for hele biblioteket av filmer
function showMoviesView(){
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
        showMoviesView();
    } else {
        movieDivStyle.display = 'none';
        document.getElementById('moviesDiv').innerHTML = '';
    }
}