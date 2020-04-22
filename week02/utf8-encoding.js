/*
0000 0000-0000 007F | 0xxxxxxx
0000 0080-0000 07FF | 110xxxxx 10xxxxxx
0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
*/

function transSignByte(str) {
    const strTo2 = str.charCodeAt(0).toString(2);
    if (strTo2.length < 8) {
        return strTo2.padStart(8, '0');
    }
    const res = [];
    const bytArr = strTo2.split('');
    while (bytArr.length > 6) {
        res.unshift(`10${bytArr.splice(-6).join('')}`);
    }
    let len = res.length,
        prefix = ['0', '110', '1110', '11110'];
    return `${prefix[len]}${bytArr.join('').padStart(6-len,'0')} ${res.join(' ')}`;
}


function utf8Encoding(str) {
    return Array.from(str).map(s => transSignByte(s)).join('\r\n');
}

console.log(utf8Encoding('汉颜'))
