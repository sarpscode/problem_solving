    //Merge two sorted arrays into one

    function mergeArrays(arr1, arr2) {
        var results = arr1.concat(arr2)
        results = new Set(results)
        results = Array.from(results)
        return results.sort((num1, num2) => num1 - num2)
      }