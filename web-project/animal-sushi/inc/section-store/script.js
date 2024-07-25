let btnCurrentDir = document.querySelector(".current-address");
let contAddAdreCurrent = document.querySelector(
  ".container-store .cont-header-store .cont-in-direction .cont-select-an-address .cont-add-address"
);
let formDir = document.querySelector(
  ".container-store .cont-header-store .cont-in-direction .cont-select-an-address .cont-add-address .form-dir"
);
btnCurrentDir.addEventListener("click", () => {
  document.querySelector(
    ".container-store .cont-header-store .cont-in-direction .cont-select-an-address"
  ).style.height = "500px";
  document.getElementById("insert-dir-in").addEventListener("keydown", () => {
    if (document.getElementById("insert-dir-in").value.length > 6) {
      contAddAdreCurrent.style.height = "100%";
      formDir.style.height = "100%";
      document.getElementById("btn-cancel-dir").addEventListener("click", ()=>{
        document.getElementById("insert-dir-in").value = "";
        if (document.getElementById("insert-dir-in").value.length === 0) {
            formDir.style.height = "0%";
              contAddAdreCurrent.style.height = "7%";

        }
      });
    } else if (document.getElementById("insert-dir-in").value.length === 0) {
      contAddAdreCurrent.style.height = "7%";
      formDir.style.height = "0%";
    }

    document.addEventListener("click", (event) => {
      const isClickInsideMenu =
        btnCurrentDir.contains(event.target) ||
        contAddAdreCurrent.contains(event.target) ||
        formDir.contains(event.target);
      if (!isClickInsideMenu) {
        contAddAdreCurrent.style.height = "7%";
        formDir.style.height = "0%";
        document.querySelector(
          ".container-store .cont-header-store .cont-in-direction .cont-select-an-address"
        ).style.height = "0%";
      }
    });
  });
});
