const solution = (str) => {
    Q1
    let stack = [];
    let count = 0;

    for( let i = 0; i < str.length; i++) {
        if( str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '<')
            stack.push('(')
        else if( str[i] === ')' || str[i] === ']' || str[i] === '}' || str[i] === '>'){
            stack.pop()
            count++;
        }

    }

    if(stack.length === 0) return count;
    else return -1;
}
// 괄호는 아래와 같이 네 종류가 있다고 가정합니다
// ( ), { }, [ ], < >
// 예를 들어 ([])와 ([)] 모두 잘 열고 잘 닫았기 때문에 정상입니다.