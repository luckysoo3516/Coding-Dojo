const solution = (n) => {
    // n번째 3진법 숫자를 찾아라
    let num = 1;
    console.log(num.toString(3));
    let count = 0;
    let converted = '';
    while(count < n) {
        converted = num.toString(3);
        if(converted.split('').every(v => v == '1' || v == '0')) count++;
        num++;
    }
    return parseInt(converted,3);
}

test('solution', () => {
    expect(solution(11)).toBe(31);
    expect(solution(4)).toBe(9);
})