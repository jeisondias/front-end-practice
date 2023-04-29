// Theme JS

const buttonTheme = document.querySelector('.btnSwitch');

console.log(buttonTheme)

function getCurrentTheme() {
    let theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

    console.log(theme)
    return theme;
}

function loadTheme(theme) {
    const root = document.querySelector(':root');
    console.log(root);
    if (theme === "light") {
        root.setAttribute('color-scheme', 'dark');
    } else {
        root.setAttribute('color-scheme', 'light');
    }
}
