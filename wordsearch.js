const transpose = function (matrix) {
    // Put your solution here
    let newMatrix = [];
    for (let row in matrix[0]) {
      let newArray = [];
      for (let col in matrix) {
        newArray.push(matrix[col][row]);
        //console.log("rowArray:", rowArray);
      }
      newMatrix.push(newArray);
    //   console.log("newMatrix:", newMatrix)
    }
   return newMatrix;
  };

  const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));

    let verticalLetters = transpose(letters);
    const verticalJoin = verticalLetters.map(ls => ls.join(''));

    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        } 
    }
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};


console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')
  );

console.log("");
console.log("-------------------------------------------------------");
console.log("");

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'SEINFELD')
);


module.exports = wordSearch;