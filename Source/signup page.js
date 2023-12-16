function changeTheme(themeName) {
    const themeStyle = document.getElementById('theme-style');
    themeStyle.setAttribute('href', themeName);
} 

//validation

function validateForm() {
    var firstName = document.getElementById("firstname").getElementsByTagName("input")[0].value;
    var lastName = document.getElementById("lastname").getElementsByTagName("input")[0].value;
    var email = document.getElementById("mail").getElementsByTagName("input")[0].value;
    var phoneNumber = document.getElementById("number").getElementsByTagName("input")[0].value;
    var password = document.getElementById("pass").getElementsByTagName("input")[0].value;

    if (firstName === "" || lastName === "" || email === "" || phoneNumber === "" || password === "") {
        displayPopup("Please fill out all fields.");
        return false;
    }

    if (!isValidEmail(email)) {
        displayPopup("Please enter a valid email address.");
        return false;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
        displayPopup("Please enter a valid phone number.");
        return false;
    }

    if (!isValidPassword(password)) {
        displayPopup("Password must have at least 8 characters.");
        return false;
    }

    if(isValidPassword(password)){
        document.location.href = 'login.html';
    }

    return true;
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    return phoneNumber.length ==10;
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
