/* Write a getPrimes function that takes an integer value n as argument and generates prime numbers from 0 to n with asymptotic analysis. The generated prime numbers should be in an array. Your logic should be as efficient as possible (with minimal iterations). Write your own tests (10 test cases)*/
'use strict'

module.exports = {

	getPrimes: function(n){
		//create array to store result
		var result = [];
		//numbers less than 2 are not prime
		if (n < 2){
	  		return result;
		}
		//loop through the rest
		for (let j =2 ; j<= n; j++ ){
			var isPrime = true;
			var sqRoot = Math.ceil(Math.sqrt(j));
			for (let i=2; i <= sqRoot; i++){
				if (j % i === 0 && j !== i){
			  		isPrime = false;
				}
			}
		if (isPrime === true){
	  		result.push(j);
		}
		}
	return result;
	}
}
