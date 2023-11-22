
var findAverage = function (nums) {
    // Code here
    
    let addition = nums.reduce(function(num1,num2){
      return num1 + num2
    })
    
    let division = addition / nums.length
    
    return division
  }