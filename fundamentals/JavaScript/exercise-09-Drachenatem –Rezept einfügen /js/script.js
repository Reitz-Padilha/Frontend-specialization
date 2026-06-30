// Eingabefeld und Zutatenliste aus dem HTML holen
const portionsInput = document.getElementById("portions-input");
const ingredientsList = document.getElementById("ingredients-list");
const errorMessage = document.getElementById("error-message");

function zeigeZutaten(portionen) {
  let html = "";

  for (let i = 0; i < zutaten.length; i++) {
    const neueMenge = mengen[i] * portionen;

    html += `
      <li>
        <span>${zutaten[i]}</span>
        <span>${neueMenge} ${einheiten[i]}</span>
      </li>
    `;
  }

  ingredientsList.innerHTML = html;
}

function pruefePortionen() {
  const portionen = Number(portionsInput.value);

  if (portionen <= 0 || isNaN(portionen)) {
    errorMessage.textContent = "Bitte gib eine Zahl größer als 0 ein.";
    ingredientsList.innerHTML = "";
    return;
  }

  errorMessage.textContent = "";
  zeigeZutaten(portionen);
}

portionsInput.addEventListener("input", pruefePortionen);

pruefePortionen();


// Popup für Allergene
const infoBtn = document.getElementById("infoBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

if (infoBtn && closeBtn && overlay) {
  infoBtn.addEventListener("click", function () {
    overlay.classList.toggle("hidden");
  });

  closeBtn.addEventListener("click", function () {
    overlay.classList.toggle("hidden");
  });
}
