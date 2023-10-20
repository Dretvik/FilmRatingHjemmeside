///////////////////////////////////////////////////////////////////////////////////////////////////////////
//View for Login side
function loginView(){
    app.innerHTML = /*HTML*/`
    <div id="loginPageContainer">
        <div id="loginContainer">
            <img id="turtlePowerLogo" src="${model.app.logo}.jpg">
            <h1>Welcome to TurtlePower Movies</h1>
            <div class="loginDivs">Username:
                <input autofocus="true" id="loginUsernameInput" type="text" placeholder="Username" value="">
            </div>
            <br>
            <div class="loginDivs">Password:
                <input id="loginPasswordInput" type="password" placeholder="Password" value="">
            </div>
            <br>
            <div id= "loginButtonsDiv">
                <button id="loginButton" onclick="userLogin()">Login</button>
                <button id="registerButton" onclick="registrationView()">Register</button>
            </div>
            <br>
            <button onclick="showForgotPasswordDiv()">Forgot password?</button>
            <p>Top Rated Movies:</p>
            <div id="topFourMoviesDiv"></div>
            <br>
            <div id="forgotPasswordDiv" style="display: none;">
                Enter your e-mail adress and click send to change your password:
                <br>
                <input id="forgotPasswordInput" type="email" placeholder="Your e-mail" value="">
                <br>
                <button onclick="showForgotPasswordDiv()">Send</button>
            </div>
        </div>
    </div>
    `;
    showTopFourMoviesLoginPageView();
    addEventlistenersLoginPage();
}
function showForgotPasswordDiv(){
    movieDivStyle = document.getElementById('forgotPasswordDiv').style;
    if (movieDivStyle.display === 'none'){
        movieDivStyle.display = 'block';
    } else {
        movieDivStyle.display = 'none';
    }
}
function showTopFourMoviesLoginPageView(){
    const movies = model.movies.slice(); 
    movies.sort((a, b) => b.overallRating - a.overallRating);

    const topFourMoviesDiv = document.getElementById('topFourMoviesDiv');
    topFourMoviesDiv.innerHTML = '';


    for (let i = 0; i < 4; i++) {
        const currentIndex = (currentIndexOfMainCarousel + i) % movies.length;
        const movie = movies[currentIndex];

        const movieCard = document.createElement('div');
        movieCard.classList.add('showTopFourRatedMovies');
        movieCard.innerHTML = /*HTML*/ `
        <div class="movieCards" id=movieCard${movie.id}>
        <h2 class="topFourMovieTitles">${movie.title}</h2>
        <img src="./img/movieCovers/${movie.cover}" class="coverImages">
        <div><span class=infoSpan>Rating: </span><span class="movieInfoSpan">${movie.overallRating}/1000</span></div>
        `;
        topFourMoviesDiv.appendChild(movieCard);
    }
}