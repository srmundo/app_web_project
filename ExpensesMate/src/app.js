import { createLinkStyle } from "./scripts/createLinkStyle.js";
import { home, updateScore } from "./views/home.js";
import { transactions, funcTransactions } from "./views/transactions.js";
import { reports, funcReport } from "./views/reports.js";
import { goals } from "./views/goals.js";
import { settings } from "./views/settings.js";
import { profile } from "./views/profile.js";
import { useState } from "./scripts/useState.js";
globalThis.addEventListener("DOMContentLoaded", main());
const { jsPDF } = window.jspdf;
function main() {
  const [getActiveButton, setActiveButton] = useState(0);
  const containerView = document.querySelector(".section-app");
  let exampleStorage = ["default-style"];
  if (exampleStorage[0] === "default-style") {
    createLinkStyle("./css/default-styles.css");
  }

  loadView("home", containerView);

  const buttonsAside = document.querySelectorAll(
    ".aside-section-app .aside-app ul li button"
  );

  bntAside();
  buttonsAside.forEach((button, index) => {
    button.addEventListener("click", () => {
      setActiveButton(index);
      bntAside();
    });
  });

  function bntAside() {
    buttonsAside.forEach((button, index) => {
      if (index === getActiveButton()) {
        button.classList.add("button-active");
        switch (button.innerText) {
          case "Home":
            loadView("home", containerView);
            updateScore(75);
            break;
          case "Transactions":
            loadView("transactions", containerView);
            funcTransactions();
            break;
          case "Reports":
            loadView("reports", containerView);
            funcReport(jsPDF);
            break;
          case "Goals":
            loadView("goals", containerView);
            break;
          case "Settings":
            loadView("settings", containerView);
            break;
          case "Profile":
            loadView("profile", containerView);
            break;
        }
      } else {
        button.classList.remove("button-active");
      }
    });
  }
}

function loadView(view, containerView) {
  switch (view) {
    case "home":
      containerView.innerHTML = home();
      break;
    case "transactions":
      containerView.innerHTML = transactions();
      break;
    case "reports":
      containerView.innerHTML = reports();
      break;
    case "goals":
      containerView.innerHTML = goals();
      break;
    case "settings":
      containerView.innerHTML = settings();
      break;
    case "profile":
      containerView.innerHTML = profile();
      break;
    default:
      break;
  }
}
