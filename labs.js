'use strict'

module.exports = {

    findMinMax: function (arr) {
        //create array for answer
        var final = [''];
        //store temp number as max and min
        var tMax = 0;
        var tMin = Number.MAX_SAFE_INTEGER;
        //loop through numbers
        for (let i=0; i<arr.length; i++){
            //change temp through loop
            if (arr[i] > tMax){
                tMax = arr[i];
            }
        }
        //return max
        final[1] = tMax;

        for (let i=0; i<arr.length; i++){
            //change temp through loop
            if (arr[i] < tMin){
                tMin = arr[i];
            }
        }
        //return min
        final[0] = tMin;
        if (tMin === tMax){
            final.splice(0,1);
        }
        return final;
    },

    fizzBuzz: function (numb){
        if ((numb % 3 === 0) && (numb % 5 === 0)){
            return "FizzBuzz";
        }else if (numb % 3 === 0){
            return "Fizz";
        }else if (numb % 5 === 0){
            return "Buzz";
        }else {return numb;}
    },

    aritGeo: function (lst){
        var length = lst.length;
        
        if(length == 0){
            return 0;

        }else if(length < 3 || !Array.isArray(lst)){
            return -1;

        }else{

            var diff = lst[1] - lst[0];
            var ratio = lst[1] / lst[0];
            var geo = true;
            var arit = true;

            for(var i = 2; i < lst.length; i++){
                if( lst[i] - lst[i-1] !== diff){
                    arit = false;
                }
                if(lst[i] / lst[i-1] !== ratio){
                    geo = false;
                }
            }
            if(arit === true){
                return "Arithmetic";

            }else if(geo === true){
                return "Geometric";

            }else{
                return -1;
            }
            
        }
    }
}
