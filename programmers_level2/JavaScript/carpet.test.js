function isSquare(x) {
    var sqrt = Math.sqrt(x);
    if (Math.round(sqrt) === sqrt) {
        return true;
    }
    else {
        return false;
    }
}

const makeCarpet = (red) => {
    if (red === 2) {
        return [4, 3];
    }

    else if (red % 2 === 0) {
        var root = 0;
        if (isSquare(red)) {
            root = Math.sqrt(red);
            return [root + 2, root + 2];
        }
        else {
            var nearest = red;
            while (nearest--) {
                if (isSquare(nearest) && nearest % 2 === 0) {
                    console.log(isSquare(nearest), nearest);
                    break;
                }
            }
            var root = Math.sqrt(nearest);
            return [root + (red - nearest) / 2, root + 2];
        }
    }
    else if (red % 2 === 1) {
        if (isSquare(red)) {
            root = Math.sqrt(red);
            return [root + 2, root + 2];
        }
        else {
            return [red + 2, 3];
        }
    }
}

function solution(brown, red) {
    return makeCarpet(red);
}

test('isSquare', () => {
    // expect(isSquare(1)).toEqual(true);
    // expect(isSquare(6)).toEqual(false);
    expect(isSquare(22)).toEqual(false);
});

test('run', () => {
    expect(makeCarpet(2)).toEqual([4, 3]);
    expect(makeCarpet(1)).toEqual([3, 3]);
    expect(makeCarpet(3)).toEqual([5, 3]);
    expect(makeCarpet(4)).toEqual([4, 4]);
    expect(makeCarpet(5)).toEqual([7, 3]);
    expect(makeCarpet(24)).toEqual([8, 6]);
    expect(makeCarpet(7)).toEqual([9, 3]);
});

// red 필요한brown 격자
// 1    8      [3, 3]
// 2    10     [4, 3] // return (1) + 1
// 3    12     [5, 3] // return (2) + 2    
// 4    12     [4, 4] // return (1) 또는 return (2) + 2
// 5    16     [7, 3] // return (3) + (5-3) * 2
// 6    14     [5, 4] // return (4) + 2
// 7    20     [9, 3] // return (5) + (7-5) * 2
// 8    16     [6, 4]
// 9    16     [5, 5]  
// 10   18     [7, 4] red= 2 에서 가로 사이즈 + 1
// 12   20     [8, 4]
// 16   20     [6, 6]
// 24          [8, 6]