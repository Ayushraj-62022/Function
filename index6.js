function curry(fn) {
    // Store the original function's arity (number of expected arguments)
    const arity = fn.length;
  
    // Recursive helper function to build up the curried function
    function curried(...args) {
      if (args.length >= arity) {
        // If all arguments are provided, execute the original function
        return fn(...args);
      } else {
        // Otherwise, return a new function that expects more arguments
        return (...moreArgs) => curried(...args, ...moreArgs);
      }
    }
  
    return curried;
  }
  
  // Example usage:
  function add(a, b) {
    return a + b;
  }
  
  // Curry the add function
  const curriedAdd = curry(add);
  
  // Test with various arguments
  console.log(curriedAdd(2)(3)); // Should log 5
  console.log(curriedAdd(5)(10)); // Should log 15
  console.log(curriedAdd(1, 2)); // Should log 3
  