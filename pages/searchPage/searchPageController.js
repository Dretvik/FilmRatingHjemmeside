////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search functions and search page
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
        document.getElementById('app').innerHTML = menuLogoAndSearch +/*HTML*/`
            <h1>No search word given</h1>
            <h4>Here is a list of all our movies:</h4>
            <div id='moviesDiv'></div>
            
            `;
            showMoviesView();
    } else {
        const filteredMovies = model.movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        if (filteredMovies.length > 0) {
            displaySearchedMovies(filteredMovies);
        } else {
            app.innerHTML = menuLogoAndSearch + /*HTML*/`
            <h1>Search gave no results!</h1>
            <h4>Here is a list of all our movies:</h4>
            <div id='moviesDiv'></div>
            `;
            showMoviesView();
        }
    }
}