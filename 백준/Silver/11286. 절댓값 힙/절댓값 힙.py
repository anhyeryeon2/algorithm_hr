import heapq as hq
import sys

input = sys.stdin.readline
pq =[]
for _ in range(int(input())):
    x=int(input())
    if x:
        hq.heappush(pq,(abs(x),x))

    else:
        if pq: # 비어있으면
            print(hq.heappop(pq)[1])
        else:
            print(0)
        # print(hq.heappop(pq) if pq else 0) 와 같다
