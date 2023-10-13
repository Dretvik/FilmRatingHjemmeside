//View
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//View for Login side
function loginView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="loginPageContainer">
        <div id="loginContainer">
            <img id="turtlePowerLogo" src="${model.app.logo}.jpg">
            <h1>Welcome to TurtlePower Movies</h1>
            <div class="loginDivs">Username:
            <input autofocus="true" id="loginUsernameInput" type="text" placeholder="Username" value=""></div>
            <br>
            <div class="loginDivs">Password:
            <input id="loginPasswordInput" type="password" placeholder="Password" value=""></div>
            <br>
            <div id= "loginButtonsDiv">
            <button id="loginButton" onclick="userLogin()">Login</button>
            <button id="registerButton" onclick="registrationView()">Register</button>
         </div>
         <br>
         <button onclick="showForgotPasswordDiv()">Forgot password?</button>
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
    const usernameInput = document.getElementById('loginUsernameInput');
    const passwordInput = document.getElementById('loginPasswordInput');
    usernameInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter'){
            passwordInput.focus();
        }
    });
    passwordInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter'){
            userLogin();
        }
    });
}
function showForgotPasswordDiv(){
    movieDivStyle = document.getElementById('forgotPasswordDiv').style;
    if (movieDivStyle.display === 'none'){
        movieDivStyle.display = 'block';
    } else {
        movieDivStyle.display = 'none';
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// View for registrerings side
function registrationView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="registrationPageContainer">
        <div id="registrationContainer">
            <img id="turtlePowerLogo" src="${model.app.logo}.jpg">
            <h1>TurtlePower Movies</h1>
            <div>Enter your information here:</div>
            <br>
            <div id="registerDiv">
            <div class="registrationDivs">
                <span class="registerGridAreaA">Username:</span>
                <input  id="registerUsername" class="registerGridAreaB" type="text" placeholder="Username" value="">
            </div>
            <div class="registrationDivs">
                <span class="registerGridAreaA">e-mail:</span>
                <input id="registerEmail" class="registerGridAreaB" type="email" placeholder="e-mail" value="">
            </div>
            <div class="registrationDivs">
                <span class="registerGridAreaA">Your password:</span>
                <input id="registerPassword1" class="registerGridAreaB" type="text" placeholder="Password" value="">
            </div>
            <div class="registrationDivs">
                <span class="registerGridAreaA">Enter password again:</span>
                <input id="registerPassword2" class="registerGridAreaB" type="text" placeholder="Password" value="">
            </div>
            </div>
            <div id= "registrationButtonsDiv">
            <button id="registerButton" onclick="registerUser()">Register</button>
         </div>
        </div>
    </div>
    `;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hoved View
function mainPageView() {
    document.getElementById('app').innerHTML = /*HTML*/`
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
    <input type="text" id="searchInput" placeholder="Search movies...">
    <button onclick="performSearch()">Search</button>
    </div>
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
        <div class="movieCardsInCarousel" id=movieCard${movie.id}>
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
    moviesCarousel.appendChild(movieCard);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// View for hele biblioteket av filmer
function showMoviesView(){
    for (let movie of model.movies){
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Page

// function searchMovies(query) {
//     const results = [];
//     const lowercaseQuery = query.toLowerCase();

//     for (const movie of model.movies) {
//         if (movie.title.toLowerCase().includes(lowercaseQuery)) {
//             results.push(movie);
//         }
//     }

//     return results;
// }
// function performSearch() {
//     const searchInput = document.getElementById('searchInput');
//     const query = searchInput.value;
//     const searchResults = searchMovies(query);
//     // Need to add what to do with a for loop
// }
// function displaySearchResults(searchResults) {
//     const resultsContainer = document.getElementById('searchResults');
//     resultsContainer.innerHTML = ''; // Clear previous results

//     if (searchResults.length === 0) {
//         resultsContainer.innerHTML = 'No results found.';
//     } else {
//         for (const movie of searchResults) {
//             const resultItem = document.createElement('div');
//             resultItem.textContent = movie.title;
//             resultsContainer.appendChild(resultItem);
//         }
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Profile page View

function profilePageView(){
    const user = model.app.loggedInUser;
    const favoriteMovieTitles = user.favoriteMovies.map(movie => movie.title).join(', <br>');
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="headerDiv">
        <img id="turtlePowerLogo" src="${model.app.logo}.jpg">
        <h1>TurtlePower Movies</h1>
            <!--Adding dropdown menu -->
    <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div class="dropdown-content">
            <button onclick="mainPageView()">Main Page</button>
            <button onclick="profilePageView()">Profile Page</button>
            <button onclick="userLogout()">Logout</button>
      <!-- Add more buttons here if needed -->
         </div>
      </div>
    </div>
    <div id="profilePageContainer">
        <h2>Hello ${user.username}, welcome to your profile!</h2>
        <br>
        <div id="profileInfoDiv">
        <div class='profileInfoGridAreaA'><h2>About ${user.username} </h2>${user.description}</div>
        <img class="prorfileImages" class='profileInfoGridAreaA' src="${user.profileImage}">
            <div><h2>Your Favorite Movies:</h2> <br>
                <div id="favoriteMoviesDivProfilePage">${favoriteMovieTitles}</div>
            </div>
        </div>
    </div>
    `;

    // Langt ifra ferdig med profilside, jobber videre på den snart! 
}