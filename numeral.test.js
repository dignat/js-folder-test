const roman_numeral = require('./egghead/roman_numeral');

test('convert one to roman numeral', () => {
   // function that converts number to roman
    const result = roman_numeral(1);
    expect(result).toBe('I');
});

test('convert two  to roman numeral', () => {
    const result = roman_numeral(2);
    expect(result).toBe('II');
})