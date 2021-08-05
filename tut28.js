
console.log("This is my javascript");
function greet(name, greetText = "helo world" ){
    let name1="Name1"
    // This let name1 has a scope onnly insiide the function
    console.log(greetText +  "" +  name)
    // console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d = a + b+c;
    return  d;


    // This line will never execute (Unreachable code))
    // console.log("Function is returned");
}
function product(a,b,c){
    let d = a * b*c;
    return  d;
}
function divide(a,b,c){
    let d = a / b /c;
    return  d;
}
function max(a,b){
   if (a>b) {
      console.log(a+" is greater") ;
   } 
   else {
   console.log(b +"  is greater");    
   }
}
function min(a,b){
   if (a>b) {
      console.log(b+" is lesser") ;
   } 
   else {
   console.log(`${a}  is lesser`);    
   }
}



let name = "  Saksham";
let name1 = " Rahul";
let name2 = " ali";
let name3 = " vishwesh";
let greetText ="Good morning"
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
// greet(name3, );
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");

let returnVal= sum(65757,2857585,3858558549);
console.log(returnVal);
let returnVal2= product(65757,2857585,3858558549);
console.log(returnVal2);
let returnVal3= divide(65757,2857585,3858558549);
console.log(returnVal3);


let returnVal4 = max(14,5);

console.log(returnVal4);

let returnVal5 = min(14,5);

console.log(returnVal5 );