console.log("Hello, World");

const menuIconCont = document.getElementById("header__menu-container");
let isOpened = false;

function toggleMenu() {
    // Toggle menu navigation to slide out
    const mobileNav = document.getElementById("mobile-menu");
    const openNav = "0rem",
        closeNav = "-17rem";
    mobileNav!.style.left = isOpened ? closeNav : openNav;

    const navClosed = "header__mobile-menu--closed",
        navOpened = "header__mobile-menu--opened";

    mobileNav!.classList.replace(
        isOpened ? navOpened : navClosed,
        isOpened ? navClosed : navOpened
    );

    isOpened = !isOpened;

    // Disable scrolling
    const htmlTag = document.body.parentElement;
    htmlTag!.style.overflowY = isOpened ? "hidden" : "initial";
}

menuIconCont!.addEventListener("keypress", function (e) {
    if (e.key !== "Enter") return;

    toggleMenu();
});

menuIconCont!.addEventListener("click", function () {
    toggleMenu();
});
