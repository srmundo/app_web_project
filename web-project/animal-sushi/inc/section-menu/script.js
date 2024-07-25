try {
  menu();
} catch (error) {
  menu();
}
function menu() {
  const cartBtn = document.querySelector(".cart-btn");
  const contItemCounter = document.querySelector(".cart-counter");
  const cartArea = document.querySelector(".cart");
  let cartCounter = 0;
  let cartTotal = 0;

  const menuBtn = document.querySelector(".menu-btn");
  const menuOptions = document.querySelector(".menu-options");

  // Funcionalidad para mostrar y ocultar las opciones de menú al hacer clic en el botón de menú
  menuBtn.addEventListener("click", () => {
    menuOptions.classList.toggle("active");
  });

  // Escuchar clics fuera del área del menú para cerrarlo si está abierto
  document.addEventListener("click", (event) => {
    const isClickInsideMenu =
      menuBtn.contains(event.target) || menuOptions.contains(event.target);
    if (!isClickInsideMenu) {
      menuOptions.classList.remove("active");
    }
  });

  // Función para actualizar el contador del carrito
  function updateCartCounter() {
    contItemCounter.style.display = "flex";
    contItemCounter.innerText = `${cartCounter}`;
  }

  // Función para actualizar el total del carrito
  function updateCartTotal() {
    const viewTotalCart = document.getElementById("view-total-cart");
    const totalElement = document.querySelector(".cart-total");
    totalElement.textContent = `$${cartTotal.toFixed(2)}`;
    viewTotalCart.textContent = `$${cartTotal.toFixed(2)}`;
    if (contItemCounter.innerText === "0") {
      contItemCounter.style.display = "none";
    }
  }

  // Función para añadir un producto al carrito
  function addToCart(productName, productPrice) {
    cartCounter++;
    cartTotal += productPrice;
    updateCartCounter();
    updateCartTotal();

    const cartItems = document.querySelector(".cart-items");
    const newItem = document.createElement("li");
    newItem.innerHTML = `
        <span>${productName}</span>
        <span>$${productPrice.toFixed(2)}</span>
        <button class="remove-item-btn">Quitar</button>
    `;
    cartItems.appendChild(newItem);

    // Añadir event listener para eliminar ítem
    const removeItemBtn = newItem.querySelector(".remove-item-btn");
    removeItemBtn.addEventListener("click", () => {
      cartCounter--;
      cartTotal -= productPrice;
      updateCartCounter();
      updateCartTotal();
      newItem.remove();
    });
    
  }

  // Ejemplo: Escuchar clics en los botones de "Añadir al carrito"
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Simular datos del producto
      const productName = "Sushi de salmón"; // Nombre del producto
      const productPrice = 10; // Precio del producto
      addToCart(productName, productPrice);
    });
  });

  // Funcionalidad para mostrar y ocultar el área del carrito
  cartBtn.addEventListener("click", () => {
    cartArea.classList.toggle("active");
  });

  document.getElementById("btn-x-cart").addEventListener("click", ()=>{
    cartArea.classList.toggle("active");
  });

  // Función para vaciar el carrito
  function clearCart() {
    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = "";
    cartCounter = 0;
    cartTotal = 0;
    updateCartCounter();
    updateCartTotal();
    cartArea.classList.toggle("active");

  }

  // Escuchar clics en el botón de "Vaciar carrito"
  const clearCartBtn = document.querySelector(".clear-cart-btn");
  clearCartBtn.addEventListener("click", clearCart);

  // Suponiendo que tienes una lista de productos inicial
  let products = [
    {
      id: 1,
      name: "Niguiri de salmón",
      description:
        "Lámina de salmón fresco, cortada con maestría, que descansa sobre un lecho de arroz de sushi perfectamente sazonado",
      category: "Sushi",
      price: 10,
      img: "./inc/section-menu/image/descargar (1).jpeg",
    },
    {
      id: 2,
      name: "Sashimi de atún",
      description:
        "Finas lonchas de atún fresco, cuidadosamente cortadas para resaltar su textura suave y su sabor delicado.",
      category: "sashimi",
      price: 12,
      img: "./inc/section-menu/image/descargar (1).jpeg",
    },
    {
      id: 3,
      name: "Sushi de vegetales",
      category: "Sushi",
      price: 8,
      img: "./inc/section-menu/image/descargar (1).jpeg",
    },
    {
      id: 4,
      name: "Tempura de camarón",
      category: "Entradas",
      price: 15,
      img: "./inc/section-menu/image/descargar (1).jpeg",
    },
    {
      id: 5,
      name: "Edamame",
      category: "Entradas",
      price: 6,
      img: "./inc/section-menu/image/descargar (1).jpeg",
    },
    {
      id: 6,
      name: "Sopa de miso",
      category: "Sopas",
      price: 5,
      img: "./inc/section-menu/image/descargar (1).jpeg",
    },
  ];

  // Función para renderizar los productos en la interfaz
  function renderProducts(productsToRender) {
    const sushiMenu = document.querySelector(".sushi-menu");
    sushiMenu.innerHTML = "";

    productsToRender.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");
      productCard.innerHTML = `
            <div class="cont-img-show">
              <img src="${product.img}" alt="" />
            </div>
            <h3>${product.name}</h3>
            <p>Categoría: ${product.category}</p>
            <p>${product.description}</p>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn">Añadir al carrito</button>
        `;
      sushiMenu.appendChild(productCard);

      // Añadir evento para añadir al carrito (ejemplo)
      const addToCartBtn = productCard.querySelector(".add-to-cart-btn");
      addToCartBtn.addEventListener("click", () => {
        // Lógica para añadir al carrito
        addToCart(product.name, product.price);
      });
    });
  }
  renderProducts(products);
  // Función para filtrar productos por categoría, nombre o precio
  function filterProducts(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    const filteredProducts = products.filter((product) => {
      const nameMatches = product.name.toLowerCase().includes(searchTerm);
      const categoryMatches = product.category
        .toLowerCase()
        .includes(searchTerm);
      const priceMatches = product.price.toString().includes(searchTerm);
      return nameMatches || categoryMatches || priceMatches;
    });
    renderProducts(filteredProducts);
  }

  // Obtener elementos del DOM
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");

  // Escuchar clics en el botón de búsqueda
  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    filterProducts(searchTerm);
  });

  // Escuchar cambios en el campo de entrada para búsqueda en tiempo real
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim();
    filterProducts(searchTerm);
  });

  // Renderizar todos los productos al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
  });
}
