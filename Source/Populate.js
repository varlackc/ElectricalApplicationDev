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
    console.log("Made it to the Resistor Table");
    var resistorTable = ""
    res.resitor.forEach(r => {
        resistorTable += r.value + " "+r.colors[0]+"<br>";
    });
    console.log(resistorTable);
}

//wait until the page is loaded in order to display the data
window.onload = function(){
    var resistorTable = document.getElementById('resistorTableTest');
    resistorTable.innerHTML = 'The Resistor Table Test Succeded';
}