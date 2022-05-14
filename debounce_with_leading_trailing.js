function debounce(func, wait, option = {leading: false, trailing: true}) {
    let last;
    let flag = false;
    let {leading, trailing} = option;
    return (...args) => {
      if(!last && leading){
        func(...args);
        flag = true;
      }
      if(last){
        clearTimeout(last);
        flag = false;
      }
      last = setTimeout(() => {
        if(trailing && !flag){
          func(args);
        }
        flag = false;
        last = null;
        }, wait);
    }
    // your code here
  }
  
  