
function countPositivesSumNegatives(input) {

    if(input === null){
      return[]
    }
    //if (input == null || input.length == 0) {
        //return [];
    //}   

    if(input.filter(number => number != 0).length == 0) return [];
    
    let countOfPositives = 0;
    let sumOfNegatives = 0;
    
    for(let number of input){
      if(number < 0){
        sumOfNegatives = sumOfNegatives + number;
      }else if(number > 0){
        countOfPositives = countOfPositives + 1;
      }
    }
    
    return [countOfPositives, sumOfNegatives]
  }

  /*  function countPositivesSumNegatives(input) {
  // your code here
  
  if(input === null){
      return[]
    }   

    filtered = input.filter(number => number != 0);
    
    if (filtered.length == 0) {
      return [];
    }
    
    let countOfPositives = 0;
    let sumOfNegatives = 0;
    
    for(let number of input){
      if(number < 0){
        sumOfNegatives = sumOfNegatives + number;
      }else if(number > 0){
        countOfPositives = countOfPositives + 1;
      }
    }
    
    return [countOfPositives, sumOfNegatives]
}*/

  