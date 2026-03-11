if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    
    maxx = max(arr)
    res = -101
    for v in arr:
        print(v)
        if v > res and v < maxx:
            res = v
        print(v, res)
    print(res)