////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Profile page View

// function profilePageView() {
//     const user = model.app.loggedInUser;
//     const favoriteMovieTitles = user.favoriteMovies.map(movie => movie.title).join(', <br>');
//     app.innerHTML = menuLogoAndSearch + /*HTML*/`
//     <div id="profilePageContainer">
//         <h2>Hello ${user.username}, welcome to your profile!</h2>
//         <br>
//         <div id="profileInfoDiv">
//         <div class='profileInfoGridAreaA'><h2>About ${user.username} </h2>${user.description}</div>
//         <img class="prorfileImages" class='profileInfoGridAreaA' src="${user.profileImage}">
//             <div><h2>Your Favorite Movies:</h2> <br>
//                 <div id="favoriteMoviesDivProfilePage">${favoriteMovieTitles}</div>
//             </div>
//         </div>
//     </div>
//     `;
// }
function profilePageView() {
    const user = model.app.loggedInUser;
    const favMovies = user.favoriteMovies;
    const movieList = generateFavMovieList(favMovies);
    document.getElementById('app').innerHTML = menuLogoAndSearch + /*HTML*/`
    <button onclick="editProfilePageView()" class="editProfileButtons">Edit Profile Info</button>
    <h2>Hi <span class="usernameProfilePage">${user.displayName}</span>! Welcome to your profile page.</h2>
    <div id="profilePageContainer">
        <div class="personalInfoContainers" class="profilePageGridAreaA">
            <img class="profilePicture" src="${user.profileImage}" alt="Profile Picture">
        </div>
        <div class="personalInfoContainers" class="profilePageGridAreaA">
            <h4 class="h4ProfilePage">About <span class="usernameProfilePage">${user.displayName}</span>:</h4>
            <div id="profilePageInfo">${user.description}</div>
        </div>
        <div class="personalInfoContainers" class="profilePageGridAreaC">
            <h4 class="h4ProfilePage"> My favorite movies:</h4>
            <div id="favMoviesProfilePage"> ${movieList}</div>
        </div>
        <div class="personalInfoContainers" class="profilePageGridAreaB">
            <h4 class="h4ProfilePage">My rated movies:</h4>
            <div id="ratedMoviesProfilePage"> ${user.moviesYouHaveRated}</div>
        </div>
        <div class="personalInfoContainers" class="profilePageGridAreaB"> 
            <h4 class="h4ProfilePage">My favorite genre:</h4>
            <div id="favGenreProfilePage"> ${user.favoriteGenre}</div>
        </div>
    </div>
  `;
}

function editProfilePageView() {
    const user = model.app.loggedInUser;
    const movies = model.movies;

    let movieCheckboxes = '';
    for (let movie of movies) {
        movieCheckboxes += `
            <input type="checkbox" id="${movie.title}" value="${movie.id}" ${
                user.favoriteMovies.some(favMovie => favMovie.id === movie.id) ? 'checked' : ''
            }>
            <label for="${movie.title}">${movie.title}</label><br>
        `;
    }

    document.getElementById('app').innerHTML = menuLogoAndSearch + /*HTML*/ `
    <button onclick="saveProfileInfo()" class="editProfileButtons">Save Profile Info</button>
    <h2>Hi <span class="usernameProfilePage">${user.displayName}</span>! Welcome to your profile page.</h2>
        <div id="profilePageContainer">
            <div class="profileInfo">
                <img class="profilePicture" src="${user.profileImage || 'emptyUser.jpg'}" alt="Profile Picture">
                <br>
                <input id="imageInputField" type="text" value="" placeholder="Add url for profile image">
            </div>
            <div class="personalInfoContainers" id="profilePageInfo">
                <h4 class="h4ProfilePage">Edit display name:</h4>
                <input id="editProfileNameInput" class="editProfileInputs" type="text" value="" placeholder="Enter new display name">
                <h4> Edit your description:</h4>
                <textarea type="text" id="editProfileDescriptionInput" value="" placeholder="${user.description}"></textarea>
                <br>
            </div>
            <div class="personalInfoContainers">
                <h4 class="h4ProfilePage"> My favorite movies:</h4>
                <div id="editFavMoviesProfilePage">
                    ${movieCheckboxes}
                </div>
            </div>
            <div class="personalInfoContainers">
                <h4 class="h4ProfilePage">My rated movies:</h4>
                <div id="ratedMoviesProfilePage"> ${user.moviesYouHaveRated}</div>
            </div>
            <div class="personalInfoContainers">
                <h4 class="h4ProfilePage">My favorite genre:</h4>
                <div id="favGenreProfilePage"> ${user.favoriteGenre}</div>
            </div>
        </div>
    `;
}