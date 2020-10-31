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
    var resistorTable = `<h3>Resistor values (5% tolerance) ohms</h3>
                            <div class="container">
                            <div class="row">
                            <div class="col-md-12">
                        <table  class="table  table-inverse  table-striped  table-hover">
                        <thead class="thead-dark ">
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead> 
                        <tbody>
                        `
    /*
    res.resitor.forEach(r => {
        resistorTable += `<td>` + r.value +`</td>`;
    });
    */

    for(var i = 0; i < res.resitor.length; i++){
        if(i%(4) == 0){
            console.log("Open the TR tag");
        }
        resistorTable += `<td>` + res.resitor[i].value + `</td>`;
        console.log(res.resitor[i].value)
        /*
        if(i%(4) == 0){
            console.log("Open the TR tag");
        }
        */
    }

    resistorTable += `      </tbody>
                            </table>
                         </div>
                      </div>
                      </div>`;
    console.log(resistorTable);
    console.log("array size" + res.resitor.length);
    return resistorTable;
}

//wait until the page is loaded in order to display the data
window.onload = function(){
    var resistorTableMessage = CreateResistorTable();
    var resistorTable = document.getElementById('resistorTableTest');
    resistorTable.innerHTML = resistorTableMessage;
}