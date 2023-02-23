const burgerBtn = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");
const footerYear = document.querySelector(".footer__year");

const navLinks = document.querySelectorAll(".nav__link");
console.log(navLinks);

burgerBtn.addEventListener("click", () => {
	navMobile.classList.toggle("nav-mobile--active");
	burgerBtn.classList.toggle("is-active");
	document.body.classList.toggle("sticky-body");
	// for (let i = 0; i < navLinks.length; i++) {
	// 	navLinks[i].addEventListener("click", () => {
	// 		navMobile.classList.remove("nav-mobile--active");
	// 		burgerBtn.classList.remove("is-active");
	// 		document.body.classList.remove("sticky-body");
	// 	});
	// }

	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
					navMobile.classList.remove("nav-mobile--active");
					burgerBtn.classList.remove("is-active");
					document.body.classList.remove("sticky-body");
				});
	})
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
