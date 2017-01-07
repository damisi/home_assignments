'use strict';

var findMinMax = require('../labs.js').findMinMax;

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

     it('should return [0,1090] for [0, 2, 1090 , 4]', function () {
      expect(findMinMax([0, 2, 1090, 4])).toEqual([0, 1090]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [4, 99999] for [99999, 4]', function () {
      expect(findMinMax([99999, 4])).toEqual([4, 99999]);
    });

    it('should return [0.1, 764234.72] for [764234.72, 0.1]', function () {
      expect(findMinMax([764234.72, 0.1])).toEqual([0.1, 764234.72]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
    });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
    });

    it('should return [99] for [99, 99, 99, 99]', function () {
      expect(findMinMax([99, 99, 99, 99])).toEqual([99]);
    });

    it('should return [10.2] for [10.2, 10.2, 10.2, 10.2]', function () {
      expect(findMinMax([10.2, 10.2, 10.2, 10.2])).toEqual([10.2]);
    });

    it('should return [9999999999999] for [9999999999999, 9999999999999, 9999999999999, 9999999999999]', function () {
      expect(findMinMax([9999999999999, 9999999999999, 9999999999999, 9999999999999])).toEqual([9999999999999]);
    });

  });

});
