binary = input()  
ans = 0
sizee = len(binary)

for i in range(sizee):
    digit = int(binary[i])
    ans += digit * (2 ** (sizee - 1 - i)) 

print(ans)