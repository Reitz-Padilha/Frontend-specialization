let portionsMenge = 4;
let zutatenMenge = 200;

if (portionsMenge <= 0) {
    alert("Falsche Angabe");
} else {
    let berechneteMenge = zutatenMenge * portionsMenge;
    console.log(berechneteMenge);
}