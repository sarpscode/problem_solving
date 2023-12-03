  //Array plus Array

  function arrayPlusArray(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    let addition = newArr.reduce(function(arr1 , arr2){
       return arr1 + arr2; //something went wrong
    })
    
    return addition
   
  }