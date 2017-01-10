'use strict'

var reverseString = require('../labReverseString.js').reverseString;


describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(reverseString('civic')).toEqual(true);
    });

    it("should return true for `cac`", function() {
      expect(reverseString('cac')).toEqual(true);
    });

    it("should return true for `lisabonetatenobasil`", function() {
      expect(reverseString('lisabonetatenobasil')).toEqual(true);
    });

    it("should return true for `lisa bonet ate no basil`", function() {
      expect(reverseString('lisa bonet ate no basil')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(reverseString('misc')).toEqual('csim');
    });

    it("should return `gnirtSot` for `toString`", function() {
      expect(reverseString('toString')).toEqual('gnirtSot');
    });

  });

});