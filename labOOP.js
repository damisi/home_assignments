
//oop for a website that has info on Phone and laptops

var Content = function (){
	this.printName = function(){
		return this.name;
	}
	this.printModels = function(){
		var keys = [];
		for (var i in this.models){
			keys.push(i);
		}
		return keys;
	}
	this.printBrand = function(){
		return this.brand;
	}
	this.printWithRatings = function(){
		return this.models;
	}
	this.printRatings = function(option){
		return this.models[option];
	}
}

var Laptop = function (brand, models){
	
	this.brand = brand;
	this.models = models;
	this.name = Laptop.name;
}

var Phone = function (os){
	this.os = os;
	this.name = Phone.name;
	this.brand = Phone.brand;
	this.models = Phone.models;
}

Laptop.prototype = new Content();
Phone.prototype = new Laptop();

var htc = new Phone('Android');

htc.brand = 'HTC';

htc.models = {
	'One': 'Good',
	'10': 'Good', 
	'Desire Eye': 'bad'
};

var onePlus = new Phone('Android');

onePlus.brand = 'One Plus';

onePlus.models = {
	'One': 'Awesome',
	'2': 'Good',
	'X': 'Awesome',
	'3': 'Good',
	'3T': 'Awesome'
};

var asus = new Laptop ('Asus', {
	'Eee' : 'Good' ,
	'Zenbook' : 'Good' ,
	'Rog' : 'Good' , 
	'Chromebook' : 'Good' , 
	'Lamborghini' : 'Awesome' 
});

var dell = new Laptop ('Dell', {
	'Inspiron' : 'Good' ,
	'Latitude' : 'Good' ,
	'Precision': 'Good' ,
	'Vostro' : 'Good' ,
	'Xps': 'Good' ,
	'Alienware' : 'Awesome' 
});

// console.log(asus.printName());
// console.log(asus.printBrand());
// console.log(asus.printWithRatings());
// console.log(asus.printModels());
// console.log(dell.printName());
// console.log(dell.printBrand());
// console.log(dell.printWithRatings());
// console.log(dell.printModels());
// console.log(onePlus.printName());
// console.log(onePlus.printBrand());
// console.log(onePlus.printWithRatings());
// console.log(onePlus.printModels());


// remove comment markers below to test with jasmine
/*(function(){
  'use strict';

  describe("Website with information on laptops and phones", function() {
  	it("A new phone add should an object", function() {
      var Samsung = new Phone('Android');
      expect(typeof Samsung).toEqual(typeof {});
      expect(Samsung instanceof Phone).toBeTruthy();
    });

    it("A new laptop added should be a laptop", function() {
      var Sony = new Laptop('Sony');
      expect(Sony.name).toEqual('Laptop');
      expect(Sony instanceof Laptop).toBeTruthy();
    });

    it("A model should be registered", function() {
      var Sony = new Laptop('Sony','Vaio');
      expect(typeof Sony).toEqual(typeof {});
      expect(Sony.models).toBe('Vaio');
    });

    it("The model list should be an object", function() {
      var Sony = new Laptop('Sony',['Xperia', 'Vaio']);
      expect(typeof Sony).toEqual(typeof {});
      expect(typeof Sony.models).toEqual(typeof {});
    });

  });
})();*/