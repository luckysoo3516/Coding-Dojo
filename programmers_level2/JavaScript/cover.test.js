// https://programmers.co.kr/learn/courses/30/lessons/42578
const solution = (clothes) => {
    let inven = {};
    let answer = 1;
    clothes.forEach(item => {
        inven[item[1]] = 0;
    })
    category = clothes.map(item => {
        inven[item[1]]++;
    })
    for (const counts of Object.values(inven)) {
        console.log(counts)
        answer *= (counts + 1);
    }
    return answer - 1;
}

test('solution', () => {
    expect(solution(
        [["yellow_hat", "headgear"], 
        ["blue_sunglasses", "eyewear"], 
        ["green_turban", "headgear"]])).toEqual(5);
    // expect(solution(
    //     [[crow_mask, face], 
    //     [blue_sunglasses, face], 
    //     [smoky_makeup, face]])).toEqual(3);
})

