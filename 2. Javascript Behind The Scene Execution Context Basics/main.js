var name = 'Shihab';
var fullName = "Sajjatul Islam";

function first() {
    var first = ' First function';
    console.log(first); // Step 1 output
    second();           // Step 2
    var another = 26;
    console.log(another); // Step 5
}

function second() {
    console.log("Second function"); // Step 3
    third();                        // Step 4
}

function third() {
    console.log(name);              // Step 4.1
    console.log("Third function");  // Step 4.2
}

first();             // Step 0
console.log(fullName); // Step 6

// understand execution context, creation phase, execution phase, stack follow this link
// https://www.notion.so/execution-context-creation-phase-execution-phase-stack-17c9ad7627238000bb0dcc69906e560e