// Day One

// Target : let, var, const, undefined

// let example
let username = "Testuser123";
// var example
var age = 22;
// const example
const gender = "Male";
// Generic example
day = "day one";
// undefined example
let progress;
console.log(
  `username : ${username}, age : ${age}, gender : ${gender}, day : ${day}, progress:${progress}`
);
console.table([username, age, gender, day, progress]);

/*
What I learn:
     - console.log:
            console.log is a fundamental function in JavaScript used for debugging and displaying information in the console of a web browser or a Node.
            js environment. 
            It allows you to print messages, variables, and the results of expressions to help you understand how your code is behaving. 
            For example, you can use it to check the values of variables or to track the flow of your program. 
            It's a handy tool for identifying and fixing issues in your code.
     
     
        - string concatenation:
            String concatenation is the process of combining or joining two or more strings together to create a new string.            
            In JavaScript, you can achieve this by using the + operator. 
            For example, if you have two strings, "Hello" and "world," you can concatenate them to form "Hello world." 
            This is a common operation when building text or messages dynamically in your code, and it's often used to create more complex strings by combining simpler ones.
        
        
        - console.table:
            console.table is a JavaScript function that allows you to display data in a tabular format within the console. 
            This is particularly useful when working with arrays and objects, as it makes the data more organized and easier to read. 
            You can pass an array or an object to console.table, and it will present the data in a table format, showing keys and values for objects or elements in an array. 
            It's a valuable tool for visualizing complex data structures during development.


        - let v var:
            let and var are both used to declare variables in JavaScript, but they have different scoping rules. 
            var is function-scoped, meaning it is only accessible within the function it is declared in. 
            In contrast, let is block-scoped, so it is limited to the block (often denoted by curly braces) where it's defined. 
            This makes let a safer choice for variable declarations because it minimizes the risk of variable hoisting and unintended changes in scope. 
            In modern
            
            
            
      JavaScript development, it is recommended to use let over var for better code clarity and to avoid potential bugs related to variable scope.


Exercises:
    - https://dandkim.com/js-var-let-const/

*/
