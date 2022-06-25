import Kata2 from './Kata2'

test('check function', () => {

    const name1 = 'Jeong-Ho Aristotelis';
    const name2 = 'Abishai Charalampos';
    const name3 = 'Idwal Augustin';
    const name4 = 'Hadufuns John';
    const name5 = 'Zoroaster Donnchadh';
    const name6 = 'Claude Miljenko';
    const name7 = 'Werner Vígi';
    const name8 = 'Anani Fridumar';


    expect(Kata2(name1)).toBe(600);
    expect(Kata2(name2)).toBe(570);
    expect(Kata2(name3)).toBe(420);
    expect(Kata2(name4, 20)).toBe(260);
    expect(Kata2(name5)).toBe(570);
    expect(Kata2(name6)).toBe(450);
    expect(Kata2(name7, 15)).toBe(165);
    expect(Kata2(name8)).toBe(420);

});
