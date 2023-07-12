const equations = require('./force');
const force = equations.force;
const universalGravitation = equations.universalGravitation;
test('This tests if force is calculated properly', () => {
    expect(force(2,3)).toBe(6);
    expect(force(4,5)).toBe(20);
    expect(force(4,7)).toBe(28);
});

// test('Test whether the universal gravitation is tested properly', () => {
//     expect(force(2,3)).toBe(0);
//     expect(force(5,3)).toBe(0);
//     expect(force(7,3)).toBe(0);
// });
