import isArrayLike from '../COMP.SE.200-2021-2022-1/src/isArrayLike.js';
import { assert, expect } from 'chai';


describe('#isArrayLike()', function() {
    function passedAsParameter(){
      return;
    }

    it('should return false for a function', function() {
      expect(isArrayLike(passedAsParameter)).to.equal(false);
    });

    it('should return true for a filled array', function() {
      expect(isArrayLike(['a', 'b'])).to.equal(true);
    });

    it('should return true for an empty array', function() {
      expect(isArrayLike([])).to.equal(true);
    });

    it('should return false for a variable with no length', function() {
      expect(isArrayLike(24)).to.equal(false);
    });

    it('should return false for a null parameter', function() {
      expect(isArrayLike(null)).to.equal(false);
    });
});