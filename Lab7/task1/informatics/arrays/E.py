n = int(input())

arr = list(map(int, input().split()))

isFound = False
for i in range(1, n):
    if arr[i] * arr[i - 1] > 0:
        isFound = True
        break

if isFound:
    print("YES")
else:    
    print("NO")