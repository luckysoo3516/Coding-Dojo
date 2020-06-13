const isGood = (year) => {
    let numbers = year.split('');
    let years = year.split('');
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            if(numbers[i] == numbers[j]) return false;
        }
    }
    return true;
}

const solution = (p) => {
    let year = p+1;
    while(!isGood(year.toString())) {
        year += 1;
    }
    return year;
}
test('solution', () => {
    expect(solution(1987)).toBe(2013);
    expect(solution(2015)).toBe(2016);
})