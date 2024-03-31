const sum = (a,b)=> {
    return a + b
}



console.log(sum(7,3))



const oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87   // British pound
};

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = valueInDollar * oneEuroIs["JPY"] / oneEuroIs["USD"];
    // return the yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to pounds
    let valueInPound = valueInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    // return the pound value
    return valueInPound;
}




module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };