/*You are to write a function, reverseString(string), that returns the reverse of the string provided. If the reverse of the string is the same as the original string, as in the case of palindromes, return true instead.

return null when the string is empty*/

'use strict'
module.exports = {

	reverseString: function(string){
		var reverse = '';
		if (string === ''){
			reverse = null;
		}
		for (let i = (string.length-1); i >= 0; i--){
			
			reverse += string[i];
			
		}
		if (reverse === string){
			return true;
		}
		return reverse;
	}
}