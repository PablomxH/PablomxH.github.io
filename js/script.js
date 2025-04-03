document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".sidebar ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});

document.addEventListener("mousemove", (event) => {
    const cursorLight = document.querySelector(".cursor-light");
    cursorLight.style.background = `radial-gradient(circle at ${event.clientX}px ${event.clientY}px, rgba(16, 43, 73, 0.4) 10%, rgba(8, 21, 40, 0) 50%)`;
});




