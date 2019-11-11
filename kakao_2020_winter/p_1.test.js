//1번
const pickDoll = (board, moveItem) => {
     // moves의 각 숫자는 '행'을 의미. board의 행에서 0이 아닌
    // 가장 작은 '열'의 숫자를 가져온 뒤 board에서는 없애준다.
    const boardSize = board[0].length;
    let picked = 0;
    for(let i=0; i<boardSize; i++){
        if(board[i][moveItem-1] != 0 ){
            picked = board[i][moveItem-1];
            board[i][moveItem-1] = 0;
            console.log("picked index:" +i);
            break;
        }

    }

    return picked;
}



const run = (board, moves) => {
    let result = [];
    let picked = 0;
    let popCount = 0;

    for(let i=0; i<moves.length; i++){
        picked = pickDoll(board,moves[i]);
        console.log("moves:" + moves[i]);
        console.log("pick:" + picked);
        if(picked == 0 ){
            continue;
        }
        if (result[result.length-1] == picked) {
            result.pop();
            popCount+=2;
        } else {
            result.push(picked);
        }
        console.log("result:"+ result);
        console.log("popCount:"+popCount);
    }



    return popCount;
}

test('run', () => {
    expect(run(
        [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
        , [1, 5, 3, 5, 1, 2, 1, 4])).toBe(4);
});

test('pickDoll', () => {
    expect(pickDoll(
        [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
        , 1)).toBe(4);
});


// 원하는 것  : 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수 . 남은 인형의 갯수가 아님.

// 조건들
//크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서
// 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다.
// 만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다
// board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
// 0은 빈 칸을 나타냅니다.
// 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미. 같은 숫자는 같은 모양의 인형을 나타냅니다.
// moves배열의 각 숫자가 의미하는 것은 몇번쨰 위치로 갈 것인지.
// 그리고 그 위에서 가장 위의 인형을 뽑아 다른 바구니에 넣는다.

// 어떻게 풀까?
// moves의 각 숫자는 '행'을 의미. board의 행에서 0이 아닌
// 가장 작은 '열'의 숫자를 가져와 다른 배열 picked 에 쌓는다. 
// 쌓을때 꼭 가장 마지막 인형과 같은지 아닌지 검사한다.
//  같으면 터트려서 둘다 없앤다
//  다르면 쌓는다.
