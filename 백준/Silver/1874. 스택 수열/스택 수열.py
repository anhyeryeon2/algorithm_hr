
n= int(input())

stack,ans,find=[],[],True
#숫자 1부터 시작
now=1
for _ in range(n):
    num = int(input())
    #스택쌓기 push
    while now <= num:
        stack.append(now)
        ans.append('+')
        now+=1
    #pop
    if stack[-1] ==num:   # stack의 TOP이 입력한 숫자와 같다면
        stack.pop()       # 스택의 TOP을 꺼내 수열을 만들어 준다.
        ans.append('-')
    #불가능한 경우
    else:
        find =False

if not find:
    print('NO')
else:
    for i in ans:
        print(i)
