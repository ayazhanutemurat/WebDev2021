x = int(input())
d = 2
for i in range(2, int(x/2)+1): #
    if x % i == 0:
        d += 1
print(d)