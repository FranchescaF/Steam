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

// Función para abrir el modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
}