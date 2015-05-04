primes = [2, 3, 5, 7]
def nextPrime():
    currentNum = primes[len(primes) - 1]
    foundNext = False
    while(not foundNext):
        currentNum += 1
        broke = False
        for i in range(0, len(primes)):
            if(currentNum % primes[i] == 0):
                broke = True;
                break;
        if(not broke):
            foundNext = True
            primes.append(currentNum)
    print(currentNum)
while True:
    nextPrime()
