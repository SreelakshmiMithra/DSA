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

// ===============================
// Pattern 2:Right Angle Triangle Star Pattern
// ===============================
function rightAngleTriangleStarPattern(size){
  for(let i=1;i<size;i++){
    let row="";
    for(let j=1;j<i+1;j++){
      row +="* ";
    }
    console.log(row);
  }
}
rightAngleTriangleStarPattern(5);

// ===============================