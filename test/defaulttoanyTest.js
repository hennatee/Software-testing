import defaultToAny from '../COMP.SE.200-2021-2022-1/src/defaultToAny.js';
import { expect } from 'chai';


describe('#defaultToAny()', function() {

    it('should return given value if it is a number', function() {
      expect(defaultToAny(1, 2, 3)).to.equal(1);
    });

    it('should return given value if it is a string', function() {
      expect(defaultToAny("test", 2, 3)).to.equal("test");
    });

    const array1 = [1,2,3]

    it('should return given value if it is an array', function() {
      expect(defaultToAny(array1, 2, 3)).to.equal(array1);
    });

    const obj1 = {test: 'test'}

    it('should return given value if it is an object', function() {
      expect(defaultToAny(array1, 2, 3)).to.equal(array1);
    });

    const symbol1 = Symbol('test');

    it('should return given value if it is a symbol', function() {
      expect(defaultToAny(symbol1, 2, 3)).to.equal(symbol1);
    });

    //returns NaN
    it('should return first default value (number) if given value is NaN', function() {
      expect(defaultToAny(NaN, 1, 2)).to.equal(1);
    });

    it('should return first default value (number) if given value is null', function() {
      expect(defaultToAny(null, 1, 2)).to.equal(1);
    });

    it('should return first default value (object) if given value is null', function() {
      expect(defaultToAny(null, obj1, 2)).to.equal(obj1);
    });

    it('should return first default value (number) if given value is undefined', function() {
      expect(defaultToAny(undefined, 1, 2)).to.equal(1);
    });

    //returns NaN
    it('should return second default value (string) if given value is NaN and first default value is NaN', function() {
      expect(defaultToAny(NaN, NaN, 'test')).to.equal('test');
    });  

    //returns NaN
    it('should return second default value (number) if given value is NaN and first default value is null', function() {
      expect(defaultToAny(NaN, null, 1)).to.equal(1);
    });  

    //returns NaN
    it('should return second default value (number) if given value is null and first default value is NaN', function() {
      expect(defaultToAny(null, NaN, 1)).to.equal(1);
    }); 

    //returns NaN
    it('should return second default value (number) if given value is undefined and first default value is NaN', function() {
      expect(defaultToAny(undefined, NaN, 1)).to.equal(1);
    }); 

    it('should return second default (number) value if given value is undefined and first default value is null', function() {
      expect(defaultToAny(undefined, null, 1)).to.equal(1);
    }); 

    it('should return second default value (NaN) if the first two parameters are null', function() {
      expect(defaultToAny(null, null, NaN)).to.be.NaN;
    });

    //returns NaN
    it('should return second default value (undefined) if the first two parameters are NaN', function() {
      expect(defaultToAny(null, null, undefined)).to.equal(undefined);
    });

    it('should return second default value (undefined) if the first two parameters are NaN', function() {
      expect(defaultToAny(NaN, NaN, undefined)).to.equal(undefined);
    });
    
});
  