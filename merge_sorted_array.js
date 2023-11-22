function mergeArrays(a, b) {
    // your code here
   let  results = []
   let sumA_B = a.concat(b)
    
    for(var i = 0; i < sumA_B.length; i++){
      
      if(a[i] == b[i]){
        results.push(a[i])
      }else if(a[i] < b[i]){
        results.push(a[i])
        results.push(b[i])
      }
      else{
        results.push(a[i])
        results.push(b[i])
      }   
    }
    results = new Set(results)
    results = Array.from(results)
    console.log(results.sort((a,b) => a-b))
     
    let sort_results = results.sort((a, b) => a-b)
    
    return sort_results.filter(item => item !== undefined)
     console.log(sort_results)
     
  }