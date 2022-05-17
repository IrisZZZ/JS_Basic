function memo(func, resolver) {
    const cache = {};;
    
    return function (...args) {
      const key = resolver ? resolver(...args) : args.join('_');
      if (!cache[key]) {
        cache[key] = func.apply(this, args);
      }  
      return cache[key];
    };
  }