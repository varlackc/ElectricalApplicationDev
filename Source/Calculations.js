    // Declare variables
    var calculatedGlobal = false; // reset value

    //--------- Find Voltage Given Current and Resistance ---------- //
    /**
     * Find Voltage Given Current and Resistance
     * 
     * @param {Electrical Current In Amps} current 
     * @param {Electrical Resistance In Ohms} resistance 
     */
    var CalculateVoltageGivenCurrentResistance = function(current, resistance) {
        var voltage = current * resistance;
        return voltage;
    };

    //-------- Find Current Given Voltage and Resistance  ---------- //
    /**
     * Find Current Given Voltage and Resistance
     * 
     * @param {Electrical Voltage In Volts} voltage 
     * @param {Electrical Resistance In Ohms} resistance 
     */
    var CalculateCurrentGivenVoltageResistance = function(voltage, resistance) {
        var current = voltage / resistance;
        return current;
    };

    //-------- Find Resistance Given Voltage and Current ----------- //
    /**
     * Find Resistance Given Voltage and Current
     * 
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

    //-------- Find Power Given Voltage and Current -------------- //
    var PowerGivenVoltageCurrent = function(voltage, current) {
        var power = voltage * current;
        return power;
    };
    //-------- Find Power Given Resistance and Current ---------- // 
    var PowerGivenResistantCurrent = function(resistance, current) {
        var power = (current * current) * resistance;
        return power;
    };
    //-------- Find Power Given Voltage and Resistance --------- //
    var PowerGivenVoltageResistance = function(voltage, resistance) {
        var power = (voltage * voltage) / resistance;
        return power;
    };

    // Clear the input fields
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
    // --------- Find the Missing Ohms Law Value -------------- //
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

    // Direct Current Horse Power Calculation
    function calculateDirectCurrentHP(volts, amps, efficiency) {
        var conversionFactor = 746;
        var result = 0;
        console.log("Voltage: " + volts.value + " Amp: " + amps.value + " Eff: " + efficiency.value + " Conversion: " + conversionFactor)
        result = (volts.value * amps.value * efficiency.value) / (conversionFactor);
        result = result.toPrecision(4);
        console.log("The Result is: " + result);
        return result;
    }

    // Single Phase Horse Power Calculation
    function calculateSinglePhaseHP(volts, amps, efficiency, powerFactor) {
        var conversionFactor = 746;
        var result = 0;
        console.log("Voltage: " + volts.value + " Amp: " + amps.value + " Eff: " + efficiency.value + " Conversion: " + conversionFactor);
        result = (volts.value * amps.value * efficiency.value * powerFactor.value) / (conversionFactor);
        return result.toPrecision(4);
    }

    // Three Phase Horse Power Calculation
    function calculateThreePhaseHP(volts, amps, efficiency, powerFactor) {
        var conversionFactor = 746;
        var result = 0;
        var threeFaceConversion = 1.73;
        var conversionFactor = 746;
        result = (volts.value * amps.value * efficiency.value * powerFactor.value * threeFaceConversion) /
            conversionFactor;
        return result.toPrecision(4);
    }

    // Single Phase KVA Power Calculation
    function calculateSinglePhaseKVA(volts, amps) {
        var result = 0;
        result = (volts.value * amps.value) / 1000;
        return result.toPrecision(4);
    }

    // Three phase KVA power calculation
    function calculateThreePhaseKVA(volts, amps) {
        var result = 0;
        var threeFaceConversion = 1.73;
        result = (volts.value * amps.value * threeFaceConversion) / 1000;
        return result.toPrecision(4);
    }
    // ----------------- MultiSection Calculation ---------------------- //
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

    //------------------ Resistor Controller behaviour ----------------- //
    function getSelectValue() {
        var selectedValue = document.getElementById("Resistor").value;
        console.log("----------------------------------");
        console.log(selectedValue);
        console.log("----------------------------------");
        switch (selectedValue) {
            case "10":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'black';
                document.getElementById('rect2188').style.fill = 'black';
                break;
            case "15":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'green';
                document.getElementById('rect2188').style.fill = 'black';
                break;
            case "22":
                document.getElementById('path1307').style.fill = 'red';
                document.getElementById('path1309').style.fill = 'red';
                document.getElementById('rect2188').style.fill = 'black';
                break;
            case "33":
                document.getElementById('path1307').style.fill = 'orange';
                document.getElementById('path1309').style.fill = 'orange';
                document.getElementById('rect2188').style.fill = 'black';
                break;
            case "47":
                document.getElementById('path1307').style.fill = 'yellow';
                document.getElementById('path1309').style.fill = 'violet';
                document.getElementById('rect2188').style.fill = 'black';
                break;
            case "68":
                document.getElementById('path1307').style.fill = 'blue';
                document.getElementById('path1309').style.fill = 'gray';
                document.getElementById('rect2188').style.fill = 'black';
                break;
            case "100":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'black';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "120":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'red';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "150":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'green';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "180":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'grey';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "220":
                document.getElementById('path1307').style.fill = 'red';
                document.getElementById('path1309').style.fill = 'red';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "270":
                document.getElementById('path1307').style.fill = 'red';
                document.getElementById('path1309').style.fill = 'violet';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "330":
                document.getElementById('path1307').style.fill = 'orange';
                document.getElementById('path1309').style.fill = 'orange';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "390":
                document.getElementById('path1307').style.fill = 'orange';
                document.getElementById('path1309').style.fill = 'white';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "470":
                document.getElementById('path1307').style.fill = 'yellow';
                document.getElementById('path1309').style.fill = 'violet';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "560":
                document.getElementById('path1307').style.fill = 'green';
                document.getElementById('path1309').style.fill = 'blue';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "680":
                document.getElementById('path1307').style.fill = 'blue';
                document.getElementById('path1309').style.fill = 'grey';
                document.getElementById('rect2188').style.fill = 'brown';
                break;
            case "1.0k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'black';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "1.2k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'red';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "1.5k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'green';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "1.8k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'grey';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "2.2k":
                document.getElementById('path1307').style.fill = 'red';
                document.getElementById('path1309').style.fill = 'red';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "2.7k":
                document.getElementById('path1307').style.fill = 'red';
                document.getElementById('path1309').style.fill = 'violet';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "3.3k":
                document.getElementById('path1307').style.fill = 'orange';
                document.getElementById('path1309').style.fill = 'orange';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "3.9k":
                document.getElementById('path1307').style.fill = 'orange';
                document.getElementById('path1309').style.fill = 'white';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "4.7k":
                document.getElementById('path1307').style.fill = 'yellow';
                document.getElementById('path1309').style.fill = 'violet';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "5.6k":
                document.getElementById('path1307').style.fill = 'green';
                document.getElementById('path1309').style.fill = 'blue';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "6.8k":
                document.getElementById('path1307').style.fill = 'blue';
                document.getElementById('path1309').style.fill = 'grey';
                document.getElementById('rect2188').style.fill = 'red';
                break;
            case "10k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'black';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "12k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'red';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "15k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'green';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "18k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'grey';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "22k":
                document.getElementById('path1307').style.fill = 'red';
                document.getElementById('path1309').style.fill = 'red';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "27k":
                document.getElementById('path1307').style.fill = 'red';
                document.getElementById('path1309').style.fill = 'violet';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "33k":
                document.getElementById('path1307').style.fill = 'orange';
                document.getElementById('path1309').style.fill = 'orange';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "39k":
                document.getElementById('path1307').style.fill = 'orange';
                document.getElementById('path1309').style.fill = 'white';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "47k":
                document.getElementById('path1307').style.fill = 'yellow';
                document.getElementById('path1309').style.fill = 'violet';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "56k":
                document.getElementById('path1307').style.fill = 'green';
                document.getElementById('path1309').style.fill = 'blue';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "68k":
                document.getElementById('path1307').style.fill = 'blue';
                document.getElementById('path1309').style.fill = 'grey';
                document.getElementById('rect2188').style.fill = 'orange';
                break;
            case "100k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'black';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "120k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'red';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "150k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'grey';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "180k":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'grey';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "220k":
                document.getElementById('path1307').style.fill = 'red';
                document.getElementById('path1309').style.fill = 'red';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "270k":
                document.getElementById('path1307').style.fill = 'red';
                document.getElementById('path1309').style.fill = 'violet';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "330k":
                document.getElementById('path1307').style.fill = 'orange';
                document.getElementById('path1309').style.fill = 'orange';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "390k":
                document.getElementById('path1307').style.fill = 'orange';
                document.getElementById('path1309').style.fill = 'white';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "470k":
                document.getElementById('path1307').style.fill = 'yellow';
                document.getElementById('path1309').style.fill = 'violet';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "560k":
                document.getElementById('path1307').style.fill = 'green';
                document.getElementById('path1309').style.fill = 'blue';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "680k":
                document.getElementById('path1307').style.fill = 'blue';
                document.getElementById('path1309').style.fill = 'grey';
                document.getElementById('rect2188').style.fill = 'yellow';
                break;
            case "1.0M":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'black';
                document.getElementById('rect2188').style.fill = 'green';
                break;
            case "1.5M":
                document.getElementById('path1307').style.fill = 'brown';
                document.getElementById('path1309').style.fill = 'green';
                document.getElementById('rect2188').style.fill = 'green';
                break;
            case "2.2M":
                document.getElementById('path1307').style.fill = 'red';
                document.getElementById('path1309').style.fill = 'red';
                document.getElementById('rect2188').style.fill = 'green';
                break;
            case "3.3M":
                document.getElementById('path1307').style.fill = 'orange';
                document.getElementById('path1309').style.fill = 'orange';
                document.getElementById('rect2188').style.fill = 'green';
                break;
            case "4.7M":
                document.getElementById('path1307').style.fill = 'yellow';
                document.getElementById('path1309').style.fill = 'violet';
                document.getElementById('rect2188').style.fill = 'green';
                break;
            case "6.8M":
                document.getElementById('path1307').style.fill = 'blue';
                document.getElementById('path1309').style.fill = 'grey';
                document.getElementById('rect2188').style.fill = 'green';
                break;
            default:
                document.getElementById('path1307').style.fill = 'black';
                document.getElementById('path1309').style.fill = 'black';
                document.getElementById('rect2188').style.fill = 'black';
        }
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

    //--------------- Select The Calculation ------------------ //
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
                document.getElementById("kva6").disabled = true;
                document.getElementById("voltage6").disabled = true;
                document.getElementById("current6").disabled = true;
                document.getElementById("efficiency6").disabled = true;
                document.getElementById("horsePower6").disabled = true;
                // Select An Option, Default Option
                console.log(" Calculate Multiple Section Label ");
                break;
        }
    }