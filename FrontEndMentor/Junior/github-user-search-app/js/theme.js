// Theme JS

const themeBtn = document.querySelector('.btnSwitch');

function getCurrentTheme() {
    // This checks the system's default theme. 
    // If the theme scheme is dark, will set it to dark if not, it'll be light

    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    localStorage.getItem('site.theme') ? theme = localStorage.getItem('site.theme'): null;

    return theme;
}

function loadTheme(theme) {
    const root = document.querySelector(':root');

    if (theme === 'light') {
        themeBtn.innerHTML = 
        `<span>DARK</span>
        <img src="/assets/icon-moon.svg" alt="Dark">`
    } else {
        themeBtn.innerHTML = 
        `<span>LIGHT</span>
        <img src="/assets/icon-sun.svg" alt="Light">`
    }

    root.setAttribute('color-scheme', `${theme}`);
}

themeBtn.addEventListener('click', () => {
    let theme = getCurrentTheme();
    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    localStorage.setItem('site.theme', `${theme}`);
    loadTheme(theme);

});

window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme());
})
