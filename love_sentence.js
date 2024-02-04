
// how much i love you

function howMuchILoveYou(nbPetals) {
    // your code
  let sentence = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ]
  
  let index = nbPetals % 6 - 1
  
if(index === -1) {
  index = sentence.length - 1
  }
  
  return sentence[index]
}