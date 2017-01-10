/*You are to write a function, reverseString(string), that returns the reverse of the string provided. If the reverse of the string is the same as the original string, as in the case of palindromes, return true instead.

return null when the string is empty*/

'use strict'
module.exports = {

	reverseString: function(string){
		var reverse = [];
		var intermediate = [];

		if (string === ''){
			reverse = null;
		}
		else{
			var splitting = string.split('');

			for (let i = (splitting.length-1); i >= 0; i--){
				
				intermediate.push(splitting[i]);
			}

			reverse = intermediate.join('');
			var joined = reverse.replace(/ /g, '')
			var sJoined = string.replace(/ /g, '')
			
			if (sJoined === joined){
				return true;
			}
			else if (reverse === string){
				return true;
				
			}
		}
		return reverse;
	}
}