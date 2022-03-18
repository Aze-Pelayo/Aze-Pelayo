const burgerIcon = document.querySelector(".cmp-burgerIconContainer__icon");
const burgerIconContainer = document.querySelector(".cmp-burgerIconContainer");
const darkModeToggler = document.querySelector(".darkModeToggler");
const nav = document.querySelector(".navContainer");
const anchorLinks = document.querySelectorAll("a[href^='#']");
const main = document.querySelector(".main");

const removeNavClass = () => {
	if (nav.classList.contains("expanded")) {
		nav.classList.remove("expanded");
		burgerIconContainer.classList.remove("expanded");
	}
};

// Toggle Dark Mode
darkModeToggler.addEventListener(
	"click",
	() => {
		document.body.classList.toggle("darkMode");
	},
	false
);

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

// Smooth Scroll to anchor
anchorLinks.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
