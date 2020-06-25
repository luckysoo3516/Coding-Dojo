import heapq
def overK(list, K):
    for i in range(len(list)):
        if list[i] < K:
            return False
    return True

def solution(scoville, K):
    count = 0
    heapq.heapify(scoville)
    # 모든 원소가 k 이상이 될때까지
    # 다 돌았는데도 k 이상이 안되면 -1을 리턴해야함.
    while not overK(scoville, K):
        if not overK(scoville, K) and len(scoville) == 1:
            return -1
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        heapq.heappush(scoville, first + second * 2)
        count += 1
    return count

def betterSolution(scoville, K):
    count = 0
    heapq.heapify(scoville)
    while True:
        first = heapq.heappop(scoville)
        if first >= K:
            break
        if len(scoville) == 0:
            return -1
        second = heapq.heappop(scoville)
        heapq.heappush(scoville, first + second * 2)
        count += 1
    return count