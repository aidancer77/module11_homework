const random = function (min, max) {
    const randomResult = Math.floor(Math.random() * (max - min + 1) + min);
      console.log(randomResult);   
    }
    const intervalId = setInterval(
      random, 1000, 5, 15); 
    
    setTimeout(function(){
      clearInterval(intervalId)
    }, 10000)