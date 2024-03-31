const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("Converts 7.3 euros to dollars correctly", () => {
    const euros = 7.3;
    const dollars = fromEuroToDollar(euros);
    const expected = euros * 1.07;
    expect(dollars).toBe(expected);
});

test("Converts 15.8 euros to dollars correctly", () => {
    const euros = 15.8;
    const dollars = fromEuroToDollar(euros);
    const expected = euros * 1.07;
    expect(dollars).toBe(expected);
});

// Unit tests for fromDollarToYen function
test("Converts 3.2 dollars to yen correctly", () => {
    const dollars = 3.2;
    const yen = fromDollarToYen(dollars);
    const expected = dollars * 156.5 / 1.07;
    expect(yen).toBe(expected);
});

test("Converts 6.7 dollars to yen correctly", () => {
    const dollars = 6.7;
    const yen = fromDollarToYen(dollars);
    const expected = dollars * 156.5 / 1.07;
    expect(yen).toBe(expected);
});

test("Converts 12.1 dollars to yen correctly", () => {
    const dollars = 12.1;
    const yen = fromDollarToYen(dollars);
    const expected = dollars * 156.5 / 1.07;
    expect(yen).toBe(expected);
});

// Unit tests for fromYenToPound function
test("Converts 250 yen to pounds correctly", () => {
    const yen = 250;
    const pounds = fromYenToPound(yen);
    const expected = yen * 0.87 / 156.5;
    expect(pounds).toBe(expected);
});

test("Converts 600 yen to pounds correctly", () => {
    const yen = 600;
    const pounds = fromYenToPound(yen);
    const expected = yen * 0.87 / 156.5;
    expect(pounds).toBe(expected);
});

test("Converts 1000 yen to pounds correctly", () => {
    const yen = 1000;
    const pounds = fromYenToPound(yen);
    const expected = yen * 0.87 / 156.5;
    expect(pounds).toBe(expected);
});