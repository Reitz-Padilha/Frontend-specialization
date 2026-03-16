document.getElementById('add-task').addEventListener('click', function() {
 
// Den Wert des Eingabefelds holen
var taskValue = document.getElementById('new-task').value;
// Ein neues <li>-Element für die Aufgabe erstellen
var newTask = document.createElement('li');
newTask.textContent = taskValue;
 
// Das neue Element zur Liste hinzufügen
document.getElementById('task-list').appendChild(newTask);
 
// Eingabefeld leeren
document.getElementById('new-task').value = '';
});