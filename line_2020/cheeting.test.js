const connected = (result) => {
    let connected = 0;
    let max = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] === 1) {
            connected++;
            if (connected > max) max = connected;

        }
        else if (result[i] === 0) {
            if (connected > max) max = connected;
            connected = 0;
        }

    }
    return max;
}

const stringCompare = (answer, a, b) => {
    a = a.split('');
    b = b.split('');
    return a.map((value, i) => { if (value === b[i] && value !== answer[i]) return 1; else return 0; })
}

const solution = (answer_sheet, sheet) => {
    let result = [];
    let count = 0; // 의심문항 수
    let connectedLength = 0; // 가장 긴 연속된 의심문항 수
    let maxCheeting = 0; // 부정행위 가능성 지수 = count + (connected)*(connected) 가장큰것만 기록.

    // a, b를 combination으로 생성해서 해당 string 넣어주기
    for (let i = 0; i < sheet.length - 1; i++) {
        for (let j = i+1; j < sheet.length; j++) {
            let a = sheet[i];
            let b = sheet[j];

            result = stringCompare(answer_sheet, a, b) // 의심문항이면 1, 아니면 0으로 바꿔서 배열에 넣어 전달
            console.log(a, b, result);
            count = result.filter(v => v === 1).length // 원소가 1인 것의 갯수를 세서 count에 넣고
            connectedLength = connected(result) // 배열에서 처음 1이 나온것부터 다음 0이 나올때까지 길이 세기
            let Cheeting = count + (connectedLength) * (connectedLength)
            if(Cheeting > maxCheeting) maxCheeting = Cheeting;
            console.log(i, j, count, connectedLength, Cheeting, maxCheeting)
        }

    }
    return maxCheeting;
}

test('compare', () => {
    expect(stringCompare("4132315142", "3241523133", "3243523133")).toEqual([1, 1, 1, 0, 1, 1, 1, 0, 1, 1])
})

test('con', () => {
    expect(connected([1, 1, 1, 0, 1, 1, 1, 0, 1, 1])).toBe(3);
})

// 어떤 두 응시자가 제출한 답안지에 대해서, 부정행위 가능성 지수는 아래와 같은 방식으로 계산할 수 있습니다.
// 의심 문항 = 같은 선택지를 골랐으나 오답인 문항
// 부정행위 가능성 지수 = 총 의심 문항의 수 + (가장 긴 연속된 의심 문항의 수)2