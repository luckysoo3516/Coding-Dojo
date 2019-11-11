const run = (word) => {
    let minLength = word.length;
    const MAX_SPLIT_COUNT = Math.ceil(word.length/2);
    for( let i=1; i<=MAX_SPLIT_COUNT; i++){
        if(minLength > compress(split(word,i)).length){
            minLength = compress(split(word,i)).length
        }
    }

    return minLength;
};

const compress = (chars) => {
    let charCounts = [];
    let count = 1;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count += 1;
        } else {
            charCounts.push([chars[i], count]);
            count = 1;
        }
    }

    let result = '';
    for (let i = 0; i < charCounts.length; i++) {
        if (charCounts[i][1] === 1) {
            result += charCounts[i][0]
        } else {
            result += (charCounts[i][1].toString() + charCounts[i][0]);
        }
    }

    return result;
}

const split = (word, chunkSize) => {
    let chars = [];

    for (let i = 0; i < word.length; i += chunkSize) {
        chars = [...chars, word.slice(i, i+chunkSize)];
    }

    return chars;
}

test('run', () => {
    expect(run('aabbaccc')).toBe(7);
    expect(run('ababcdcdababcdcd')).toBe(9);
    expect(run('abcabcdede')).toBe(8);
    expect(run('abcabcabcabcdededededede')).toBe(14);
    expect(run('xababcdcdababcdcd')).toBe(17);

});

test('compress', () => {
    expect(compress(
        ['a', 'a', 'b', 'b', 'a', 'c', 'c', 'c']
    )).toBe('2a2ba3c');

    expect(compress(
        ['aa', 'bb', 'ac', 'cc']
    )).toBe('aabbaccc');

    expect(compress(
        ['aab', 'bac', 'cc']
    )).toBe('aabbaccc');
});

test('split', () => {
    expect(split('aabbaccc', 1))
        .toEqual(['a', 'a', 'b', 'b', 'a', 'c', 'c', 'c'])
    expect(split('aabbaccc', 2))
        .toEqual(['aa', 'bb', 'ac', 'cc'])
    expect(split('aabbaccc', 3))
        .toEqual(['aab', 'bac', 'cc'])
})

// // 우리가 원하는것 : 가장 짧게 압축했을 때 문자열의 길이를 구하여라

// // 단 s의 길이는 1이상, 1000이하
// // 소문자밖에 없다.
// // 문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.
// // 마지막에 남는 문자열은 그대로 붙여주면 됩니다.
// // 문자열의 개수에서 반까지만 해보면된다.
// // 1개는 1이라고 덧붙이지 않는다.

// // 전체 문자열에서 1개, 2개 ... 전체 길이까지 쪼개고
// // 압축한다.
// // 가장 작은 값을 변수로 정해서 계속 업데이트해서
// // 마지막 결과를 반환한다