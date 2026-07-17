function initNavbar() {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

}
