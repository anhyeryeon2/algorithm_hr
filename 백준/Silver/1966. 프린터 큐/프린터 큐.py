from collections import deque

t = int(input())

for _ in range(t):
    n, m = map(int, input().split())
    importance = deque(list(map(int, input().split()))) 
    # 중요도 데큐에 넣기 
    cnt = 0  #인쇄된 문서 

    while(True):
        best_imp = max(importance) # 중요도가 최고인 값을 저장
        first = importance.popleft() # 맨 앞의 중요도 pop
        m -= 1 # 자신의 순번은 1개 가까워짐

        if best_imp == first:  # 궁금한게 젤 우선순위 높다면 
            cnt += 1  
            if m < 0:     # 궁금한게 음수하면 
                print(cnt)  # 끝 
                break
        else:
            importance.append(first)  
            if m < 0:
                m = len(importance) - 1
                