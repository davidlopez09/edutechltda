// ===== CURSOR =====
const cursor = document.getElementById("cursor");
const follower = document.getElementById("cursorFollower");
let mouseX = 0,
    mouseY = 0,
    followerX = 0,
    followerY = 0;
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX - 6 + "px";
    cursor.style.top = mouseY - 6 + "px";
});
function animateFollower() {
    followerX += (mouseX - followerX - 18) * 0.12;
    followerY += (mouseY - followerY - 18) * 0.12;
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";
    requestAnimationFrame(animateFollower);
}
animateFollower();
document.querySelectorAll("a, button, .service-card, .project-card").forEach((el) => {
    el.addEventListener("mouseenter", () => follower.classList.add("hovered"));
    el.addEventListener("mouseleave", () => follower.classList.remove("hovered"));
});

// ===== CODE PARTICLES =====
const particles = document.getElementById("codeParticles");
const snippets = [
    "<div>",
    "</div>",
    "function()",
    "const app",
    "import React",
    ".map()",
    "async/await",
    "API.get()",
    "useState()",
    ".then()",
    "export default",
    "border-radius",
    "flex-box",
    "grid",
    "@media",
    "npm install",
];
for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "code-particle";
    p.textContent = snippets[Math.floor(Math.random() * snippets.length)];
    p.style.cssText = `left:${Math.random() * 100}%;animation-duration:${8 + Math.random() * 12}s;animation-delay:${Math.random() * 15}s;`;
    particles.appendChild(p);
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
    document.querySelectorAll(".stat-num[data-count]").forEach((el) => {
        const target = parseInt(el.getAttribute("data-count"));
        const suffix = target === 100 ? "%" : "+";
        let start = 0;
        const duration = 2000;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start = Math.min(start + step, target);
            el.textContent = Math.floor(start) + suffix;
            if (start >= target) clearInterval(timer);
        }, 16);
    });
}
let countersStarted = false;
const heroObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                setTimeout(animateCounters, 600);
            }
        });
    },
    { threshold: 0.3 },
);
const heroStats = document.querySelector(".hero-stats");
if (heroStats) heroObserver.observe(heroStats);

// ===== AOS =====
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });

    // Header scroll
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 60);
    });

    // Mobile menu
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));
    document
        .querySelectorAll(".nav-links a")
        .forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("active")));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const t = document.querySelector(anchor.getAttribute("href"));
            if (t) window.scrollTo({ top: t.offsetTop - 0, behavior: "smooth" });
        });
    });

    // GSAP hero entrance
    if (typeof gsap !== "undefined") {
        gsap.fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
        gsap.fromTo(".hero-text h1", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay: 0.4 });
        gsap.fromTo(".hero-text p", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.65 });
        gsap.fromTo(".hero-btns", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.85 });
        gsap.fromTo(".hero-stats", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.05 });
        gsap.fromTo(".hero-visual", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
    }

    // Modal
    const modal = document.getElementById("projectModal");
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDescription");
    const closeBtn = document.querySelector(".close-modal");
    document.querySelectorAll(".view-project").forEach((btn) => {
        btn.addEventListener("click", () => {
            modalImg.src = btn.getAttribute("data-img");
            modalTitle.textContent = btn.getAttribute("data-title");
            modalDesc.textContent = btn.getAttribute("data-description");
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });
    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
});
