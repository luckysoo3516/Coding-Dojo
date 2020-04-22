const solution = (records) => {
    let users = {};
    let record = [];
    let answer = [];
    let enters = [];

    for(let i = 0; i < records.length; i++){
        record = records[i].split(' ');
        if(record[0] === "Enter" || record[0] === "Change") {
            users[record[1]] = record[2];
        }
        if(record[0] === "Enter" || record[0] === "Leave") {
            enters.push(records[i]);
        }
    }

    for(let i = 0; i < enters.length; i++){
        record = enters[i].split(' ');
        let user = users[record[1]];
        if(record[0] === "Enter") {
            answer.push(user+"님이 들어왔습니다.");
        }
        else if(record[0] === "Leave"){
            answer.push(user+"님이 나갔습니다.");
        }
    }
    return answer;
}

test('solution', () => {
    expect(solution([
        "Enter uid1234 Muzi",
        "Enter uid4567 Prodo",
        "Leave uid1234",
        "Enter uid1234 Prodo",
        "Change uid4567 Ryan"]))
        .toEqual([
            "Prodo님이 들어왔습니다.",
            "Ryan님이 들어왔습니다.",
            "Prodo님이 나갔습니다.",
            "Prodo님이 들어왔습니다."]);
});