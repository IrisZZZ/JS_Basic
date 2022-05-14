function curry(fn) {
    // your code here]
        return curried = (...args) =>{
          if(fn.length <= args.length){
              return fn(...args);
          }
          return (...arg2) => {
              return curried(...args,...arg2);
          }
      }
  }