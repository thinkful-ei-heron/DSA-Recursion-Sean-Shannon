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

//console.log(powerCalculator(10,3));

function stringReverser(string){

  if (string === ''){
    return ('')
  }

  return string.charAt(string.length-1) + stringReverser(string.slice(0,-1))

}

//console.log(stringReverser('Hello World'))

function nthTriangular(num){

  if(num === 1) {
    return 1
  }

  return num + nthTriangular(num-1)
}

//console.log(nthTriangular(9))

function stringSplitter(string){

  let newArray = []

  if(string === ''){
    return
  }
  if(string[0]==='/'){
    newArray.push('')
  }
  newArray.push(string[0])
  return newArray[0] + stringSplitter(string.slice(1))

}


