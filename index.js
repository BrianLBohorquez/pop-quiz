let score = 0;

let answerInput;

let answer;

answerInput = prompt(`The "let" keyword can be used to declare a variable.
Enter true or false.
`);

answer = answerInput;

if (answer === "true") {
  alert("Correct");
  score = score + 1;
} else if (answer === "false") {
  alert("Incorrect");
} else {
  alert("Please write true or false");
}

answerInput = prompt(`10 % 3 === 1 evaluates to true.
Enter true or false.
`);

answer = answerInput;

if (answer === "true") {
  alert("Correct");
  score = score + 1;
} else if (answer === "false") {
  alert("Incorrect");
} else {
  alert("Please write true or false");
}

answerInput = prompt(`After this code runs, the value of b is 12.

let b = 17;
b = b - 5;
b = 6 * 12 / b;

Enter true or false.
`);

answer = answerInput;

if (answer === "true") {
  alert("Incorrect");
} else if (answer === "false") {
  alert("Correct");
  score = score + 1;
} else {
  alert("Please write true or false");
}
