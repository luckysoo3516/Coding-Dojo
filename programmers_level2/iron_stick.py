input = "()(((()())(())()))(())"

def solution(assignment):
    arr = []
    arr.append()
    arr.pop()
    laser_count = 0
    stick_count = 0
    before = None

    for i in range(len(input)):
        if input[i] == '(':
            arr.append(input[i])
            before = input[i]
        elif input[i] == ')':
            arr.pop()
            if before == ')':
                stick_count += 1
            else:
                stick_count += len(arr)
            before = input[i]

    return stick_count