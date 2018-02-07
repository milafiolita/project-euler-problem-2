function fibonacci(){
  var x = 2; y = 1; sum = 2; n = 0;
  
  while (n < 4000000) {
    n = x + y;
    y = x;
    x = n;
    if (!(n % 2)) {
      sum += n;
    }
  }
  return sum;
}
console.log(fibonacci());
