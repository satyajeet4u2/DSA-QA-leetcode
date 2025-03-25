function isValid(s) {
    // Map of matching pairs
    const bracketPairs = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
    // ()[]{}@
    const stack = []; // Stack to store opening brackets
    for (let char of s) {
      // If it's a closing bracket
      console.log(char,"char")
      console.log(bracketPairs[char],"NOT IF")
      if (bracketPairs[char]) {
        console.log(bracketPairs[char],"IF")
        // Check if the stack is empty or the top doesn't match
        if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
          return false;
        }
      } else {
        // If it's an opening bracket, push onto the stack
        stack.push(char);
        console.log(stack,"stack PUSH")
      }
    }

    // If stack is empty, the string is valid
    return stack.length === 0;
  }
  
  // Example usage:
//  console.log("console",isValid("()"));      // Output: true
  console.log("console",isValid("()[]{}@"));  // Output: true
 // console.log("console",isValid("(]"));      // Output: false
 // console.log("console",isValid("([])"));    // Output: true
  