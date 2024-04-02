let prompt = require("prompt-sync")({sigInt:true})
let num = prompt("enter a number:")
let a= ' '
let b=' '
for(let i=1;i<=num;i++){
    if(i%2==0){
        a+=i + " "
    }
    else{
        b+=i + " "
    }
}
console.log("Even nos from 1 to ",num,"is: ",a)
console.log("Odd nos from 1 to ",num,"is: ",b)