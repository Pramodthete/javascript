// Help user find degF or degC based on their Conversion Selection. Use
// Case Statement and ensure that the inputs are within the Freezing Point (
// 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
// a. degF = (degC * 9/5) + 32
// b. degC = (degF – 32) * 5/9

const prompt = require("prompt");

console.log("Select Option\n1: Celsius to Fahrenheit\n2: Fahrenheit to Celsius");

prompt.get(['Enter (1/2)'], function (err, result) {
    if (err) {
        console.error(err);
        return;
    }
    
    const option = parseInt(result['Enter (1/2)']);
    
    prompt.get(['Temp'], function (err, result) {
        if (err) {
            console.error(err);
            return;
        }

        const temp = parseInt(result['Temp']);
        
        switch (option) {
            case 1:
                console.log(ctof(temp));
                break;
            case 2:
                console.log(ftoc(temp));
                break;
            default:
                console.log("Invalid option");
                break;
        }
    });
});

function ctof(c) {
    return (c * 9 / 5) + 32;
}

function ftoc(f) {
    return (f - 32) * 5 / 9;
}
