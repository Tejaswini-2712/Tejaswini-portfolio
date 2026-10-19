
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Mobile navigation
if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navbar.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navbar.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

// Automatically update copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Highlight the current section in navigation
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar a");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    navLinks.forEach(function (link) {
                        const active =
                            link.getAttribute("href") === "#" + entry.target.id;

                        link.classList.toggle("active", active);
                    });
                }
            });
        },
        { rootMargin: "-25% 0px -60% 0px" }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });
}
