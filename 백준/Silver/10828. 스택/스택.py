import sys
input = sys.stdin.readline

# 명령어의 개수를 입력
n = int(input())

# 명령어를 입력
lst = [input() for _ in range(n)]

# 스택 초기화
stack = []

# 각 명령어를 수행
for l in lst:
    # 만약 명령어가 push 연산이면
    if 'push' in l.split()[0]:
        # 해당 숫자를 스택에 넣음
        stack.append(int(l.split()[1]))
    # 만약 명령어가 top 연산이면
    elif 'top' in l:
        # 스택이 비어있지 않으면 스택의 가장 위의 값을 출력
        # 스택이 비어있으면 -1을 출력
        print(stack[-1]) if stack else print(-1)
    # 만약 명령어가 size 연산이면
    elif 'size' in l:
        # 스택의 크기를 출력
        print(len(stack))
    # 만약 명령어가 empty 연산이면
    elif 'empty' in l:
        # 스택이 비어있지 않으면 0을 출력
        # 스택이 비어있으면 1을 출력
        print(0) if stack else print(1)
    # 만약 명령어가 pop 연산이면
    elif 'pop' in l:
        # 스택이 비어있지 않으면 가장 위의 값을 스택에서 빼내어 출력
        # 스택이 비어있으면 -1을 출력
        print(stack.pop()) if stack else print(-1)