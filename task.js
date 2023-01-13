let prime_check = (x) => {
    for(let i=2; i<=Math.sqrt(x); i++)
    {
        if(x%i == 0)
            return false;
    }
    return true;
}

let armstrong_check = (x) => {
    let sum = 0;
    const numDigits = x.length;

    let temp = x;

    while(temp > 0)
    {
        let lastDigit = temp%10;
        sum += lastDigit ** numDigits;
        temp = parseInt(temp / 10);
    }

    if(sum == x)
        return true;
    else
        return false;
}

console.log(isPrime(20));
console.log(isPrime(7));

console.log(isArmstrong('153'));
console.log(isArmstrong('50'));