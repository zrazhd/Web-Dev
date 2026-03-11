def xor(x, y):
    if x != y:
        return 1
    else:
        return 0

a, b = map(int, input().split())
print(xor(a, b))