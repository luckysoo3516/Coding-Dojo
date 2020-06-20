def solution(n, computers):
    check = [False for i in range(n)]
    answer = 0
    for i in range(n):
        if(check[i] == False):
            s = []
            s.append(i)
        
            while(len(s) != 0): # !s.empty()
                now = s.pop() # s.top
                check[now] = True

                for j in range(n):
                    if(check[j] == False and computers[now][j] == 1):
                        s.append(j)
            answer  = answer + 1
    return answer