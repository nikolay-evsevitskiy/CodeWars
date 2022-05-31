import Kata1 from './Kata1'

test('check function', () => {

    const arr1 = [66, 101];
    const arr2 = [101, 45, 75, 105, 99, 107];
    const arr3 = ['t', 'e', 's', 't'];
    const arr4 = ['what', 'a', 'great', 'kata'];


    expect(Kata1(arr1, 66)).toBe(true);
    expect(Kata1(arr2, 107)).toBe(true);
    expect(Kata1(arr3, 'e')).toBe(true);
    expect(Kata1(arr4, 'kat')).toBe(false);
});
