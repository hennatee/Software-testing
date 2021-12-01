import defaultTo from '../COMP.SE.200-2021-2022-1/src/defaultTo.js';
import { expect } from 'chai';

describe('#defaultTo()', function() {

    //returns NaN
    it('should return default value if given value is NaN and default is a number', function() {
      expect(defaultTo(NaN, 1)).to.equal(1);
    });

    //returns NaN
    it('should return default value if given value is NaN and default is a string', function() {
      expect(defaultTo(NaN, 'test')).to.equal('test');
    });

    it('should return default value if given value is undefined and default is an array', function() {
      const array1 = [1, 2, 3]
      expect(defaultTo(undefined, array1)).to.equal(array1);
    });

    it('should return default value if given value is undefined and default is a string', function() {
      expect(defaultTo(undefined, 'test')).to.equal('test');
    });

    const obj1 = {name: "test"};

    it('should return default value if given value is undefined and default is an object', function() {
      expect(defaultTo(undefined, obj1)).to.equal(obj1);
    }); 

    it('should return default value if given value is null and default is a number', function() {
      expect(defaultTo(null, 1)).to.equal(1);
    });  

    it('should return default value if given value is null and default is an array', function() {
      expect(defaultTo(null, [1,2,3])).to.equal([1,2,3]);
    });

    it('should return given value if it is a number', function() {
      expect(defaultTo(1, 2)).to.equal(1);
    });

    it('should return given value if it is a string', function() {
      expect(defaultTo('test', 2)).to.equal('test');
    });

    it('should return given value if it is an array', function() {
      expect(defaultTo([1,2,3], 3)).to.equal([1,2,3]);
    });

    it('should return given value if it is a symbol', function() {
      const symbol = Symbol('test');
      expect(defaultTo(symbol, 2)).to.equal(symbol);
    });

    it('should return given value if it is an object', function() {
      expect(defaultTo(obj1, 1)).to.equal(obj1);
    })
});
  