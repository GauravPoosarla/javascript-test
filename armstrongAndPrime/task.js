function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i == 0) return false;
  }
  return true;
}

// let prime_check = (x) => {
//     for(let i=2; i<=Math.sqrt(x); i++)
//     {
//         if(x%i == 0)
//             return false;
//     }
//     return true;
// }

function isArmstrong(number) {
  const numberOfDigits = number.length;
  let sum = 0;

  // create a temporary variable
  let temp = number;

  while (temp > 0) 
  {
      let remainder = temp % 10;

      sum += remainder ** numberOfDigits;

      temp = parseInt(temp / 10); 
  }

  if (sum == number) 
  {
      return true;
  } 
  else 
  {
      return false;
  }
}

// let armstrong_check = (x) => {
//     let sum = 0;
//     const numDigits = x.length;

//     let temp = x;

//     while(temp > 0)
//     {
//         let lastDigit = temp%10;
//         sum += lastDigit ** numDigits;
//         temp = parseInt(temp / 10);
//     }

//     if(sum == x)
//         return true;
//     else
//         return false;
// }

console.log(isArmstrong('371'));

module.exports = { isPrime, isArmstrong };
