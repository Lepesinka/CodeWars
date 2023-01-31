// Sum Numbers
function sum (numbers) {
    if (numbers == 0)
      return 0
    else
      return numbers.reduce((a,b)=>a+b)    
};