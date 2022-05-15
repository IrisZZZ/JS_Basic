function debounce( func, wait){
    let last;
    if(last){
        clearTimeout(last);
    }
    last = setTimeout( () => {
        func.apply(this, ...args);
    }, wait);
}