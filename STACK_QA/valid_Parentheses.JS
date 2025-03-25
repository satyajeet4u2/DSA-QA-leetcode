function isValid(s) {
    // Map of matching pairs
    const bracketPairs = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
    
    const stack = []; // Stack to store opening brackets
  
    for (let char of s) {
      // If it's a closing bracket
      if (bracketPairs[char]) {
        // Check if the stack is empty or the top doesn't match
        if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
          return false;
        }
      } else {
        // If it's an opening bracket, push onto the stack
        stack.push(char);
      }
    }
  
    // If stack is empty, the string is valid
    return stack.length === 0;
  }
  
  // Example usage:
  console.log(isValid("()"));      // Output: true
  console.log(isValid("()[]{}"));  // Output: true
  console.log(isValid("(]"));      // Output: false
  console.log(isValid("([])"));    // Output: true
  