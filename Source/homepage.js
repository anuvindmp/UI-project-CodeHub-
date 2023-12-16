function changeTheme(themeName) {
    const themeStyle = document.getElementById('theme-style');
    themeStyle.setAttribute('href', themeName);
}

document.addEventListener("DOMContentLoaded", function () {
    const textToType = "The best place to build, test, and discover code while connecting with interesting projects and people to populate your personal feed.";
    const typingEffectElement = document.getElementById("main");
  
    function typeText(text, index) {
      if (index < text.length) {
        typingEffectElement.textContent += text.charAt(index);
        index++;
        setTimeout(function () {
          typeText(text, index);
        }, 50); 
      }
    }    
    typeText(textToType, 0);
  });
  
