// https://programmers.co.kr/learn/courses/30/lessons/12948
function regSolution(s) {
    // 정규식을 이용한 풀이
    return s.replace(/\d(?=\d{4})/g, "*");
  }

const mySolution = (phone_number) => {
    let answer = "*";
    answer = answer.repeat(phone_number.length - 4) + phone_number.slice(-4);
    return answer;
}

test('solution', () => {
    expect(mySolution("01033334444")).toEqual("*******4444");
    expect(mySolution("027778888")).toEqual("*****8888");
})