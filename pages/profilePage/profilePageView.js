////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Profile page View

function profilePageView() {
    const user = model.app.loggedInUser;
    const favoriteMovieTitles = user.favoriteMovies.map(movie => movie.title).join(', <br>');
    app.innerHTML = menuLogoAndSearch + /*HTML*/`
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