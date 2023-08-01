let array1 = [22, 58, 69, 12, 47, 55, 7, 36, 89, 75];
let array2 = [12, 34, 46, 22, 67, 47, 89];
let common =findCommonElement(array1, array2);
function findCommonElement(array1, array2) {
    let x=[];

    for (let i = 0; i < array1.length; i++) {
 
      
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
           x.push(array1[i])
            }
        }
    }
    return x;
}
console.log(common);