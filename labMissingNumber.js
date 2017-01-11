/*You are presented with two arrays, all containing positive integers. Create a function findMissing(arr1, arr2) that takes in two arguments, both of which are arrays. One of the arrays will have one extra number, see below
* [1,2,3] and [1,2,3,4] should return 4
* [4,66,7] and [66,77,7,4] should return 77*/
'use strict'

module.exports = {

	findMissing: function(arr1, arr2){

		var diff = [];
		var temp = {};

		for (var i = 0; i < arr1.length; i++){
			temp[arr1[i]] = true;
		}

		for (var j=0; j < arr2.length; j++){
			if (temp[arr2[j]]) {
		        delete temp[arr2[j]];
		    } else {
		        temp[arr2[j]] = true;
		    }
		}

		for (var k in temp) {
		    diff.push(k);
		}
		return Number(diff);
	}
}