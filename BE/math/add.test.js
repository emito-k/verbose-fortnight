const sum = require('./add');

test('Properly adds two numbers', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(4,4)).toBe(8);
    expect(sum(5,5)).toBe(10);
});
