// Sidebar känner av vilken section man är på. 

document.addEventListener("DOMContentLoaded", () => {
    const indicator = document.getElementById("section-indicator");

    const sections = document.querySelectorAll("section[data-label]");
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const label = entry.target.getAttribute("data-label");
          indicator.textContent = label;
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
  });