////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search functions and search page
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
        // Display all movies if the search term is empty
        return; //Have to fix this!
    } else {
        // Filter the movies based on the search term and display the matching ones
        const filteredMovies = model.movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        if (filteredMovies.length > 0) {
            // Display the filtered movies
            displaySearchedMovies(filteredMovies);
        } else {
            // No matching movies found
            app.innerHTML =/*HTML*/`
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
            <!--  Search bar and for title function -->
            <div class="searchDiv">
            <input type="text" id="searchInput" placeholder="Search movies...">
            <button onclick="performSearch()">Search</button>
            </div>
            `;
        }
    }
}