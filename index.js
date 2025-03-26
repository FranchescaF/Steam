document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".custom-search");
    const searchButton = document.querySelector(".custom-btn");
    const gameCards = document.querySelectorAll(".card"); // Asegúrate de que las tarjetas tengan la clase .card

    searchButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el envío del formulario

      const query = searchInput.value.toLowerCase().trim(); // Obtiene el valor del input y lo convierte a minúsculas

      gameCards.forEach((card) => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        if (title.includes(query)) {
          card.style.display = "block"; // Muestra la tarjeta si coincide
        } else {
          card.style.display = "none"; // Oculta las tarjetas que no coinciden
        }
      });
    });
  });

  