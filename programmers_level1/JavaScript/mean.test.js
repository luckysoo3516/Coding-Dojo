const solution = (arr) => {
    return arr.reduce((a, b) => (a + b), 0) / arr.length;
}

test('solution', () => {
    expect(solution([1,2,3,4])).toEqual(2.5)
})