// 자연수가 담긴 배열 arr가 매개변수로 주어질 때,
// 애너그램 관계인 숫자들끼리 묶어서 그룹을 만들면 총 몇 그룹이 만들어지는지 return 하도록 solution 함수를 완성해주세요.
const solution = (arr) => {
    let sorted = arr.map(v => v.toString().split('').sort().join(''));
    let sets = new Set();
    for (const number of sorted) {
        sets.add(number);
    }
    return sets.size;
}

test('solution', () => {
    expect(solution([112, 1814, 121, 1481, 1184])).toEqual(2)
    expect(solution([123, 456, 789, 321, 654, 987])).toEqual(3)
    expect(solution([1, 2, 3, 1, 2, 3, 4])).toEqual(4)
    expect(solution([123, 234, 213, 432, 234, 1234, 2341, 12345, 324])).toEqual(4)
})