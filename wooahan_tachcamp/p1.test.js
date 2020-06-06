const solution = (arr) => {
    let repeat = 1;
    let count = 1;
    let tmp = [];
    while(arr.length !== 1){
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] == arr[i+1]) repeat++;
            else {
                tmp.push(repeat);
                repeat = 1;
            }
        }
        arr = tmp;
        tmp = [];
        count++;
    }
    return count;
}

test('solution', () => {
    expect(solution([1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3])).toEqual(6)
    expect(solution([2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2])).toEqual(5)
    expect(solution([1,2,3])).toEqual(3)
    expect(solution([2])).toEqual(1)
})