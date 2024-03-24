function factorial(x){
    if(x===0){
        return 1;
    }
    // Using recrusion 
    return x*factorial(x-1);
    
}
const num1 = 5 ;
console.log(`factorial of ${num1} is ${factorial(num1)}`);
const num2 = 10;
console.log(`Factorial of ${num2} is ${factorial(num2)}`);