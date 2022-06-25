import Kata3 from './Kata3'

test('check function', () => {

    const arr1 = [66, 101];
    const arr2 = [101, 45, 75, 105, 99, 107];
    const arr3 = ['t', 'e', 's', 't'];
    const arr4 = ['what', 'a', 'great', 'kata'];


    expect(Kata3(arr1, 66)).toBe(true);
    expect(Kata3(arr2, 107)).toBe(true);
    expect(Kata3(arr3, 'e')).toBe(true);
    expect(Kata3(arr4, 'kat')).toBe(false);
});
