// ===============================
// Pattern 1: Square Star Pattern
// ===============================

function squareStarPattern(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
}

squareStarPattern(5);
