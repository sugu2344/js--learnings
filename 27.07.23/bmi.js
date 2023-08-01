var bmi = myfunction(80, 176);

function myfunction(a, b) {
  return Math.round((a / b ** 2) * 10000);
}
console.log(bmi);
