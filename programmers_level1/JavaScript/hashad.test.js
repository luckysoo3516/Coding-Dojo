// https://programmers.co.kr/learn/courses/30/lessons/12947

function otherSolution(n){
    return !(n % (n + "").split("").reduce((a, b) => (a + b)));
  }

const isHashad = (x) => {
    let digitSum = 0;
    let number = x;
    while(number >= 10) {
        digitSum += number % 10;
        number = Math.floor(number / 10);

    }
    digitSum += number;
    if( x % digitSum == 0) return true;
    else return false;
}

const solution = (x) => {
    return isHashad(x);
}

test('solution', () => {
    expect(solution(1234)).toBe(false)
    expect(solution(10000)).toBe(true)
    expect(otherSolution(1234)).toBe(true);
})

// 하샤드 정의
// 양의 정수 x
// x의 각 자릿수의 합으로 x 가 나누어져야 함
