const revealEls = document.querySelectorAll(".reveal, .project-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.style.boxShadow = window.scrollY > 20
    ? "0 8px 24px -18px rgba(59, 46, 74, 0.25)"
    : "none";
});
