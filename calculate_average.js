/// Calculate average

function findAverage(array) {
    // your code here
    if(array = 0){
      return 0
    }
    
    let sum = array.reduce(function(num1, num2){
      return num1 + num2
    } ,0)
    
    return sum / array.length;
  }