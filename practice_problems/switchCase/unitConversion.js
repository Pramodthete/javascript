// Write a program that takes User Inputs and does Unit Conversion of
// different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet

const prompt = require('prompt');


prompt.get(["Enter value in feet/inch/meter"], function (err, res) {
    if (err) {
        onerror(err);
    }

    let m = res['Enter value in feet/inch/meter'];
    let num = parseInt(m);

    console.log("Options : \n1:feet to inch\n2:inch to feet\n3:feet to meter\n4:meter to feet");
    prompt.get(["select option"], function (err, res) {
        if (err) {
            onerror(err);
        }

        let n = res['select option'];
        let p=parseInt(n);

        console.log("Value: "+num);
        console.log("Option: "+p);

        switch (p) {
            case 1:
                console.log("Inches : " + (num * 12).toFixed(2));
                break;
            case 2:
                console.log("Feet : " + (num / 12).toFixed(2));
                break;
            case 3:
                console.log("Meter : " + (num / 3.28).toFixed(2));
                break;
            case 4:
                console.log("Feet : " + (num * 3.28).toFixed(2));
                break;
            default:
                console.log("Select correct option");
        }
    });
})