"use strict";

window.addEventListener("DOMContentLoaded", async () => {
	//+ header-scroll:
	const header = document.querySelector(".header");

	window.addEventListener("scroll", () => {
		const scrollTop = document.documentElement.scrollTop;
		if (scrollTop >= 10) {
			header.classList.add("bg-blure");
		} else {
			header.classList.remove("bg-blure");
		}
	});

	//+ burger:
	const burger = document.querySelector(".header__burger"),
		activeBurger = document.querySelector(".header__wrapper-nav");

	burger.addEventListener("click", () => {
		activeBurger.classList.toggle("active-burger");
		hiddenElem();
	});

	//+ Переключатель:
	const toggleCheckbox = document.querySelector("#toggle-dark-mode"),
		circle = document.querySelector(".header__circle");

	toggleCheckbox.addEventListener("click", () => {
		circle.classList.toggle("circle-transform");
		toggleCheckbox.classList.toggle("toggle-container-bg");
	});

	function hiddenElem() {
		document.querySelector(".body").classList.toggle("hidden");
	}
});
