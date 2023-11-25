// Square and sum

function squareSum(numbers){
  
    var spuareElements = numbers.map(function(element){       
       return element ** 2
    })
    
    let addElements = spuareElements.reduce(function(num1,num2){
      return num1 + num2
    }, 0) 

    return addElements
  }