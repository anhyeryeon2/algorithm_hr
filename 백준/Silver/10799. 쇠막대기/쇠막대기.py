question = input()
stack = []
answer = 0

for idx in range(len(question)):
    if question[idx] == '(': # 열린 괄호는 스택 추가 
        stack.append('(')

    else: # 닫는 괄호의 경우
        if question[idx-1] == '(': # 직전이 "(" 였으면 (레이저인경우 )
            stack.pop()
            answer += len(stack) #현재의 쇠막대기들을 카운팅
        else:  # ) 인 경우   -> 쇠막대기의 끝인경우 
            stack.pop()
            answer += 1 # 쇠막대기 조각 개수 추가,

print(answer) # 쇠막대기 조각 개수 출력 