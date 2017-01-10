/*Write a words function that takes in a string argument and returns a JSON object showing how many instances of each word occur in the input.
For example for the input "olly olly in come free”, it should return 
olly: 2
in: 1
come: 1
free: 1*/

'use strict'
module.exports = {

	words: function(sentence){
		var result = {};
		var input = sentence.split(/\s+|\n/m);
		for (var words in input){
			var word = input[words];

			if (word in result){
				if (typeof result[word] == 'function'){
        			result[word] = "";
      			}
				var count = result[word];
				count ++;
				result[word] = count;
			}
			else{
				result[word] = 1;
			}
		}

	return result;
	}
}