function countingSheep(num, phrase = ': Another sheep jumps over the fence') {
    if (num === 0) {
      return 'All sheep jumped over the fence';
    }
    console.log(num + phrase);
    return countingSheep(num - 1);
  }
  
  // console.log(countingSheep(3));
  
  
  function powerCalculator(integer, exp) {
    if (exp < 0) {
      return 'exponent should be >= 0';
    }
    if (exp === 0) {
      return 1;
    }
    if (exp === 1) {
      return integer;
    }
    return integer * powerCalculator(integer, exp - 1);
  }
  
  //console.log(powerCalculator(10,3));
  
  function stringReverser(string) {
  
    if (string === '') {
      return ('');
    }
  
    return string.charAt(string.length - 1) + stringReverser(string.slice(0, -1));
  
  }
  
  //console.log(stringReverser('Hello World'))
  
  function nthTriangular(num) {
  
    if (num === 1) {
      return 1;
    }
  
    return num + nthTriangular(num - 1);
  }
  
  //console.log(nthTriangular(9))
  
  function stringSplitter(string, arr = []) {
    if (!string.includes('/')) {
      arr.push(string);
      return arr;
    }
    let index = string.indexOf('/');
    let word = string.slice(0, index);
    arr.push(word);
    let newString = string.slice(index + 1, string.length);
    return stringSplitter(newString, arr);
  }
  
  function fibonacci(number, sequence = [1, 1], index = 1) {
  
    if (index > number - 1) {
      return sequence;
    }
  
    sequence.push(sequence[index] + sequence[index - 1]);
  
    //console.log(sequence)
    ++index;
    return fibonacci(number, sequence, index);
  }
  
  //console.log(fibonacci(10))
  
  function factorial(number) {
  
    if (number === 0) {
      return 1;
    }
  
    return number * factorial(number - 1);
  }
  
  //console.log(factorial(5))
  
  function wayOutOfMaze(maze, x, y, history = []) {
  
    if (maze[x][y] === ('e')) {
      return history;
    }
    else {
      if (x + 1 < maze.length && history[(history.length - 1)] !== 'U') {
        if ((maze[x + 1][y] === (' ')) || (maze[x + 1][y] === ('e'))) {
          history.push('D');
          ++x;
          return wayOutOfMaze(maze, x, y, history);
        }
  
      }
      if (y - 1 >= 0 && history[(history.length - 1)] !== 'R') {
        if ((maze[x][y - 1] === (' ')) || (maze[x][y - 1] === ('e'))) {
          history.push('L');
          --y;
          return wayOutOfMaze(maze, x, y, history);
        }
  
      }
      if (x - 1 >= 0 && history[(history.length - 1)] !== 'D') {
        if ((maze[x - 1][y] === (' ')) || (maze[x - 1][y] === ('e'))) {
          history.push('U');
          --x;
          return wayOutOfMaze(maze, x, y, history);
        }
  
      }
      if (y + 1 < maze[0].length && history[(history.length - 1)] !== 'L') {
        if ((maze[x][y + 1] === (' ')) || (maze[x][y + 1] === ('e'))) {
          history.push('R');
          ++y;
          return wayOutOfMaze(maze, x, y, history);
        }
  
      }
    }
  }
  
  let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];
  
  let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', 'e'],
    [' ', ' ', ' ']
  ];
  
  //console.log(wayOutOfMaze(maze, 0, 0));
  
  function allWaysOutOfMaze(maze, x=0, y=0, path=[], direction=[], history=0){
  
    if ( x < 0 || y < 0 || x > maze[0].length - 1 || y > maze.length - 1 || maze[y][x] === '*' ){
      return
    }
  
      path[history] = direction;
      history++;
  
      if (maze[y][x] === 'e') {
          console.log(`Path to the exit: ${path.slice(1)}`);
      }
  
      if (maze[y][x] === ' ') {
          maze[y][x] = '*';
  
          allWaysOutOfMaze(maze, x - 1, y, path, 'L', history);
          allWaysOutOfMaze(maze, x + 1, y, path, 'R', history);
          allWaysOutOfMaze(maze, x, y - 1, path, 'U', history);
          allWaysOutOfMaze(maze, x, y + 1, path, 'D', history);
  
          maze[y][x] = ' ';
      }
  
      history--;
  }
  
  console.log(allWaysOutOfMaze(maze));
  
  const orgChart = {
    Zuckerberg: {
      Schroepfer: { Bosworth: ['Steve', 'Kyle', 'Andra'], Zhao: ['Richie', 'Sofia', 'Jen'] },
      Schrage: { VanDyck: ['Sabrina', 'Michelle', 'Josh'], Swain: ['Blanch', 'Tom', 'Joe'] },
      Sandberg: {
        Goler: ['Eddie', 'Julie', 'Annie'],
        Hernandez: ['Rowi', 'Inga', 'Morgan'],
        Moissinac: ['Amy', 'Chuck', 'Vinni'],
        Kelley: ['Eric', 'Ana', 'Wes']
      }
    }
  };
  
  function organizationalchart(orgChart, nested = '') {
    if (Array.isArray(orgChart)) {
      for (let i = 0; i < orgCharObj.length; i++) {
        console.log(nested + orgCharObj[i]);
      }
      nested = nested.slice(nested.length - 2);
      return;
    }
  
    for (const key in orgChart) {
      console.log(nested + key);
      nested = nested + '\xa0\xa0';
      organizationalChart(orgChart[key], nested);
      nested = nested.slice(0, nested.length - 2);
    }
  };
  
  //organizationalChart(orgChartObj);
  
  function anagram(word, array= []) {
    if (word.length !== 4) {
      return '4 letter words only please'
    }
  
    if (array.length === 24) {
      return array;
    }
    if (!array.includes(word)) {
      array.push(word);
    }
    let newWord = word[0] + word[1] + word[3] + word[2]
    if (array.includes(newWord)) {
      newWord = word[0] + word[3] + word[1] + word[2]
      if (array.includes(newWord)) {
        newWord = word[0] + word[3] + word[2] + word[1]
        if (array.includes(newWord)) {
          newWord = word[0] + word[2] + word[3] + word[1]
          if (array.includes(newWord)) {
            newWord = word[0] + word[2] + word[1] + word[3]
            if (array.includes(newWord)) {
              newWord = word[1] + word[2] + word[3] + word[0]
            }
          }
        }
      }
    }
    return anagram(newWord, array);
  }
  
  function binaryRep(num) {
    if (num <= 0) {
      return '';
    }
    let binary = num % 2;
    return binaryRep(Math.floor(num / 2)) + binary;
  }
  
  console.log(binaryRep(25));