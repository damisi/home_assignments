'use strict';

var getPrimes = require('C:/Users/PIKUDA/Documents/andela/home assignments/home_assignments/codeGetPrimes.js').getPrimes;

describe ("Get primes tests", function(){
	it ("should return empty array for '-100'", function(){
		expect(getPrimes(-100)).toEqual([]);
	});

	it ("should return empty array for '0'", function(){
		expect(getPrimes(0)).toEqual([]);
	});
	
	it ("should return empty array for '1'", function(){
		expect(getPrimes(1)).toEqual([]);
	});
	
	it ("should return [2] for '2'", function(){
		expect(getPrimes(2)).toEqual([2]);
	});
	
	it ("should return [2,3] for '3'", function(){
		expect(getPrimes(3)).toEqual([2,3]);
	});
	
	it ("should return [2,3,5] for '5'", function(){
		expect(getPrimes(5)).toEqual([2,3,5]);
	});
	
	it ("should return [2,3,5] for '6'", function(){
		expect(getPrimes(6)).toEqual([2,3,5]);
	});
	
	it ("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97] for '100'", function(){
		expect(getPrimes(100)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
	});
	
	it ("should return [2,3,5,7,11] for '12'", function(){
		expect(getPrimes(12)).toEqual([2,3,5,7,11]);
	});
	
	it ("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47] for '50'", function(){
		expect(getPrimes(50)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
	});
	
});

