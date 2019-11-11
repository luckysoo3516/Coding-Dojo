//3번
// 호텔 방에 k개 있음. 각 방은 번호가 있다. 방을 배정한다.
// 고객이 원하는 방(roomNumber)이 이미 배정되어 있으면 원하는 방보다 번호가 크면서
// 비어있는 방 중 가장 번호가 작은 방을 배정합니다.
// 각 고객에게 배정되는 방 번호를 순서대로 배열에 담아 return

const run = (k, roomNumber) => {
    let occupied = [];
    let roomOrder = [];

    for (let i = 0; i < k; i++) {
        if (occupied[roomNumber[i]] === undefined) {
            occupied[roomNumber[i]] = true;
            roomOrder.push(roomNumber[i]);
        }

        else {
            for( let j = 1; j < k-i+1; j++){
                if(occupied[roomNumber[i]+j] === undefined){
                    roomOrder.push(roomNumber[i]+j);
                    occupied[roomNumber[i]+j] = true;
                    break;
                }
            }
        }
    }

    return roomOrder.filter(i => i);
}

test('run', () => {
    expect(run(10, [1, 3, 4, 1, 3, 1])).toEqual([1, 3, 4, 2, 5, 6]);
})