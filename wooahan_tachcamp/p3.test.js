/* 1. 계좌 개설 요청:
   CREATE 계좌아이디 최대한도
   - 이미 개설된 계좌라면 403 코드를 보냅니다.
   - 개설되지 않은 계좌라면 `-최대한도`까지 출금할 수 있는 계좌를 개설한 후, 200 코드를 보냅니다.
2. 입금 요청:
   DEPOSIT 계좌아이디 금액
   - 없는 계좌라면 404 코드를 보냅니다.
   - 있는 계좌라면 `금액` 만큼을 입금한 후 200 코드를 보냅니다.
3. 출금 요청:
   WITHDRAW 계좌아이디 금액
   - 없는 계좌라면 404 코드를 보냅니다.
   - 계좌가 있지만, 최대한도를 초과한다면 출금을 하지 않고 403 코드를 보냅니다.
   - 그 외의 경우 계좌에서 `금액` 만큼을 출금 후 200 코드를 보냅니다. */

const solution = (reqs) => {
    let accounts = {};
    return reqs.map(v => {
        const [req, account, deposit] = v.split(' ');
        if(req === 'CREATE') {
            if(!accounts.hasOwnProperty(account)) {
                accounts[account] = -parseInt(deposit);
                return 200;
            }
            else return 403;
        }
        else if(req === 'DEPOSIT') {
            if(!accounts.hasOwnProperty(account)) {
                return 404;
            }
            else {
                accounts[account] += parseInt(deposit);
                return 200;
            }
        }
        else if(req === 'WITHDRAW') {
            if(!accounts.hasOwnProperty(account)) {
                return 404;
            }
            else if( -accounts[account] < parseInt(deposit)) {
                return 403;
            }
            else {
                accounts[account] += parseInt(deposit);
                return 200;
            }
        }
    })
}

test('solution', () => {
    expect(solution(["DEPOSIT 3a 10000", "CREATE 3a 300000", "WITHDRAW 3a 150000", "WITHDRAW 3a 150001"])).toEqual([404, 200, 200, 403])
    expect(solution(["CREATE 3a 10000", "CREATE 3a 20000", "CREATE 2bw 30000"])).toEqual([200, 403, 200]);
})