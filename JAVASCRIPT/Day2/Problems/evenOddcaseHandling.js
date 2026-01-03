function isEvenOdd(number) {

  // Case 1: Invalid input (negative numbers)
  if (number < 0) {
    console.log("Number:", number, " Invalid input");

  // Case 2: Zero (special even case)
  } else if (number === 0) {
    console.log("Number:", number, " Even (special case)");

  // Case 3: Even numbers
  } else if (number % 2 === 0) {
    console.log("Number:", number, " Even");

  // Case 4: Odd numbers
  } else {
    console.log("Number:", number, " Odd");
  }
}

isEvenOdd(8);    
isEvenOdd(9);    
isEvenOdd(0);    
isEvenOdd(-5);   