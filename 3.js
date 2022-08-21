let a = +prompt('Первое число');    
let b = +prompt('Второе число');
  
function number1(func){
  func();  
  return function(){
    console.log(a);
    console.log(a+b);
  }
}
function number2(){
    console.log(b);
}
const resultFunc = number1(number2); 

resultFunc(); 
