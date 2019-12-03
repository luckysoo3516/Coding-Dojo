def solution(arrangement):
    arr = []
    stick_count = 0
    before = None

    for i in range(len(arrangement)):
        if arrangement[i] == '(':
            arr.append(arrangement[i])
            before = arrangement[i]
        elif arrangement[i] == ')':
            arr.pop()
            if before == ')':
                stick_count += 1
            else:
                stick_count += len(arr)
            before = arrangement[i]
    return stick_count