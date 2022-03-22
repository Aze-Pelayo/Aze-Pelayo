(function navListeners() {
    const burgerIcon = document.querySelector(".cmp-burgerIconContainer__icon");
    const burgerIconContainer = document.querySelector(".cmp-burgerIconContainer");
    const nav = document.querySelector(".navContainer");
    const main = document.querySelector(".main");

    const removeNavClass = () => {
        if (nav.classList.contains("expanded")) {
            nav.classList.remove("expanded");
            burgerIconContainer.classList.remove("expanded");
        }
    };

    // Toggle Burger Icon and Nav
    burgerIcon.addEventListener("click", () => {
        nav.classList.toggle("expanded");
        burgerIconContainer.classList.toggle("expanded");
    });

    // Close Nav
    main.addEventListener(
        "click",
        () => {
            removeNavClass();
        },
        false
    );

    window.addEventListener(
        "scroll",
        () => {
            removeNavClass();
        },
        false
    );
})();

(function toggleDarkMode() {
    const darkModeToggler = document.querySelector(".darkModeToggler");
    darkModeToggler.addEventListener(
        "click",
        () => {
            document.body.classList.toggle("darkMode");
        },
        false
    );
})();

// Smooth Scroll to anchor
(function anchorSmoothScroll() {
    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
})();

// Intersection Observer API for animation
(function animations() {
    const toAnimateUp = document.querySelectorAll(".animate-up");
    const toAnimateRight = document.querySelector(".animate-right");
    const toAnimateFade = document.querySelectorAll(".animate-fade");

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("animate-up")) {
                    entry.target.classList.add("translateUp");
                } else if (entry.target.classList.contains("animate-right")) {
                    entry.target.classList.add("translateRight");
                } else if (entry.target.classList.contains("animate-fade")) {
                    entry.target.classList.add("fadeIn");
                }
                observer.unobserve(entry.target);
            }
        });
    };

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(callback, options);

    toAnimateUp.forEach((item) => {
        observer.observe(item);
    });
    toAnimateFade.forEach((item) => {
        observer.observe(item);
    });
    observer.observe(toAnimateRight);
})();
