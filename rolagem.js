document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section-hidden");
  
    function revealSections() {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add("section-visible");
        }
      });
    }
  
    // Chama a função ao carregar a página
    revealSections();
  
    // Adiciona um listener para rolagem
    window.addEventListener("scroll", revealSections);
  });
  