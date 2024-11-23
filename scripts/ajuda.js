document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");

    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Fecha o item atual
    } else {
      // Fecha todos os outros itens
      document.querySelectorAll(".accordion-content").forEach((content) => {
        content.style.maxHeight = null;
      });

      content.style.maxHeight = content.scrollHeight + "px"; // Abre o item atual
    }
  });
});
