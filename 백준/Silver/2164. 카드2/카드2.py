from collections import deque

N = int(input())

dp =deque()
for i in range(1,N + 1):
    dp.append(i)

while len(dp)>1:
    dp.popleft()
    dp.append(dp.popleft())

print(dp[0])