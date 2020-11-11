//JavaScript Modules
import {resistors, capacitors, inductors} from './Data.js';

// Import data
var res = resistors();
var cap = capacitors();
var ind = inductors();

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
        resistorTable += `<TR><td>`+col1+`</td><td>`+col2+`</td><td>`+col3+`</td><td>`+col4+`</td><td>`+col5+`</td><td>`+col6+`</td></TR>`;
        if(i < 5){console.log(`<TR><td>  </td><td>`+col7+`</td><td>`+col8+`</td><td>`+col9+`</td><td>`+col10+`</td><td>    </td></TR>`);
        resistorTable += `<TR><td>  </td><td>`+col7+`</td><td>`+col8+`</td><td>`+col9+`</td><td>`+col10+`</td><td>    </td></TR>`;
        }
    }
    //-------------------------------------------
    resistorTable += `</TR>`;
    resistorTable += `      </tbody>
                            </table>
                         </div>
                      </div>
                      </div>`;
        // -- return
        return resistorTable; 
}

function CreateCapacitorTable(){
    var capacitorTable = `<h2>Common Capacitor Values</h2>
    <div class="container">
    <div class="row">
    <div class="col-md-12">
<table  class="table  table-inverse  table-striped  table-hover">
<thead class="thead-dark ">
    <tr>
        <th></th>
        <th></th>
        <th></th>
    </tr>
</thead> 
<tbody>
`;

    //-------------------------------------------
    for(var i = 0; i < 8; i++){
        var col1, col2, col3;
        col1 = cap.capacitor[i*3].value;
        col2 = cap.capacitor[i*3 + 1].value;
        col3 = cap.capacitor[i*3 + 2].value;

        capacitorTable += `<TR><td>`+col1+`</td><td>`+col2+`</td><td>`+col3+`</td></TR>`;
    }

    //------------------------------------------- 
    capacitorTable += `</TR>`;
    capacitorTable += `      </tbody>
                            </table>
                         </div>
                      </div>
                      </div>`;
        // -- return
    return capacitorTable;
}

function CreateInductorTable(){
    var inductorTable = `<h2>Common Inductor Values</h2>
    <div class="container">
    <div class="row">
    <div class="col-md-12">
<table  class="table  table-inverse  table-striped  table-hover">
<thead class="thead-dark ">
    <tr>
        <th>Value</th>
        <th>Current Rating</th>
    </tr>
</thead> 
<tbody>
    `;
    
    //-------------------------------------------
      for(var i = 0; i < 4; i++){
        var col1 = ind.inductor[i].value;
        var col2 = ind.inductor[i].Amp;

        inductorTable += `<TR><td>`+col1+`</td><td>`+col2+`</td></TR>`;
    }  
    //-------------------------------------------
    
    inductorTable += `</TR>`;
    inductorTable += `      </tbody>
                            </table>
                         </div>
                      </div>
                      </div>`;
        // -- return
    return inductorTable;
}


//wait until the page is loaded in order to display the data
window.onload = function(){
    var resistorTableMessage = CreateResistorTable();
    var capacitorTableMessage = CreateCapacitorTable();
    var inductorTableMessage = CreateInductorTable();
    
    let resistorTable = document.getElementById('resistorTableTest');
    let capacitorTable = document.getElementById('capacitorTableTest');
    let inductorTable = document.getElementById('inductorTableTest');

    if(resistorTable){resistorTable.innerHTML = resistorTableMessage;} 
    if(capacitorTable){capacitorTable.innerHTML = capacitorTableMessage;}
    if(inductorTable){inductorTable.innerHTML = inductorTableMessage;}
}