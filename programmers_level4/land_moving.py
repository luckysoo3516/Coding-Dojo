# 효율성 통과 못함
# https://programmers.co.kr/learn/courses/30/lessons/12984
def solution(land, P, Q):
    lands = sorted([element for array in land for element in array])
    total = int(sum(lands)) # 전체 블록의 갯수
    answer = float('inf')
    result = int(0)
    prev = int(0)
    for i, cell in enumerate(lands):
        # cell이 이전 cell과 같으면 continue
        if i > 0 and lands[i-1] == lands[i]: continue
        prev = int(sum(lands[:i]))
        up = int(i*cell - prev)
        down = int(total - prev - (len(lands)-i)*cell)
        result = int(up*P + down*Q)
        if result >= answer:
            break
        answer = int(min(answer, result))
    return answer