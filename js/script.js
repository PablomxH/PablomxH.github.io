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

function resizeIframe(iframe) {
    try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc && doc.body) {
            iframe.style.height = doc.body.scrollHeight + "px";
        }
    } catch (e) {
        console.warn("No se pudo redimensionar el iframe:", e);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('cart1');

    // Redimensionar cuando carga
    iframe.addEventListener('load', () => {
        resizeIframe(iframe);

        // Redimensionar periódicamente (cada 300ms)
        setInterval(() => {
            resizeIframe(iframe);
        }, 300);
    });
});

