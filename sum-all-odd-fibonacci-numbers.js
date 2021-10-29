module.exports = function (num) {
  // write your code here
  let firstnum =1
  let nextnum =1
  let sum = firstnum;
  while (nextnum <= num){
    if (nextnum %2 !==0){
      sum += nextnum;
    }
    nextnum += firstnum;
    firstnum = nextnum -firstnum;
  }
  return sum;
}
