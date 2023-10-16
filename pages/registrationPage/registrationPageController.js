//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Registration Page
function registerUser(){
    const usernameInput = document.getElementById('registerUsername');
    const username = usernameInput.value.charAt(0).toUpperCase() + usernameInput.value.slice(1);
    const email = document.getElementById('registerEmail').value.toLowerCase();
    const password1 = document.getElementById('registerPassword1').value;
    const password2 = document.getElementById('registerPassword1').value;
    
    if(password1.value === password2.value){
        const newUser = {
            username: username,
            email: email,
            password: password1,
            profileImage: './img/profileImages/emptyUser.jpg',
            isAdmin: false,
            description: '',
            favoriteMovies: [],
        };
        model.users.push(newUser);
        // Can set the newly registered user as logged in once registered.
        // model.app.users.loggedInUser = newUser;
        // mainPageView();
        loginView();
    } else {
        alert('Passwords do not match. Please enter the same password in both fields.');
        return;
    }
    
}