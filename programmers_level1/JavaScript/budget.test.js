// https://programmers.co.kr/learn/courses/30/lessons/42584
function anotherSolution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}

const solution = (d, budget) => {
    let answer = 0;
    let total = 0;
    // 오름차순으로 정렬
    let sorted = d.sort((a, b) => ( a - b));
    // 하나씩 더하면서 전체예산(total)보다 작거나 같은지 비교
    // 전체예산보다 작거나 같으면 answer++
    for (const price of sorted) {
        if(total + price <= budget) {
            total += price;
            answer++;
        }
        else {
            break;
        }
    }
    return answer;
}

test('solution', () => {
    expect(mySolution([1,3,2,5,4], 9)).toEqual(3)
    expect(mySolution([2,2,3,3], 10)).toEqual(4)
})

/** 부서의 신청내역을 오름차순으로 정렬해서 전체 예산보다 작거나 같은거 까지만 */