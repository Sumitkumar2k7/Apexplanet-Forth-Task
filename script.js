hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ========Hero-sections========>

const roles = [
    "Full Stack Developer",
    "web Developer",
    "JavaScript Enthusiast",
    "Tech Problem Solver",
];

const typingElement = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 75;
let pauseBetweenRoles = 1500;

function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, pauseBetweenRoles);
            return;
        }
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}
document.addEventListener("DOMContentLoaded", () => {
    if (typingElement) {
        type();
    }
});