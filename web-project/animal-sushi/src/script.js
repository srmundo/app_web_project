import { loadContent, loadScriptOnce, removeScript } from "./load-content.mjs";

window.onload = ()=>{
    loadHome();
}

// controlar menu bottom
let btnMenu = document.getElementById("menu-btn");
let btnHome = document.getElementById("home-btn");
let btnWallet = document.getElementById("wallet-btn");
let btnStore = document.getElementById("store-btn");


btnMenu.addEventListener("click", loadMenu);
btnHome.addEventListener("click", loadHome);
btnWallet.addEventListener("click", loadWallet);
btnStore.addEventListener("click", loadStore);

function loadHome() {
    removeScript("../inc/section-home/script.js");
    loadContent("../inc/section-home/index.html", document.getElementById("container-main-header"), () => {
        loadScriptOnce("../inc/section-home/script.js");
    });
}

function loadMenu() {
    loadContent("../inc/section-menu/index.html", document.getElementById("container-main-header"), () => {
        const script = document.createElement("script");
        script.src = "../inc/section-menu/script.js";
        document.body.appendChild(script);
    });
}
function loadWallet(){
    removeScript("../inc/section-wallet/script.js");
    loadContent("../inc/section-wallet/index.html", document.getElementById("container-main-header"), () => {
        loadScriptOnce("../inc/section-wallet/script.js");
    });
}

function loadStore(){
    removeScript("../inc/section-store/script.js");
    loadContent("../inc/section-store/index.html", document.getElementById("container-main-header"), () => {
        loadScriptOnce("../inc/section-store/script.js");
    });
}