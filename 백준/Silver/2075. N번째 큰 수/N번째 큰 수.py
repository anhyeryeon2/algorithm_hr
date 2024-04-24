import heapq as hq
import sys
input = sys.stdin.readline

n= int(input())
heap=[]

init_num = list(map(int,input().split()))
for num in init_num:
    hq.heappush(heap,num)   #list객체를 풀어서 원소를 heap에 푸시

for i in range(n-1):
    numbers = list(map(int,input().split()))
    for num in numbers:
        if heap[0] <num:
            hq.heappush(heap,num)
            hq.heappop(heap)
print(heap[0])

