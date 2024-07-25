try {
    home()
} catch (error) {
    home();
}
function home() {
  // expandir el area de busqueda
  let searchContainerN = document.querySelector(".search-container");
  const expandedSearch = document.querySelector(".expanded-search");
  const mainMenu = document.querySelector(".main-menu");

  document.querySelector(".search-container").addEventListener("click", () => {
    expandedSearch.innerHTML = `<button class="back-btn">⬅ Volver</button>
        <div class="search-container-expanded">
            <input type="text" id="search-input-expanded" placeholder="Buscar por nombre, categoría o precio...">
            <button id="search-button-expanded">
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </button>
        </div>
        <aside class="categories">
            <h2>Categorías</h2>
            <ul class="category-list">
                <li><a href="#" data-category="todos">Todos</a></li>
                <li><a href="#" data-category="combinados">Combinados</a></li>
                <li><a href="#" data-category="platos-calientes">Platos Calientes</a></li>
                <li><a href="#" data-category="sushi">Sushi</a></li>
                <li><a href="#" data-category="entradas">Entradas</a></li>
                <li><a href="#" data-category="sobremesas">Sobremesas</a></li>
                <li><a href="#" data-category="bebidas">Bebidas</a></li>
            </ul>
        </aside>
        <ul class="search-results">
            <!-- Resultados de búsqueda se mostrarán aquí -->
        </ul>`;
    mainMenu.classList.add("hidden");
    expandedSearch.classList.remove("hidden");
    document.getElementById("search-input").style.display = "none";
    searchContainerN.style.display = "none";
    document.querySelector(".container-name-user").style.display = "none";
    document.getElementById("search-button").style.display = "none";
    const backBtn = document.querySelector(".back-btn");
    backBtn.addEventListener("click", () => {
      mainMenu.classList.remove("hidden");
      expandedSearch.classList.add("hidden");
      document.getElementById("search-input").style.display = "flex";
      searchContainerN.style.display = "flex";
      document.querySelector(".container-name-user").style.display = "flex";
      document.getElementById("search-button").style.display = "flex";
    });
  });

  // galeria de imagenes
  const gallery = document.querySelector(".sub-cards-promo");
  const images = gallery.querySelectorAll(".sub-cards-promo .sub-card");
  let currentIndex = 0;
  let intervalId;

  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].scrollIntoView({ behavior: "smooth" });
  }

  function startAutoChange() {
    intervalId = setInterval(changeImage, 5000);
  }

  function stopAutoChange() {
    clearInterval(intervalId);
  }

  gallery.addEventListener("mouseover", stopAutoChange);
  gallery.addEventListener("mouseleave", startAutoChange);

  startAutoChange();
}
