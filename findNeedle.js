// A Needle in the Haystack

function findNeedle(haystack) {
    // your code here
    const isNeedleIn = ((element) => element === "needle");
    let imNeedle = haystack.findIndex(isNeedleIn)
    return "found the needle at position " + imNeedle
  }
  