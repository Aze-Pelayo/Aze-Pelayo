const toggleMenu = (() => {
    const burgerIcon = document.querySelector(".cmp-burgerIconContainer__icon");
    const burgerIconContainer = document.querySelector(".cmp-burgerIconContainer");
    const nav = document.querySelector(".navContainer");

    burgerIcon.addEventListener("click", () => {
        nav.classList.toggle("expanded");
        burgerIconContainer.classList.toggle("expanded");
    });
})();

const toggleDarkMode = () => {
    const toggler = document.querySelector(".darkModeToggle");
    // let img = document.getElementById("withDarkMode").src;

    // const changeImgSrc = (src, mode) => {
    //     const index = src.length - 5;
    //     const newSrc = src.substring(0, index) + mode + src.substring(index+1);
    //     return newSrc;
    // }

    const onClick = () => {
        document.body.classList.toggle("darkMode");
    };

    toggler.addEventListener("click", onClick(), false);
};
