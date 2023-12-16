function changeTheme(themeName) {
    const themeStyle = document.getElementById('theme-style');
    themeStyle.setAttribute('href', themeName);
}  


//validation

function validateForm() {
    var firstName = document.getElementById("firstname").getElementsByTagName("input")[0].value;
    var lastName = document.getElementById("lastname").getElementsByTagName("input")[0].value;
    var thirdName = document.getElementById("thirdname").getElementsByTagName("input")[0].value;
    var fourthName = document.getElementById("fourthname").getElementsByTagName("input")[0].value;

    if (firstName === "" || lastName === "" || thirdName === "" || fourthName === "") {
        displayPopup("Please fill out all fields.");
        return false;
    }


    document.location.href = "homepage.html";
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