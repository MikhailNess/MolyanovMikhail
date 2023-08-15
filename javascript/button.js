document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    const backToTopBtn = document.getElementById("backToTop");

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            backToTopBtn.style.opacity = "1";
        } else {
            backToTopBtn.style.opacity = "0";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        scroll({
            top: 0,
            behavior: "smooth"
        });
    });
});