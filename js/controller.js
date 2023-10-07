//Controller

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Login Page

//Login function
function userLogin(username, password){
    const usernameInput = document.getElementById('loginUsernameInput');
    username = usernameInput.value.charAt(0).toUpperCase() + usernameInput.value.slice(1);
    password = document.getElementById('loginPasswordInput').value;
    for (let user of model.users){
        if (username === user.username && password === user.password){
            model.app.loggedInUser = user;
            model.app.currentPage = 'mainPage';
            mainPageView();
            return true;
        }
    }
    alert('username or password is wrong, try again');
    return false;
}
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
            profileImage: '',
            isAdmin: false,
            description: '',
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main page 

// Logout funtion
function userLogout(){
    model.app.loggedInUser = null;
    loginView();
}
