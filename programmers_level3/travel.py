from collections import defaultdict

def solution(tickets):
    graph = defaultdict(list)    
    for start, end in tickets:
        graph[start].append(end)
        
    for key in graph:
        graph[key].sort(reverse=True)

    stack = [("ICN", [])]
    while stack:
        curr, visited = stack.pop()
        if len(visited) == len(tickets):
            return [v for v, _ in visited] + [curr]
        
        for i, next in enumerate(graph[curr]):
            if (curr, i) not in visited:
                stack.append((next, visited + [(curr, i)]))