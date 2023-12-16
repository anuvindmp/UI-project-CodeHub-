function changeTheme(themeName) {
    const themeStyle = document.getElementById('theme-style');
    themeStyle.setAttribute('href', themeName);
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {

        redirectToNewPage();
    }
}
function redirectToNewPage() {
    window.location.href = "home page.html";
}

//validation

function validateForm() {
    var email = document.getElementById("mail").getElementsByTagName("input")[0].value;
    var password = document.getElementById("pass").getElementsByTagName("input")[0].value;

    if (email === "" || password === "") {
        displayPopup("Please fill out all fields.");
        return false;
    }

    if (!isValidEmail(email)) {
        displayPopup("Please enter a valid email address.");
        return false;
    }

    if (!isValidPassword(password)) {
        displayPopup("Please enter a valid password");
        return false;
    }

    if(isValidPassword(password)){
        document.location.href = 'homepage.html';
    }

    return true;
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    return password.length >= 8;
}

function displayPopup(message) {
    var popup = document.getElementById("popup");
    var popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    popup.style.display = "block";

    setTimeout(function() {
        closePopup();
    }, 2000); 
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
