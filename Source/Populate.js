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
    //Declare Variables

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
    //-------------------------------------------
    for(var i = 0; i < 6; i++){
        var offsetA, offsetB, offsetC, offsetD, offsetE,offsetF, offsetG, offsetH, offsetI = 0;

        offsetA = 6 + i; offsetB = 17 + i; offsetC = 28 + i; offsetD = 39 + i; offsetE = 50; 
        offsetF = 7 + i; offsetG= 18 + i; offsetH = 29 + i; offsetI = 40 + i;

        var col1 = res.resitor[i].value;
        var col2 = res.resitor[i+offsetA].value;
        var col3 = res.resitor[i+offsetB].value;
        var col4 = res.resitor[i+offsetC].value;
        var col5 = res.resitor[i+offsetD].value;
        var col6 = res.resitor[i+offsetE].value;
        //--------
        var col7 = res.resitor[i+offsetF].value;
        var col8 = res.resitor[i+offsetG].value;
        var col9 = res.resitor[i+offsetH].value;
        var col10 = res.resitor[i+offsetI].value; // Ternary Operator to determine the resistor value

        // --- Display
        console.log("<TR><td>"+col1+"</td><td>"+col2+"</td><td>"+col3+"</td><td>"+col4+"</td><td>"+col5+"</td><td>"+col6+"</td>\n");
        resistorTable += `<TR><td>`+col1+`</td><td>`+col2+`</td><td>`+col3+`</td><td>`+col4+`</td><td>`+col5+`</td><td>`+col6+`</td></TR>`;
        if(i < 5){console.log(`<TR><td>  </td><td>`+col7+`</td><td>`+col8+`</td><td>`+col9+`</td><td>`+col10+`</td><td>    </td></TR>`);
        resistorTable += `<TR><td>  </td><td>`+col7+`</td><td>`+col8+`</td><td>`+col9+`</td><td>`+col10+`</td><td>    </td></TR>`;
        }
    }
    //-------------------------------------------

    resistorTable += `</TR>`;
    console.log(i +" Close the TR tag");

    resistorTable += `      </tbody>
                            </table>
                         </div>
                      </div>
                      </div>`;
    console.log(resistorTable);
    console.log("array size" + res.resitor.length);

        // -- return
        return resistorTable; 
}

function CreateCalculatorTable(){
    var calculatorTable = "<h2>Common Capacitor Values</h2>";
}

//wait until the page is loaded in order to display the data
window.onload = function(){
    var resistorTableMessage = CreateResistorTable();
    var capacitorTableMessage = "";
    var inductorTableMessage = "";
    var resistorTable = document.getElementById('resistorTableTest');
    var capacitorTable = document.getElementById('capacitorTableTest');
    var inductorTable = document.getElementById('inductorTableTest');
    resistorTable.innerHTML = resistorTableMessage;
}