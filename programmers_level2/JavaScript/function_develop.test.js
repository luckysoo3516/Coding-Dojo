// https://programmers.co.kr/learn/courses/30/lessons/42586
function otherSolution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}

const solution = (progresses, speeds) => {
    let answer = [];
    let stack = [];
    let finish = progresses;
    let n = progresses.length;
    let updated;
    while(stack.length < n) { // 배포 갯수가 기능의 갯수와 같으면 끝
        let prior = stack.length;
        for(let i = 0; i < n; i++) { // 하루동안의 작업 진행 업데이트
            finish[i] += speeds[i];
            if(finish[i] >= 100 && stack.length == i ) {
                stack.push(finish[i]);
            }
        }
        if(prior < stack.length) answer.push(stack.length - prior);
        console.log(stack, finish, answer);
        updated = false;
    }
    return answer;
}

test('solution', () => {
    expect(solution([93,30,55],	[1,30,5])).toEqual([2,1])
})