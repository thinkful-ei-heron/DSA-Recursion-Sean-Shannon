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

function stringSplitter(string, arr=[]){
  if(!string.includes('/')){
    arr.push(string);
    return arr;
  }
  let index = string.indexOf('/');
  let word = string.slice(0,index);
  arr.push(word);
  let newString = string.slice(index +1, string.length);
  return stringSplitter(newString, arr);
}

function fibonacci(number, sequence=[1,1], index=1){
    
    if(index>number-1){
      return sequence
    }

    sequence.push(sequence[index]+sequence[index-1])
      
    //console.log(sequence)
    ++index
    return fibonacci(number, sequence, index)
}

//console.log(fibonacci(10))

function factorial(number){

    if(number===0){
      return 1
    }

    return number * factorial(number-1)
}

//console.log(factorial(5))

function wayOutOfMaze(x,y, history =[]){
  
  let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];

  if((mySmallMaze[x+1][y]===(' ')) || (mySmallMaze[x+1][y]===('e'))){
    history.push('D')
    ++x
  }
  else if((mySmallMaze[x][y-1]===(' ')) ||(mySmallMaze[x][y-1]===('e'))) {
    history.push('L')
    --y
  }
  else if((mySmallMaze[x-1][y]===(' ')) || (mySmallMaze[x-1][y]===('e'))){
    history.push('U')
    --x
  }
  else if((mySmallMaze[x][y+1]===(' ')) || (mySmallMaze[x][y+1]===('e'))){
    history.push('R')
    ++y
  }
  else if(mySmallMaze[x][y]===('e')){
    return (history)
  }
  else if()


  console.log(history)
  console.log(mySmallMaze[1][0])
  wayOutOfMaze(x,y, history)


}

wayOutOfMaze(0,0);



