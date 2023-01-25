import Kata3 from './Kata3'

test('check function', () => {

    const arr1 = 'AAAABBBCCDAABBB';
    const arr2 = 'ABBCcAD';
    const arr3 = [1, 2, 2, 3, 3];


    expect(Kata3(arr1)).toBe(['A', 'B', 'C', 'D', 'A', 'B']);
    expect(Kata3(arr2)).toBe(['A', 'B', 'C', 'c', 'A', 'D']);
    expect(Kata3(arr3)).toBe([1, 2, 3]);

});
