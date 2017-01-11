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

Array.prototype.search = function(numb){

	var mid = Math.floor(this.length / 2);
	var count = 0;
	var index = -1;
	var length = this.length;
	var indexing ={};

	
    if (numb > this[this.length-1]){
   		return {count : count, index : index, length : length};
	}
    else if (this[mid] === numb || this[0] === numb) {
    	this.count++;
    	for (var p in Array){
			indexing[Array[p]] = p;
		}
		this.index = indexing[numb]
		index = Number(this.index);
    	return {count: this.count, index : this.index, length:length};
    } 
    else if (this[mid] < numb && this.length > 2) {
        this.count++;
        for (var p in Array){
			indexing[Array[p]] = p;
		}
		this.index = indexing[numb]
		index = Number(this.index);
        this.splice(mid+1, Number.MAX_VALUE)
        this.search(numb);
        
    } 
    else if (this[mid] > numb && this.length > 2) {
        this.count++;
        for (var p in this){
			indexing[this[p]] = p;
		}
		this.index = indexing[numb]
		index = Number(this.index);
        this.splice(0, mid)
        this.search(numb);
        
    }
    else if (this.length == 2){
    	for (var h in this){
    		if (this[h] == numb){
    			this.count++;
    			return {count: this.count,index:Number(this.index),length:length};
    		}
    	}
    }
	return {count:count,index:index,length:length};
};

var binarySearch = [];
module.exports = binarySearch;