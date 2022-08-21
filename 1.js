let numbers = [1, 3, 5, 7, 8, 9, 10, 0, null, true, false, undefined];  
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
function oddNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if(item % 2) {
      ++count1;
    } else if(item % 2 == 0) {
      ++count2;
    } else if(item == null) {
      ++count3;
    }
  }
  console.log(count1);
  console.log(count2);
  console.log(count3);
} 
oddNumbers(numbers);