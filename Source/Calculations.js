    //--------- Find Voltage Given Current and Resistance ---------- //
    var CalculateVoltageGivenCurrentResistance = function(current, resistance) {
        var voltage = current * resistance;
        return voltage;
    };
    //-------------------------------------------------------------- //

    //-------- Find Current Given Voltage and Resistance  ---------- //
    var CalculateCurrentGivenVoltageResistance = function(voltage, resistance) {
        var current = voltage / resistance;
        return current;
    };
    //------------------------------------------------------------- //

    //-------- Find Resistance Given Voltage and Current ----------- //
    var CalculateResistanceGivenVoltageCurrent = function(voltage, current) {
        var resistance = voltage / current;
        if (resistance < 0) {
            resistance = -1.0 * resistance;
        }
        return resistance;
    };
    //------------------------------------------------------------ //

    //-------- Find Power Given Voltage and Current -------------- //
    var PowerGivenVoltageCurrent = function(voltage, current) {
        var power = voltage * current;
        return power;
    };
    //----------------------------------------------------------- //

    //-------- Find Power Given Resistance and Current ---------- // 
    var PowerGivenResistantCurrent = function(resistance, current) {
        var power = (current * current) * resistance;
        return power;
    };
    //---------------------------------------------------------- //

    //-------- Find Power Given Voltage and Resistance --------- //
    var PowerGivenVoltageResistance = function(voltage, resistance) {
        var power = (voltage * voltage) / resistance;
        return power;
    };
    //--------------------------------------------------------- //

    // --------- Find the Missing Ohms Law Value -------------- //
    var FindTheMissingValue = function() {
        //get values
        var result = 0;
        var voltage = document.getElementById("voltage");
        var current = document.getElementById("current");
        var resistance = document.getElementById("resistance");
        var power = document.getElementById("power");

        // Log results
        console.log("---------------------------------");
        console.log("Voltage: " + voltage.value);
        console.log("Current: " + current.value);
        console.log("Resistance: " + resistance.value);
        console.log("Power: " + power.value);
        console.log("---------------------------------");

        // Calculate voltage
        if (voltage.value.length === 0 && current.value.length > 0 && resistance.value.length > 0) {
            console.log("Calculate Voltage");
            result = CalculateVoltageGivenCurrentResistance(current.value, resistance.value);
            voltage.value = result;
            result = PowerGivenResistantCurrent(resistance.value, resistance.value);
            power.value = result;
            document.getElementById("message").innerHTML = " ";
        }
        // Calculate Current
        else if (voltage.value.length > 0 && current.value.length === 0 && resistance.value.length > 0) {
            console.log("Calculate Current");
            result = CalculateCurrentGivenVoltageResistance(voltage.value, resistance.value)
            current.value = result;
            result = PowerGivenVoltageResistance(voltage.value, resistance.value);
            power.value = result;
            document.getElementById("message").innerHTML = " ";
        }
        // Calculate Resistance
        else if (voltage.value.length > 0 && current.value.length > 0 && resistance.value.length === 0) {
            console.log("Calculate Resistance");
            result = CalculateResistanceGivenVoltageCurrent(voltage.value, current.value) // Calculate Resistance
            resistance.value = result;
            result = PowerGivenVoltageCurrent(voltage.value, current.value); // Calculate power
            power.value = result;
            document.getElementById("message").innerHTML = " ";
        }
        // If all values are full calculate accuracy
        else if (voltage.value.length > 0 && current.value.length > 0 && resistance.value.length > 0) {
            var testVoltage = CalculateVoltageGivenCurrentResistance(current.value, resistance.value);
            if (testVoltage == voltage.value) {
                result = PowerGivenVoltageCurrent(voltage.value, current.value);
                console.log("Power: " + result);
                power.value = result;
            }
        }
        // Error
        else {
            console.log("Incorrect Input Could Not Calculate");
            //Warn the user of incorrect input
            document.getElementById("message").innerHTML = "Incorrect Input Could Not Calculate";
        }
    };
    // -------------------------------------------------------- //

    //<!-- Find The Horsepower -->

    //<!-- Find The Horsepower Direct Current: HorsePower = (Volts * Amps * Efficiency)/(746) -->
    function calculateDirectCurrentHP() {
        var volts = document.getElementById("voltage1");
        var amps = document.getElementById("current1");
        var efficiency = document.getElementById("efficiency1");
        var horsePower = document.getElementById("horsePower1");
        var conversionFactor = 746;
        var result = (volts * amps * efficiency) / (conversionFactor);
        horsePower.value = result;
        console.log("The Result is: " + result);
    }

    //<!-- Find The Horsepower Single Phase: HP = (Volts*Amp*Efficiency*Power Factor)/746 -->
    function calculateSinglePhaseHP(volts, amps, efficiency, powerFactor) {
        var conversionFactor = 746;
        var horsePower = (volts * amps * efficiency * powerFactor) / (conversionFactor);
        return horsePower;
    }

    //<!-- Find The Horsepower Three Phase: HP = (Volts * Amp * Efficiency * PowerFactor * 1.73)/746 -->
    function calculateThreePhaseHP(volts, amps, efficiency, powerFactor) {
        var threeFaceConversion = 1.73;
        var conversionFactor = 746;
        var horsePower = (volts * amps * efficiency * powerFactor * threeFaceConversion) /
            conversionFactor;
        return horsePower;
    }

    //<!-- Find Kilovolt Amperes -->
    //<!-- Single Phase: KVA = (volts * Amperes)/1000 -->
    function calculateSinglePhaseKVA(volts, amps) {
        var kva = (volts * amps) / 1000;
        return kva;
    }
    //<!-- Three Phase: KVA = (volts * Amperes * 1.73)/1000 -->
    function calculateThreePhaseKVA(volts, amps) {
        var threeFaceConversion = 1.73;
        var kva = (volts * amps * threeFaceConversion) / 1000;
        return kva;
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
                //document.getElementById('rect2190').style.fill = 'linear-gradient(toright, red, blue)';
                document.getElementById('rect2190').style.fill = '7C8280';
                //document.getElementById('stop3946').style.stop-color = '#404443';

                break;

            case "20%":
                document.getElementById('rect2190').style.fill = 'none';
                break;
        }
    }
    //--------------------------------------------------------- //