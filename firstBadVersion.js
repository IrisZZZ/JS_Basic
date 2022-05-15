


/*
 type IsBad = (version: number) => boolean
 */

/**
 * @param {IsBad} isBad 
 */
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    let left= 0;
    let right = version;

    while(left < right - 1){
      let mid = Math.floor(left + (right - left)/2);
      if(isBad(mid)){
        right = mid;
      }else{
        left = mid;
      }
    }
    if(isBad(left)) return left;
    if(isBad(right)) return right;
    return -1;
    // write your code to return the first bad version
    // if none found, return -1
  }
}

