function eachCons(array, n) {
    subarray = []; //массив в который будет выведен результат.
    for (let i = 0; i <=array.length-n; i++){
        subarray[i] = array.slice(i, i+n)
      }
    return subarray  
      
  }