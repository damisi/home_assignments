'use strict'

	Array.prototype.toTwenty= function(){
		var toTwenty = [];
		for (let i = 1; i <= 20;i++){
			toTwenty.push(i);
		}
		return toTwenty;
	};

	Array.prototype.toForty = function (){
		var toForty = [];
		for (let i = 2; i <= 40;i=i+2){
			toForty.push(i);
		}
		return toForty;
	};

	Array.prototype.toOneThousand = function (){
		var toOneThousand = [];
		for (let i = 10; i <= 1000;i=i+10){
			toOneThousand.push(i);
		}
		return toOneThousand;
	};
	Array.prototype.search = function(number){
	    var mid = Math.floor(Array.length / 2);
	    var count = 0;
	    while (Array.length > 1){
		    if (Array[mid] === number) {
		        count++;
		    	break;
		    } 
		    else if (Array[mid] < number && Array.length > 1) {
		        binarySearch(Array.splice(mid, Number.MAX_VALUE), i);
		        count++;
		    } 
		    else if (Array[mid] > number && Array.length > 1) {
		        binarySearch(Array.splice(0, mid), i);
		        count++;
		    }else if (Array.length == 2){
		    	for (var h in Array){
		    		if (Array[h] == number){
		    			break;
		    			count++;
		    		}
		    	}
		    }
		    
			Array.prototype.search.count = count;
			var index = function(number){
				var indexing ={};
				for (var p in Array){
					indexing[Array[p]] = p;
				}
				return indexing[number]
			};
			var length = Array.length;
		}
		var result = {
			count:count,
			index:index,
			length:length
		};
		return result;
};

var binarySearch = [];
module.exports = binarySearch;