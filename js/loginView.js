///////////////////////////////////////////////////////////////////////////////////////////////////////////
//View for Login side
function loginView(){
    app.innerHTML = /*HTML*/`
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