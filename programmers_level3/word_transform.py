def cmp(src: str, tar: str) -> bool:
    return sum(sc != tc for sc, tc in zip(src, tar)) == 1
        

def solution(begin, target, words):
    answer = 0
    queue = {begin}

    if target not in words:
        return 0

    while True:
        answer += 1
        new_queue = {}
        for q in queue:
            for word in words:
                if cmp(q, word):
                    new_queue.add(word)
        
        queue = new_queue
        if target in queue:
            break

    return answer