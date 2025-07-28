// Write a function that implements a miniature stack-and-register-based programming language that has the following
// commands (also called operations or tokens):

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// REM : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
function minilang(instructions) {
  const stack = [];
  let register = 0;

  const commands = instructions.split(" ");
  
  commands.forEach((command) => {
    if (!Number.isNaN(Number(command))) {
        register = Number(command);
        // console.log(`register when assigned ${register}`)
    } else {
        switch (command) {
          case "PRINT":
            console.log(`Register Value: ${register}`);
            break;
            case "PUSH":
                stack.push(register);
                // console.log(`stack ${stack}`)
                // console.log(`Register value ${register}`)
                break;
            case "POP":
                register = stack.pop();
                break;
            case "ADD":
                register += stack.pop();
                break;
            case "SUB":
                register -= stack.pop();
                break;
            case "MULT":
                register *= stack.pop();
                break;
            case "DIV":
                const divisor = stack.pop();
                const result = Math.floor(register/divisor);
                register = result;
                break;
            case "REMAINDER":
                const number = stack.pop();
                register = register % number;
                break;
        }
    }
  });
}

console.log(minilang("PRINT"));
// 0

console.log(minilang("5 PUSH 3 MULT PRINT"));
// 15

console.log(minilang("5 PRINT PUSH 3 PRINT ADD PRINT"));
// // 5
// // 3
// // 8

console.log(minilang("5 PUSH POP PRINT"));
// // 5

console.log(minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT"));
// // 5
// // 10
// // 4
// // 7

console.log(minilang("3 PUSH PUSH 7 DIV MULT PRINT"));
// // 6

console.log(minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT"));
// // 12

console.log(minilang("-3 PUSH 5 SUB PRINT"));
// // 8

console.log(minilang("6 PUSH"));
// // (nothing is printed because the `program` argument has no `PRINT` commands)
