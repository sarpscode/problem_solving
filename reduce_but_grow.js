/// Reduce but grow 

function grow(x){
    let reduceX = x.reduce(function(num1,num2) {
        return num1 * num2
      }, 1)
      
      return reduceX
  }