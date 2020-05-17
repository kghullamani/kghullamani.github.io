const themeToggleButton = document.querySelector('.theme');
const root = document.documentElement;
let theme = 'light';

const colorRed = '#8b0000';
const colorBlue = '#45405a';
const colorGrey = '#dcdcdc';
const colorWhite = '#ffffff';
const colorBlack = '#000000';
const colorBeige = '#278ea5';
const colorLightBlue = '#21e6c1';

setTimeout(function () {
  document.querySelector('.loader').style.opacity = 0;
  document.querySelector('.page').style.display = 'block';
}, 2500);

themeToggleButton.addEventListener('click', toggleTheme);

function toggleTheme() {
  if (theme === 'light') {
    root.style.setProperty('--color-outskirts', colorBeige);
    root.style.setProperty('--color-text', colorLightBlue);
    root.style.setProperty('--color-skill', colorBeige);
    root.style.setProperty('--color-background', colorBlack);
    theme = 'dark';
    themeToggleButton.innerHTML = 'Light Mode';
  } else {
    initializeTheme();
    theme = 'light';
    themeToggleButton.innerHTML = 'Dark Mode';
  }
}

function initializeTheme() {
  root.style.setProperty('--color-outskirts', colorRed);
  root.style.setProperty('--color-text', colorBlue);
  root.style.setProperty('--color-skill', colorGrey);
  root.style.setProperty('--color-background', colorWhite);
  root.style.setProperty('--color-loader', colorBlue);
  root.style.setProperty('--color-spinner', colorWhite);
}

initializeTheme();
