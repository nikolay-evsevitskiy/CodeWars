const Kata5 = (sq) => {
    let sqrt = Math.sqrt(sq);
    return sqrt % 1 === 0 ? Math.pow((sqrt + 1), 2) : -1;
}


console.log(Kata5(121))


export default Kata5;
