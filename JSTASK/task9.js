let fname = "SUGANESH"; 
function removeVowels() {
    return fname.replace(/[AEIOU]/gi, '');
  }
  const result = removeVowels();
  console.log(result); 