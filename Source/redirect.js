function handleKeyPress(event) {
    if (event.keyCode === 13) {

        redirectToNewPage();
    }
}
function redirectToNewPage() {
    window.location.href = "search result.html";
}