
/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
    // your code here
    let lastArgs = null;
    let isWaiting = false;
    let {leading, trailing} = option
    return (...args) => {
      if( isWaiting){
        lastArgs = args;
        return;
      }
  
      if(leading){
        func(args);
      }
      isWaiting = true;
      let timeout =() => {setTimeout(() => {
        isWaiting = false;
        if(trailing && lastArgs){
          func(lastArgs);
          lastArgs = null;
          isWaiting = true;
          timeout();
        }
      }, wait)}
      timeout();
    }
  }