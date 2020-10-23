// Import external JS file using JQuery


    // Declare variables
    var calculatedGlobal = false; // reset value
    var colors = ['black','brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet','grey', 'white'];

    // List of resistors
    var resistors = [];

    // Object of resistor
    var resistor = {value: '', colors: [3]};

    // Initialize the resistor Array
    resistors[
                {value:'10', colors: ['brown', 'black', 'black']},
                {value:'15', colors: ['brown', 'green', 'black']},
                {value:'22', colors: ['red', 'red', 'black']},
                {value:'33', colors: ['orange', 'orange', 'black']},
                {value:'47', colors: ['yellow', 'violet', 'black']},
                {value:'68', colors: ['blue', 'gray', 'black']},
                {value:'100', colors: ['brown', 'black', 'brown']},
                {value:'120', colors: ['brown', 'red', 'brown']},
                {value:'150', colors: ['brown', 'green', 'brown']},
                {value:'180', colors: ['brown', 'grey', 'brown']},
                {value:'220', colors: ['red', 'red', 'brown']},
                {value:'270', colors: ['red', 'violet', 'brown']},
                {value:'330', colors: ['orange', 'orange', 'brown']},
                {value:'390', colors: ['orange', 'white', 'brown']},
                {value:'470', colors: ['yellow', 'violet', 'brown']},
                {value:'560', colors: ['green', 'blue', 'brown']},
                {value:'680', colors: ['blue', 'grey', 'brown']},
                {value:'1.0k', colors: ['brown', 'black', 'red']},
                {value:'1.2k', colors: ['brown', 'red', 'red']},
                {value:'1.5k', colors: ['brown', 'green', 'red']},
                {value:'1.8k', colors: ['brown', 'grey', 'red']},
                {value:'2.2k', colors: ['red', 'red', 'red']},
                {value:'2.7k', colors: ['red', 'violet', 'red']},
                {value:'3.3k', colors: ['orange', 'orange', 'red']},
                {value:'3.9k', colors: ['orange', 'white', 'red']},
                {value:'4.7k', colors: ['yellow', 'violet', 'red']},
                {value:'5.6k', colors: ['green', 'blue', 'red']},
                {value:'6.8k', colors: ['blue', 'grey', 'red']},
                {value:'10k', colors: ['brown', 'black', 'orange']},
                {value:'12k', colors: ['brown', 'red', 'orange']},
                {value:'15k', colors: ['brown', 'green', 'orange']},
                {value:'18k', colors: ['brown', 'grey', 'orange']},
                {value:'22k', colors: ['red', 'red', 'orange']},
                {value:'27k', colors: ['red', 'violet', 'orange']},
                {value:'33k', colors: ['orange', 'orange', 'orange']},
                {value:'39k', colors: ['orange', 'white', 'orange']},
                {value:'47k', colors: ['yellow', 'violet', 'orange']},
                {value:'56k', colors: ['green', 'blue', 'orange']},
                {value:'68k', colors: ['blue', 'grey', 'orange']},
                {value:'100k', colors: ['brown', 'black', 'yellow']},
                {value:'120k', colors: ['brown', 'red', 'yellow']},
                {value:'150k', colors: ['brown', 'grey', 'yellow']},
                {value:'180k', colors: ['brown', 'grey', 'yellow']},
                {value:'220k', colors: ['red', 'red', 'yellow']},
                {value:'270k', colors: ['red', 'violet', 'yellow']},
                {value:'330k', colors: ['orange', 'orange', 'yellow']},
                {value:'390k', colors: ['orange', 'white', 'yellow']},
                {value:'470k', colors: ['yellow', 'violet', 'yellow']},
                {value:'560k', colors: ['green', 'blue', 'yellow']},
                {value:'680k', colors: ['blue', 'grey', 'yellow']},
                {value:'1.0M', colors: ['brown', 'black', 'green']},
                {value:'1.5M', colors: ['brown', 'green', 'green']},
                {value:'2.2M', colors: ['red', 'red', 'green']},
                {value:'3.3M', colors: ['orange', 'orange', 'green']},
                {value:'4.7M', colors: ['yellow', 'violet', 'green']},
                {value:'6.8M', colors: ['blue', 'grey', 'green']}
            ];
            
    var resistorsLength = resistors.length;
    /**
     * Find Voltage Given Current and Resistance
     * @param {Electrical Current In Amps} current 
     * @param {Electrical Resistance In Ohms} resistance 
     */
    var CalculateVoltageGivenCurrentResistance = function(current, resistance) {
        var voltage = current * resistance;
        return voltage;
    };

    /**
     * Find Current Given Voltage and Resistance
     * @param {Electrical Voltage In Volts} voltage 
     * @param {Electrical Resistance In Ohms} resistance 
     */
    var CalculateCurrentGivenVoltageResistance = function(voltage, resistance) {
        var current = voltage / resistance;
        return current;
    };

    /**
     * Find Resistance Given Voltage and Current
     * @param {Electrical Voltage In Volts} voltage 
     * @param {Electrical Resistance In Ohms} current 
     */
    var CalculateResistanceGivenVoltageCurrent = function(voltage, current) {
        var resistance = voltage / current;
        if (resistance < 0) {
            resistance = -1.0 * resistance;
        }
        return resistance;
    };

    /**
     * Find Power Given Voltage and Current
     * @param {Electrical Voltage In Volts} voltage 
     * @param {Electrical Current In Amps} current 
     */
    var PowerGivenVoltageCurrent = function(voltage, current) {
        var power = voltage * current;
        return power;
    };

    /**
     * Find Power Given Resistance and Current
     * @param {Electrical Resistance In Ohms} resistance 
     * @param {Electrical Current In Amps} current 
     */
    var PowerGivenResistantCurrent = function(resistance, current) {
        var power = (current * current) * resistance;
        return power;
    };

    /**
     * Find Power Given Voltage and Resistance
     * @param {Electrical Voltage In Volts} voltage 
     * @param {Electrical Resistance In Ohms} resistance 
     */
    var PowerGivenVoltageResistance = function(voltage, resistance) {
        var power = (voltage * voltage) / resistance;
        return power;
    };

    /**
     * Clear the input fields
     */
    var ClearFields = function() {
        var voltage = document.getElementById("voltage");
        var current = document.getElementById("current");
        var resistance = document.getElementById("resistance");
        var power = document.getElementById("power");
        console.log("Reset");
        voltage.value = null;
        current.value = null;
        resistance.value = null;
        power.value = null;
        calculatedGlobal = false;
    };

    /**
     * Find the Missing Ohms Law Value
     */
    var FindTheMissingValue = function() {
        //get values
        var result = 0;
        var voltage = document.getElementById("voltage");
        var current = document.getElementById("current");
        var resistance = document.getElementById("resistance");
        var power = document.getElementById("power");

        console.log("made it to the top");
        if (calculatedGlobal == true) {
            console.log("Reset");
            ClearFields();
        }
        // Calculate voltage
        if (voltage.value.length === 0 && current.value.length > 0 && resistance.value.length > 0 && calculatedGlobal == false) {
            console.log("Calculate Voltage");
            result = CalculateVoltageGivenCurrentResistance(current.value, resistance.value);
            voltage.value = result;
            result = PowerGivenResistantCurrent(resistance.value, resistance.value);
            power.value = result;
            document.getElementById("message").innerHTML = " ";
            calculatedGlobal = true;
        }
        // Calculate Current
        else if (voltage.value.length > 0 && current.value.length === 0 && resistance.value.length > 0 && calculatedGlobal == false) {
            console.log("Calculate Current");
            result = CalculateCurrentGivenVoltageResistance(voltage.value, resistance.value)
            current.value = result;
            result = PowerGivenVoltageResistance(voltage.value, resistance.value);
            power.value = result;
            document.getElementById("message").innerHTML = " ";
            calculatedGlobal = true;
        }
        // Calculate Resistance
        else if (voltage.value.length > 0 && current.value.length > 0 && resistance.value.length === 0 && calculatedGlobal == false) {
            console.log("Calculate Resistance");
            result = CalculateResistanceGivenVoltageCurrent(voltage.value, current.value) // Calculate Resistance
            resistance.value = result;
            result = PowerGivenVoltageCurrent(voltage.value, current.value); // Calculate power
            power.value = result;
            document.getElementById("message").innerHTML = " ";
            calculatedGlobal = true;
        }
        // If all values are full calculate Power
        else if (voltage.value.length > 0 && current.value.length > 0 && resistance.value.length > 0 && calculatedGlobal == false) {
            var testVoltage = CalculateVoltageGivenCurrentResistance(current.value, resistance.value);
            if (testVoltage == voltage.value) {
                result = PowerGivenVoltageCurrent(voltage.value, current.value);
                console.log("Power: " + result);
                power.value = result;
                calculatedGlobal = true;

            } else {
                calculatedGlobal = true;
            }
        }
    };

    /**
     * Direct Current Horse Power Calculation
     * @param {Electrical Voltage In Volts} volts 
     * @param {Electrical Current In Amps} amps 
     * @param {Motor Efficiency} efficiency 
     */
    function calculateDirectCurrentHP(volts, amps, efficiency) {
        var conversionFactor = 746;
        var result = 0;
        console.log("Voltage: " + volts.value + " Amp: " + amps.value + " Eff: " + efficiency.value + " Conversion: " + conversionFactor)
        result = (volts.value * amps.value * efficiency.value) / (conversionFactor);
        result = result.toPrecision(4);
        console.log("The Result is: " + result);
        return result;
    }

    /**
     * Single Phase Horse Power Calculation
     * @param {Electrical Voltage In Volts} volts 
     * @param {Electrical Current In Amps} amps 
     * @param {Motor Efficiency} efficiency 
     * @param {Motor Power Factor} powerFactor 
     */
    function calculateSinglePhaseHP(volts, amps, efficiency, powerFactor) {
        var conversionFactor = 746;
        var result = 0;
        console.log("Voltage: " + volts.value + " Amp: " + amps.value + " Eff: " + efficiency.value + " Conversion: " + conversionFactor);
        result = (volts.value * amps.value * efficiency.value * powerFactor.value) / (conversionFactor);
        return result.toPrecision(4);
    }

    /**
     * Three Phase Horse Power Calculation
     * @param {Electrical Voltage In Volts} volts 
     * @param {Electrical Current In Amps} amps 
     * @param {Motor Efficiency} efficiency 
     * @param {Motor Power Factor} powerFactor 
     */
    function calculateThreePhaseHP(volts, amps, efficiency, powerFactor) {
        var conversionFactor = 746;
        var result = 0;
        var threeFaceConversion = 1.73;
        var conversionFactor = 746;
        result = (volts.value * amps.value * efficiency.value * powerFactor.value * threeFaceConversion) /
            conversionFactor;
        return result.toPrecision(4);
    }

    /**
     * Single Phase KVA Power Calculation
     * @param {Electrical Voltage In Volts} volts 
     * @param {Electrical Current In Amps} amps 
     */
    function calculateSinglePhaseKVA(volts, amps) {
        var result = 0;
        result = (volts.value * amps.value) / 1000;
        return result.toPrecision(4);
    }

    /**
     * Three phase KVA power calculation
     * @param {Electrical Voltage In Volts} volts 
     * @param {Electrical Current In Amps} amps 
     */
    function calculateThreePhaseKVA(volts, amps) {
        var result = 0;
        var threeFaceConversion = 1.73;
        result = (volts.value * amps.value * threeFaceConversion) / 1000;
        return result.toPrecision(4);
    }

    /**
     * MultiSection Calculation
     */
    function multiSectionCalculation() {
        // Declare Variables
        var volts = document.getElementById("voltage6");
        var amps = document.getElementById("current6");
        var efficiency = document.getElementById("efficiency6");
        var powerFactor = document.getElementById("powerFactor6");
        var horsePower = document.getElementById("horsePower6");
        var kva = document.getElementById("kva6");
        var calcType = document.getElementById("calculation").value;
        var result = 0;
        console.log("Calculate Result: " + calcType);
        switch (calcType) {
            case "directCurrentHP":
                console.log("Direct Current HP Calculation");
                result = calculateDirectCurrentHP(volts, amps, efficiency);
                console.log("Result: " + result);
                horsePower.value = result;
                break;
            case "singlePhaseHP":
                console.log("Single Phase HP Calculation");
                result = calculateSinglePhaseHP(volts, amps, efficiency, powerFactor);
                console.log("Result: " + result);
                horsePower.value = result;
                break;
            case "threePhaseCurrentHP":
                console.log("Three Phase Current HP");
                result = calculateThreePhaseHP(volts, amps, efficiency, powerFactor)
                console.log("Result: " + result);
                horsePower.value = result;
                break;
            case "singlePhaseKVA":
                console.log("Single Phase KVA");
                console.log("Result: " + result);
                kva.value = calculateSinglePhaseKVA(volts, amps);
                break;
            case "threePhaseKVA":
                console.log("Single Phase KVA");
                console.log("Result: " + result);
                kva.value = calculateThreePhaseKVA(volts, amps);
                break;
            default:
                break;
        }
    }

    /**
     * Resistor Controller Behaviour
     */
    // need to simplify this section
    function getSelectValue() {
        var selectedValue = document.getElementById("Resistor").value;
        console.log("----------------------------------");
        console.log(selectedValue);
        console.log("----------------------------------");
        switch (selectedValue) {
            case "10":
                changeResistorColors('brown','black','black');
                break;
            case "15":
                changeResistorColors('brown', 'green', 'black');
                break;
            case "22":
                changeResistorColors('red','red','black');
                break;
            case "33":
                changeResistorColors('orange','orange','black');
                break;
            case "47":
                changeResistorColors('yellow','violet','black');
                break;
            case "68":
                changeResistorColors('blue','gray','black');
                break;
            case "100":
                changeResistorColors('brown','black','brown');
                break;
            case "120":
                changeResistorColors('brown','red','brown');
                break;
            case "150":
                changeResistorColors('brown','green','brown');
                break;
            case "180":
                changeResistorColors('brown','grey','brown');
                break;
            case "220":
                changeResistorColors('red','red','brown');
                break;
            case "270":
                changeResistorColors('red','violet','brwon');
                break;
            case "330":
                changeResistorColors('orange','orange','brown');
                break;
            case "390":
                changeResistorColors('orange','white','brown');
                break;
            case "470":
                changeResistorColors('yellow','violet','brown');
                break;
            case "560":
                changeResistorColors('green','blue','brown');
                break;
            case "680":
                changeResistorColors('blue','grey','brown');
                break;
            case "1.0k":
                changeResistorColors('brown','black','red');
                break;
            case "1.2k":
                changeResistorColors('brown','red','red');
                break;
            case "1.5k":
                changeResistorColors('brown','green','red');
                break;
            case "1.8k":
                changeResistorColors('brown','grey','red');
                break;
            case "2.2k":
                changeResistorColors('red','red','red');
                break;
            case "2.7k":
                changeResistorColors('red','violet','red');
                break;
            case "3.3k":
                changeResistorColors('orange','orange','red');
                break;
            case "3.9k":
                changeResistorColors('orange','white','red');
                break;
            case "4.7k":
                changeResistorColors('yellow','violet','red');
                break;
            case "5.6k":
                changeResistorColors('green','blue','red');
                break;
            case "6.8k":
                changeResistorColors('blue','grey','red');
                break;
            case "10k":
                changeResistorColors('brown','black','orange');
                break;
            case "12k":
                changeResistorColors('brown','red','orange');
                break;
            case "15k":
                changeResistorColors('brown','green','orange');
                break;
            case "18k":
                changeResistorColors('brown','grey','orange');
                break;
            case "22k":
                changeResistorColors('red','red','orange');
                break;
            case "27k":
                changeResistorColors('red','violet','orange');
                break;
            case "33k":
                changeResistorColors('orange','orange','orange');
                break;
            case "39k":
                changeResistorColors('orange','white','orange');
                break;
            case "47k":
                changeResistorColors('yellow','violet','orange');
                break;
            case "56k":
                changeResistorColors('green','blue','orange');
                break;
            case "68k":
                changeResistorColors('blue','grey','orange');
                break;
            case "100k":
                changeResistorColors('brown','black','yellow');
                break;
            case "120k":
                changeResistorColors('brown','red','yellow');
                break;
            case "150k":
                changeResistorColors('brown','grey','yellow');
                break;
            case "180k":
                changeResistorColors('brown','grey','yellow');
                break;
            case "220k":
                changeResistorColors('red','red','yellow');
                break;
            case "270k":
                changeResistorColors('red','violet','yellow');
                break;
            case "330k":
                changeResistorColors('orange','orange','yellow');
                break;
            case "390k":
                changeResistorColors('orange','white','yellow');
                break;
            case "470k":
                changeResistorColors('yellow','violet','yellow');
                break;
            case "560k":
                changeResistorColors('green','blue','yellow');
                break;
            case "680k":
                changeResistorColors('blue','grey','yellow');
                break;
            case "1.0M":
                changeResistorColors('brown','black','green');
                break;
            case "1.5M":
                changeResistorColors('brown','green','green');
                break;
            case "2.2M":
                changeResistorColors('red','red','green');
                break;
            case "3.3M":
                changeResistorColors('orange','orange','green');
                break;
            case "4.7M":
                changeResistorColors('yellow','violet','green');
                break;
            case "6.8M":
                changeResistorColors('blue','grey','green');
                break;
            default:
                changeResistorColors('black', 'black', 'black');
        }
    }

    function changeResistorColors(bandOneColor, bandTwoColor, bandThreeColor){
                document.getElementById('path1307').style.fill = bandOneColor;
                document.getElementById('path1309').style.fill = bandTwoColor;
                document.getElementById('rect2188').style.fill = bandThreeColor;
    }

    function getSelectTolerance() {
        var selectedTolerance = document.getElementById("Tolerance").value;
        console.log("----------------------------------");
        console.log(selectedTolerance);
        console.log("----------------------------------");
        switch (selectedTolerance) {
            case "5%":
                $(this).attr('id', 'rect2190');
                document.getElementById('rect2190').style.fill = 'url(#linearGradient9206)';
                break;
            case "10%":
                $(this).attr('id', 'rect2190');
                document.getElementById('rect2190').style.fill = '7C8280';
                break;
            case "20%":
                document.getElementById('rect2190').style.fill = 'none';
                break;
        }
    }

    /**
     * Select The Calculation
     */
    function getSelectCalculation() {
        var selectCalculation = document.getElementById("calculation").value;
        console.log("--------------------------------");
        console.log("Calculation Selection: " + selectCalculation);
        console.log("--------------------------------");
        //switch 
        switch (selectCalculation) {
            case "directCurrentHP":
                multipleSectionLabel = document.getElementById("multipleSectionLabel").innerHTML = "Direct Current Horse Power";
                powerFactor = document.getElementById("powerFactor6").disabled = true;
                kva = document.getElementById("kva6").disabled = true;
                voltage = document.getElementById("voltage6").disabled = false;
                current = document.getElementById("current6").disabled = false;
                efficiency = document.getElementById("efficiency6").disabled = false;
                horsePower = document.getElementById("horsePower6").disabled = false;
                //change the color of the answer
                document.getElementById("voltage6").style.backgroundColor = "#9AD58E";
                document.getElementById("current6").style.backgroundColor = "#9AD58E";
                document.getElementById("efficiency6").style.backgroundColor = "#9AD58E";
                document.getElementById("powerFactor6").style.backgroundColor = "initial";
                document.getElementById("horsePower6").style.backgroundColor = "#FFAAAA"; //"#D46D6A";
                document.getElementById("kva6").style.backgroundColor = "initial";
                // Select the Direct Current Horse Power Calculation
                horsePower = calculateDirectCurrentHP(volts, amps, efficiency);
                document.getElementById("horsePower6").value = horsePower;
                console.log(" Calculate Direct Current HP ");
                break;
            case "singlePhaseHP":
                document.getElementById("multipleSectionLabel").innerHTML = "Single Phase Horse Power";
                document.getElementById("powerFactor6").disabled = false;
                document.getElementById("kva6").disabled = true;
                document.getElementById("voltage6").disabled = false;
                document.getElementById("current6").disabled = false;
                document.getElementById("efficiency6").disabled = false;
                document.getElementById("horsePower6").disabled = false;
                //change the color of the answer
                document.getElementById("voltage6").style.backgroundColor = "#9AD58E";
                document.getElementById("current6").style.backgroundColor = "#9AD58E";
                document.getElementById("efficiency6").style.backgroundColor = "#9AD58E";
                document.getElementById("powerFactor6").style.backgroundColor = "#9AD58E";
                document.getElementById("horsePower6").style.backgroundColor = "#FFAAAA"; //"#D46D6A";
                document.getElementById("kva6").style.backgroundColor = "initial";
                // Select the Single Phase Horse Power Calculation
                console.log(" Calculate Single Phase HP ");
                break;
            case "threePhaseCurrentHP":
                document.getElementById("multipleSectionLabel").innerHTML = "Three Phase Current Horse Power";
                document.getElementById("powerFactor6").disabled = false;
                document.getElementById("kva6").disabled = true;
                document.getElementById("voltage6").disabled = false;
                document.getElementById("current6").disabled = false;
                document.getElementById("efficiency6").disabled = false;
                document.getElementById("horsePower6").disabled = false;
                //change the color of the answer
                document.getElementById("voltage6").style.backgroundColor = "#9AD58E";
                document.getElementById("current6").style.backgroundColor = "#9AD58E";
                document.getElementById("efficiency6").style.backgroundColor = "#9AD58E";
                document.getElementById("powerFactor6").style.backgroundColor = "#9AD58E";
                document.getElementById("horsePower6").style.backgroundColor = "#FFAAAA"; //"#D46D6A";
                // Select the Three Phase Current Horse Power Calculation
                console.log(" Calculate Three Phase Current HP ");
                break;
            case "singlePhaseKVA":
                document.getElementById("multipleSectionLabel").innerHTML = "Single Phase KVA";
                document.getElementById("powerFactor6").disabled = true;
                document.getElementById("kva6").disabled = false;
                document.getElementById("voltage6").disabled = false;
                document.getElementById("current6").disabled = false;
                document.getElementById("efficiency6").disabled = true;
                document.getElementById("horsePower6").disabled = true;
                //change the color of the answer
                document.getElementById("voltage6").style.backgroundColor = "#9AD58E";
                document.getElementById("current6").style.backgroundColor = "#9AD58E";
                document.getElementById("efficiency6").style.backgroundColor = "initial";
                document.getElementById("powerFactor6").style.backgroundColor = "initial";
                document.getElementById("horsePower6").style.backgroundColor = "initial";
                document.getElementById("kva6").style.backgroundColor = "#FFAAAA"; //"#D46D6A";
                // Single Phase KVA Calculation
                console.log(" Calculate Single Phase KVA ");
                break;
            case "threePhaseKVA":
                document.getElementById("multipleSectionLabel").innerHTML = "Three Phase KVA";
                document.getElementById("powerFactor6").disabled = true;
                document.getElementById("kva6").disabled = false;
                document.getElementById("voltage6").disabled = false;
                document.getElementById("current6").disabled = false;
                document.getElementById("efficiency6").disabled = false;
                document.getElementById("horsePower6").disabled = true;
                //change the color of the answer
                document.getElementById("voltage6").style.backgroundColor = "#9AD58E";
                document.getElementById("current6").style.backgroundColor = "#9AD58E";
                document.getElementById("efficiency6").style.backgroundColor = "#9AD58E";
                document.getElementById("powerFactor6").style.backgroundColor = "initial";
                document.getElementById("horsePower6").style.backgroundColor = "initial";
                document.getElementById("kva6").style.backgroundColor = "#FFAAAA"; //"#D46D6A";
                // Three Phase KVA Calculation
                console.log(" Calculate Three Phase KVA ");
                break;
            default:
                document.getElementById("multipleSectionLabel").innerHTML = "Select An Option";
                document.getElementById("powerFactor6").disabled = true;
                $("powerFactor6").remove();
                //$( "div" ).remove( ".hello" );
                document.getElementById("kva6").disabled = true;
                $("kva6").remove();
                document.getElementById("voltage6").disabled = true;
                $("voltage6").remove();
                document.getElementById("current6").disabled = true;
                $("current6").remove();
                document.getElementById("efficiency6").disabled = true;
                $("efficiency6").remove();
                document.getElementById("horsePower6").disabled = true;
                $("horsePower6").remove();
                // Select An Option, Default Option
                console.log(" Calculate Multiple Section Label ");
                break;
        }
    }

    // update code section
    function add(type){
        //Create an input type dynamically. 
        var element = document.createElement("input");

        //Different Attributes to the element
        element.setAttribute("type", type);
        element.setAttribute("Value", type);
        element.setAttribute("name", type);
        var foo = document.getElementById("fooBar");
        //append the element in page (in span). 
        foo.appendChild(element);
    }