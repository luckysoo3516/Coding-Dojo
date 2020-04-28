const path= (y, x, sum, n) => {
    //base case : 삼각형의 마지막 줄 까지 도달
    if(y == n - 1) return sum + triangle[y][x];
    //memoization
    
    
};

const solution = (triangle) => {
    let n = traingle.length;
    let triangles= triangle;
    let cache = [];

    return 30;
}

test('solution', ()=> {
    expect(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])).toBe(30);
});


//거쳐간 숫자의 최댓값을 return