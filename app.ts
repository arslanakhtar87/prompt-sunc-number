import promptSync from "prompt-sync"
const prompt = promptSync ();

let num1 = parseInt(prompt('enter fierst number: '));
let num2 = parseInt(prompt('enter second number: '));
console.log(typeof num2);
console.log(num1+num2);