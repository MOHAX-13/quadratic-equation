module.exports = function solveEquation(equation) {
  // your implementation
  let arr = equation.split(" ");
  let a = +arr[0];
  let b = arr[3]+arr[4];
  let c = arr[7]+arr[8];
  let x1=Math.round(-b/2/a+Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a);
  let x2=Math.round(-b/2/a-Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a);
  result = (x1>x2) ? [x2,x1] : [x1,x2];
  return result;
}
