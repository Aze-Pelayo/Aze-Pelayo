const toggleMenu = (() => {

    const burgerIcon = document.querySelector('.cmp-burgerIconContainer__icon');
    const burgerIconContainer = document.querySelector('.cmp-burgerIconContainer');
    const nav = document.querySelector('.navContainer');

    burgerIcon.addEventListener('click', ()=> {
        nav.classList.toggle('expanded');
        burgerIconContainer.classList.toggle('expanded');
    })

})();

const toggleDarkMode = () => {
    const toggler = document.querySelector('.darkModeToggle');
    toggler.addEventListener('click', () => {
        toggler.checked ? darkMode() : lightMode();

    })
};

const darkMode = () => {
    document.body.classList.add('darkMode');
}

const lightMode = () => {
    document.body.classList.remove('darkMode');
}