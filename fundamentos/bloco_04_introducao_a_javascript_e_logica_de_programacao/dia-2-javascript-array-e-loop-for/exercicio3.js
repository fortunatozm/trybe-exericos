
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index+=1) {
    
    soma = soma + numbers[index];
    
}

console.log(numbers.length);

let mediaart = soma/numbers.length;

console.log("A Média Aritmética é: ", mediaart);