// 2번
// 원하는 것 : 특정 튜플을 표현하는 집합이 담긴 문자열 s가 매개변수로 주어질 때, s가 표현하는 튜플 배열

// 조건 :
// s는 {, }, , 로 이루어진 문자열이다.
// 중복된 원소 가능
// 원소에 정해진 순서가 있음.


// 어떻게 풀까?
// 문자열의 먼저 배열로 바꾼 뒤에 결과배열에 첫번째 원소는 그대로 집어넣는다.
// 그 다음원소부터는 중복된 것이 없을 때만 추가한다.
// 각 집합 안에서 갯수로 정렬.
// 첫번째꺼부터 집어넣는데 있으면 무시하고 없으면 넣는다.

const run = (set) => {
    let tupleSet = [];
    let tupleSet2 = [];
    let tuple = [];
    tupleSet = set.slice(2, set.length - 2).split('},{')
        .sort(function (a, b) {
            return a.length - b.length;
        });;


        for(let i=0; i<tupleSet.length; i++){
            tupleSet2.push(tupleSet[i].split(','));
        }

    for(let i=0; i<tupleSet2.length; i++){

        for(let j=0; j<tupleSet2[i].length; j++){
            if(!tuple.includes(tupleSet2[i][j])){
                tuple.push(tupleSet2[i][j]);
            }

        }

    }

    return tuple.map(i => Number(i));
};

test('run', () => {
    expect(run('{{2},{2,1},{2,1,3},{2,1,3,4}}')).toEqual([2, 1, 3, 4]);
    expect(run('{{1,2,3},{2,1},{1,2,4,3},{2}}')).toEqual([2, 1, 3, 4]);
    expect(run('{{20,111},{111}}')).toEqual([111, 20]);
    expect(run('{{123}}')).toEqual([123]);
    expect(run('{{4,2,3},{3},{2,3,4,1},{2,3}}')).toEqual([3, 2, 4, 1]);
});