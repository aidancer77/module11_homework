function simpleNum() {  
  let a = prompt('Введите число')
if (a < 0 || a > 1000) {
  alert('Данные неверны')
} else if (a == 0 || a == 1) {
  alert('Чиcло натуральное')
} else if (a == 2 || a == 3 || a == 5 || a == 7) {
  alert('Число простое')
} else if (a % 2 == 0 || a % 3 == 0 || a % 5 == 0 || a % 7 == 0) {
  alert('Чиcло составное')
} else {
  alert('Число простое')
}
  const result = a;
  return result;
};

simpleNum();


