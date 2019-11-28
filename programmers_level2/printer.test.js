const isPrior = (priorities, priority) => {
    const array = priorities;
    
    for (let i = 0; i < array.length; i++) {
        if (priority < array[i]) {
            return false;
        }
    }
    return true;
}

const run = (priorities, location) => {
    let j;
    let currLocation = location;
    const printed = [];
    let printOrder;

    while (priorities.length != 0) {
        j = priorities.shift();
        currLocation--;
      
        if (isPrior(priorities, j)) {
            printed.push(j);
            if(currLocation === -1){
                printOrder = printed.length;
            }
            
        }
        else {
            priorities.push(j);
            if(currLocation === -1){
                currLocation = priorities.length -1;
            }
            
        }
    

    }

    return printOrder;
};

function solution(priorities, location) {
    var answer = run(priorities, location);
    return answer;
}

test('isPrior', () => {
    expect(isPrior([1, 3, 2], 2)).toBe(false);
});

test('run', () => {
    expect(run([2, 1, 3, 2], 2)).toBe(1);
    expect(run([1, 1, 9, 1, 1, 1], 0)).toBe(5);
});


// 원하는 것 : 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지

// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.