function convertStringToNumber(str, binary = 10) {
    let prefix
    if (str.startsWith('-') || str.startsWith('+')) {
        prefix = str.slice(0, 1)
        str = str.slice(1)
    }
    if (str.startsWith('0x')) {
        str = str.slice(2)
        binary = 16
    }
    if (str.startsWith('0b')) {
        str = str.slice(2)
        binary = 2
    }
    if (str.startsWith('0')) {
        str = str.slice(1)
        binary = 8
    }
    let initNumber = 0,
        decimalNumber = 0;
    const [initStr, decimalStr] = str.split('.');

    if (initStr) {
        let initArr = initStr.split(''),
            initCur
        while (initCur = initArr.shift()) {
            initNumber = initNumber * binary + Number(initCur)
        }
    }

    if (decimalStr) {
        let decimalArr = decimalStr.split(''),
            decimalCur
        while (decimalCur = decimalArr.pop()) {
            decimalNumber = (Number(decimalCur) + decimalNumber) / binary
        }
    }

    if (prefix === '-') {
        return -(initNumber + decimalNumber)
    }
    return initNumber + decimalNumber

}

let res = convertStringToNumber('-111',2)
console.log(res)
