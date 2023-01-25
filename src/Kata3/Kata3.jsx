const Kata3 = (iterable) => {
    let checkedTypeResult;
    if (typeof (iterable) === 'string') {
        checkedTypeResult = iterable.split('')
    } else {
        checkedTypeResult = iterable
    }
    let res = []
    res[0] = checkedTypeResult[0]
    for (let i = 1; i <= checkedTypeResult.length; i++) {
        if (checkedTypeResult[i] !== checkedTypeResult[i--]) {
              res.push(checkedTypeResult[i])
        }
    }

    return console.log(res)
};

export default Kata3;
