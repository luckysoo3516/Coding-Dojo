answer=0
def dfs(result, numbers, target, count):
    if(count == len(numbers)):
        if(target == result):
            global answer
            answer = answer + 1
        return 0

    else:
        dfs(result + numbers[count], numbers, target, count + 1)
        dfs(result - numbers[count], numbers, target, count + 1)

def solution(numbers, target):
    dfs(0, numbers, target, 0)
    return answer