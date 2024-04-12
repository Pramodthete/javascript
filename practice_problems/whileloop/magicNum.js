const prompt = require('prompt');

console.log("Think of a number between 1 and 100 (inclusive)");

let low = 1;
let high = 100;

const findMagicNumber = () => {
    if (low <= high) {
        let mid = Math.floor((low + high) / 2);

        prompt.get([`Is your number less than ${mid}? (yes/no)`], function(err,res){
            if(err){
                console.error(err);
                return;
            }

            let answer = res[`Is your number less than ${mid}? (yes/no)`].toLowerCase();
            if (answer === "yes") {
                high = mid - 1;
                findMagicNumber();
            } else if (answer === "no") {
                low = mid + 1;
                findMagicNumber();
            } else {
                console.log("Please enter 'yes' or 'no'.");
                findMagicNumber();
            }
        });
    } else {
        console.log("Your magic number is:", low - 1);
    }
};

findMagicNumber();
