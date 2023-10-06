//Controller

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Login Page

//Login function
function userLogin(username, password){
    username = document.getElementById('loginUsernameInput').value.toLowerCase();
    password = document.getElementById('loginPasswordInput').value;
    console.log('Entered username:', username);
    console.log('Entered password:', password);
    for (let user of model.users){
        if (username === user.username && password === user.password){
            model.app.loggedInUser = user;
            model.app.currentPage = 'mainPage';
            mainPageView();
            return true;
        }
    }
    return false;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main page 

// Logout funtion
function userLogout(){
    model.app.loggedInUser = null;
    loginView();
}
