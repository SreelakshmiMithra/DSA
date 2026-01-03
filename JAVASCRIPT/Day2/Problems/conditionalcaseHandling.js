
// --------- CASE 1: Voting Eligibility Checker ---------
function eligibleToVote(age) {

  // Case 1: Invalid input (negative age)
  if (age < 0) {
    console.log("Age:", age, " Invalid input");

  // Case 2: age = 0, age==0  we can write  "0"==0 no strict check so we use "===" newborn)
  } else if (age === 0) { 
    console.log("Age:", age, " Not eligible (newborn)");

  // Case 3: Below voting age
  } else if (age < 18) {
    console.log("Age:", age, " Not eligible to vote");

  // Case 4: Valid voting age
  } else {
    console.log("Age:", age, " Eligible to vote");
  }
}

eligibleToVote(23);  
eligibleToVote(18);  
eligibleToVote(15);   
eligibleToVote(0);    
eligibleToVote(-1);   