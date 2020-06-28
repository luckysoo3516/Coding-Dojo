from collections import defaultdict

def solution(n, edge):
    graph = defaultdict(set)
    for start, end in edge:
        graph[start].add(end)
        graph[end].add(start)
    
    queue = set([1])
    visited = {key: False for key in graph}
    visited[1] = True
    
    while True:
        new_queue = set()
        for q in queue:
            for next in graph[q]:
                if not visited[next] and next not in queue:
                    new_queue.add(next)
                    visited[next] = True
                    
        if not len(new_queue):
            return len(queue)
        
        queue = new_queue