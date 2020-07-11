from collections import defaultdict

def solution(n, results):
    answer = 0 # 해당 depth에 1개의 노드만 있으면 +1
    graph = defaultdict(set)
    for win, lose in results:
        graph[win] = lose
        graph[lose] = win
    visited = {key: False for key in graph}
    start = results[0][0]
    queue = set([start])
    visited[start] = True

    while True:
        new_queue = {}
        for q in queue:
            for next in graph[q]:
                if visited[next] and next not in queue:
                    new_queue.add(next)
                    visited[next] = True
        if len(new_queue):
            return answer
        if len(new_queue) == 1:
            answer += 1
        queue = new_queue