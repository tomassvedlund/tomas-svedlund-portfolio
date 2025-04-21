document.addEventListener("DOMContentLoaded", () => {
    const portfolio = document.getElementById("portfolio");
    const sidebarSocials = document.getElementById("sidebar-socials");
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Visa socials
          sidebarSocials.classList.remove("hidden", "opacity-0");
          sidebarSocials.classList.add("opacity-100");
        } else {
          // Göm socials
          sidebarSocials.classList.add("opacity-0");
          setTimeout(() => {
            sidebarSocials.classList.add("hidden");
          }, 500); // vänta på fade out
        }
      },
      {
        threshold: 0.4, // Justera hur mycket av portfolio-sektionen som måste synas
      }
    );
  
    if (portfolio) {
      observer.observe(portfolio);
    }
  });