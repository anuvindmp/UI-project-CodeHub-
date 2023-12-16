function changeTheme(themeName) {
    const themeStyle = document.getElementById('theme-style');
    themeStyle.setAttribute('href', themeName);
}

function toggleFollow(button) {
    if (button.innerText === 'Follow') {
      button.innerText = 'Following';
      button.classList.add('following');
    } else {
      button.innerText = 'Follow';
      button.classList.remove('following');
    }
  }

  
