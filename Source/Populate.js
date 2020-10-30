//JavaScript Modules
import {resistors, capacitors, inductors} from './Data.js';

// Import data
var res = resistors();
var cap = capacitors();
var ind = inductors();

// Test to display data
console.log(res);
console.log(cap);
console.log(ind);

//console.log(resistorTable);
function CreateResistorTable(){
    var resistorTable = "resistorTableTest <br>"
    res.resitor.forEach(r => {
        resistorTable += r.value +" <br>";
    });
    console.log(resistorTable);
    return resistorTable;
}

//wait until the page is loaded in order to display the data
window.onload = function(){
    var resistorTableMessage ="";
    resistorTableMessage += CreateResistorTable();
    var resistorTable = document.getElementById('resistorTableTest');
    resistorTable.innerHTML = resistorTableMessage;
}