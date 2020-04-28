const run = (answers) => {
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let result = [0, 0, 0];
    let firsts = [];
    // check Answers
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] == pattern1[i % 5]) {
            result[0]++;
        }
        if(answers[i] == pattern2[i % 8]) {
            result[1]++;
        }
        if(answers[i] == pattern3[i % 10]) {
            result[2]++;
        }
    }
    //sort scores and check firsts
    if(result[0] >= result[1] && result[0] >= result[2]) {
        firsts.push(1);
    }
    if(result[1] >= result[0] && result[1] >= result[2]) {
        firsts.push(2);
    }
    if(result[2] >= result[1] && result[2] >= result[0]) {
        firsts.push(3);
    }
    
    return firsts.sort((a,b)=> a - b);
}

test('run', () => {
    expect(run([1,2,3,4,5])).toEqual([1]);
    expect(run([1,3,2,4,2])).toEqual([1, 2, 3]);
});

// 1번 1, 2, 3, 4, 5
// 2번 2, 1, 2, 3, 2, 4, 2, 5
// 3번 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
// 답지 : 1,2,3,4,5
