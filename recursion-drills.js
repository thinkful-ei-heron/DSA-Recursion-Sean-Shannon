function countingSheep(num, phrase=': Another sheep jumps over the fence'){
  if (num === 0){
    return 'All sheep jumped over the fence';
  }
  console.log(num + phrase);
  return countingSheep(num-1);
}

// console.log(countingSheep(3));


function powerCalculator(integer, exp){
  if (exp < 0){
    return 'exponent should be >= 0';
  }
  if (exp === 0){
    return 1
  }
  if (exp === 1) {
    return integer;
  }
  return integer * powerCalculator(integer, exp-1);
}

// console.log(powerCalculator(10,3));