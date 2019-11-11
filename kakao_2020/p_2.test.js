const isCorrect = (p) => {
    let count = 0;

    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') {
            count += 1;
        } else {
            count -= 1;
        }

        if (count < 0) {
            return false;
        }
    }

    return count == 0;
};

const split = (p) => {
    let count = 0;

    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') {
            count += 1;
        } else {
            count -= 1;
        }

        if (count === 0) {
            return [p.slice(0, i + 1), p.slice(i + 1)]
        }
    }
}


const fixTypo = (p) => {
    if (p === '') {
        return p;
    }

    if (isCorrect(p)) {
        return p;
    }

    const [u, v] = split(p);
    if (isCorrect(u)) {
        return u + fixTypo(v);
    }

    return '(' + fixTypo(v) + ')' + u.slice(1, u.length - 1)
        .split('')
        .map(i => {
            return i === ')' ? '(' : ')'
        })
        .join('');;
}

test('fixTypo', () => {
    expect(fixTypo('')).toBe('');
    expect(fixTypo('()')).toBe('()');
    expect(fixTypo(')(')).toBe('()');
    expect(fixTypo('()))((()')).toBe('()(())()');
});

test('isCorrect', () => {
    expect(isCorrect('()')).toBe(true);
    expect(isCorrect(')(')).toBe(false);
    expect(isCorrect('))((')).toBe(false);
    expect(isCorrect('(()())()')).toBe(true);
    expect(isCorrect('()))((()')).toBe(false);
});

test('split', () => {
    expect(split(')(')).toEqual([')(', ''])
    expect(split('(()())()')).toEqual(['(()())', '()']);
    expect(split('()))((()')).toEqual(['()', '))((()']);
});


// 원하는것: 균형잡힌 괄호 문자열 p가 매개변수로 주어질 때, 주어진 알고리즘을 수행해 올바른 괄호 문자열로 변환한 결과를 return 하도록 solution 함수를 완성해 주세요.

// 단 문자열 p를 이루는 '(' 와 ')' 의 개수는 항상 같습니다.
// 만약 p가 이미 올바른 괄호 문자열이라면 그대로 return 하면 됩니다.

// 알고리즘을 코드로 그대로 옮긴다.
//     올바른지 검사하는게 필요할 것 같다.
//     균형잡힌 괄호 문자열로 분리하는 것도 필요할 것 같다.
// 재귀를 할 것 같다.

