import Kata5 from './Kata5'

test('check function', () => {

    const num1 = 121;
    const num2 = 625;
    const num3 = 155;
    const num4 = 319225;
    const num5 = 15241383936;
    const num6 = 342786627;


    expect(Kata5(num1)).toBe(144);
    expect(Kata5(num2)).toBe(676);
    expect(Kata5(num3)).toBe(-1);
    expect(Kata5(num4)).toBe(320356);
    expect(Kata5(num5)).toBe(15241630849);
    expect(Kata5(num6)).toBe(-1);
});
