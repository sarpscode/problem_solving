/// Remove Elements


function removeEveryOther(arr){
    //your code here
    let results = []
    for (i = 0; i < arr.length; i++){
      if(i % 2 == 0){
         results.push(arr[i])
      }
    }
    return results
  }