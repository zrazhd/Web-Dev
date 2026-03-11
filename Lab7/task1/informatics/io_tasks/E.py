a = int(input())
b = int(input())

if (a * b < 109):
    print(109 % a * b)
else:
    print(a * b % 109)