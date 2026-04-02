
let portionsMenge = 4;
let zutatenMenge = 200;

if (portionsMenge <= 0) {
    alert("Falsche Angabe");
} else {
    let berechneteMenge = zutatenMenge * portionsMenge;
    console.log(berechneteMenge);
}

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



