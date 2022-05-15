function flat(arr, depth = 1) {
    return arr.reduce((acc, current)=> {
      if(Array.isArray(current) && depth >=1){
        let arr2 = flat(current, depth - 1);
        acc = [...acc, ...arr2];
      }else{
        acc.push(current);
      }
      return acc;
    }, [])
    // your imeplementation here
  }