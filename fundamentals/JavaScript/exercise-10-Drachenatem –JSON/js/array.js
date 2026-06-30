let zutaten = [
    {
        name: "Huhn",
        menge: 1,
        einheit: "Stk"
    },
    {
        name: "Currypulver",
        menge: 10,
        einheit: "g"
    },
    {
        name: "Kokosmilch",
        menge: 250,
        einheit: "ml"
    },
    {
        name: "Ingwer",
        menge: 2,
        einheit: "g"
    },
    {
        name: "Zwiebel",
        menge: 1,
        einheit: "Stk"
    },
    {
        name: "Reis",
        menge: 200,
        einheit: "g"
    },
    {
        name: "Zitronesaft",
        menge: 20,
        einheit: "ml"
    },
    {
        name: "Chili",
        menge: 0.5,
        einheit: "g"
    }
];

console.log(zutaten[0]).name;
console.log(mengen[0]).menge;
console.log(einheiten[0]).einheiten;

for (let i = 0; i < zutaten.length; i++) {

  console.log(
    "Zutat: " + 
    zutaten[i].name + 
    " – " + 
    mengen[i].menge + 
    " " + 
    einheiten[i].einheiten
  );
}
