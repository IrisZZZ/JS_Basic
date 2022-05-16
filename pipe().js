/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	return function(args){
		return funcs.reduce((acc, current) => {
			return current(acc);
		}, args)
	}
	// your code here
}
