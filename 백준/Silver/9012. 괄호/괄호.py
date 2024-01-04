# 괄호


for _ in range(int(input())):
    stk =  []
    isVPS =True
    for ch in input():
        if ch == '(' :
            stk.append(ch)
        else:
            if len(stk) >0:
                stk.pop()
            else:
                isVPS = False
                break

    if stk:
        isVPS = False

    print('YES' if isVPS else 'NO')


