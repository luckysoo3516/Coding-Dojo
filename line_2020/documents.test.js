let count = {};
const sortBycount = (a, b) => {
    return count[b] - count[a];
}

const solution = (dataSource, tags) => {
    let answer = [];
    // let count = [];
    dataSource.forEach((document, index) => {
        count[document[0]] = document.filter(tag => tags.some(a => a === tag)).length
        if(count[document[0]] > 0)
            answer.push(document[0]);
        console.log(answer, count);
    })

    let result = answer.sort(sortBycount)
    return result;
}

test('solution', () => {
    expect(solution([
        ["doc1", "t1", "t2", "t3"],
        ["doc2", "t0", "t2", "t3"],
        ["doc3", "t1", "t6", "t7"],
        ["doc4", "t1", "t2", "t4"],
        ["doc5", "t6", "t100", "t8"]
    ], ["t1", "t2", "t3"]
    )).toEqual(["doc1", "doc2", "doc4", "doc3"])
});

test('sort', () => {
    expect(answer.sort(sortBycount(a,b))).toBe(["doc1", "doc2", "doc4", "doc3"])
})