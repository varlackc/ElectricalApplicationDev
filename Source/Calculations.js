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

            default:
                document.getElementById('path1307').style.fill = 'black';
                document.getElementById('path1309').style.fill = 'black';
                document.getElementById('rect2188').style.fill = 'black';
        }


    }
    //--------------------------------------------------------- //