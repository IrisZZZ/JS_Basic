function throttle( func, wait){
    let startTime = 0;
    return (...args) => {
        let currentTime = new Date().getTime();
        if(currentTime - startTime < wait) return;
        startTime = currentTime;
        func.apply(this, ...args);
    }
}
function throttle_2 (func, wait){
    let lastArgs  = null;
    let isWaiting = false;
    return (...args) => {
        if(isWaiting){
            lastArgs = args;
            return;
        }
        func(...args);
        isWaiting = true;
        let timeOut = setTimeout( () => {
            isWaiting = true;
            if(lastArgs){
                func(...lastArgs);
                lastArgs = null;
                isWaiting = true;
                timeOut();
            }
        })
        timeOut();

    }
}