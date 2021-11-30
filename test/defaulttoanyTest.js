import defaultToAny from '../COMP.SE.200-2021-2022-1/src/defaultToAny.js';
import { expect } from 'chai';


describe('#defaultToAny()', function() {
    it('should return given value if it is not NaN, null or undefined', function() {
      expect(defaultToAny(1, 2, 3)).to.equal(1);
    });
    it('should return first default value if given value is NaN', function() {
      expect(defaultToAny(NaN, 1, 2)).to.equal(1);
    });
    it('should return first default value if given value is null', function() {
      expect(defaultToAny(null, 1, 2)).to.equal(1);
    });
    it('should return first default value if given value is undefined', function() {
      expect(defaultToAny(undefined, 1, 2)).to.equal(1);
    });
    it('should return second default value if given value is NaN and first default value is NaN', function() {
      expect(defaultToAny(NaN, NaN, 1)).to.equal(1);
    });  
    it('should return second default value if given value is NaN and first default value is null', function() {
      expect(defaultToAny(NaN, null, 1)).to.equal(1);
    });  
    it('should return second default value if given value is null and first default value is NaN', function() {
      expect(defaultToAny(null, NaN, 1)).to.equal(1);
    }); 
    it('should return second default value if given value is undefined and first default value is NaN', function() {
      expect(defaultToAny(undefined, NaN, 1)).to.equal(1);
    }); 
    it('should return second default value if given value is undefined and first default value is null', function() {
      expect(defaultToAny(undefined, null, 1)).to.equal(1);
    }); 
    it('should return second default value if none of the values are valid', function() {
      expect(defaultToAny(null, null, NaN)).to.equal(NaN);
    });
});
  