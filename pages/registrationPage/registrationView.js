///////////////////////////////////////////////////////////////////////////////////////////////////////////
// View for registrerings side
function registrationView(){
    app.innerHTML = /*HTML*/`
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