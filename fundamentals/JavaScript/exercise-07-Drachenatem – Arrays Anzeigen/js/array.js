let zutaten = ['Huhn', 'Currypulver', 'Kokosmilch', 'Ingwer', 'Zwiebel', 'Reis', 'Zitronesaft', 'Chili'];
let mengen = [ 1, 10, 250, 2, 1, 200, 20, 0.5];
let einheiten = ['Stk', 'g', 'ml', 'ml', 'Stk', 'g', 'ml', 'g'];

console.log(zutaten[0]);
console.log(mengen[0]);
console.log(einheiten[0]);

for (let i = 0; i < zutaten.length; i++) {
    console.log("Zutat: " + zutaten[i] + " – " + mengen[i] + " " + einheiten[i]);}