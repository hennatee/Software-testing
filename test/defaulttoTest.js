import defaultTo from '../COMP.SE.200-2021-2022-1/src/defaultTo.js';
import { expect } from 'chai';

describe('#defaultTo()', function() {
    it('should return default value if given value is NaN', function() {
      expect(defaultTo(NaN, 1)).to.equal(1);
      expect(defaultTo(NaN, 'test')).to.equal('test');
    });
    it('should return default value if given value is undefined', function() {
      expect(defaultTo(undefined, 'test')).to.equal('test');
    });
    it('should return default value if given value is null', function() {
      expect(defaultTo(null, 1)).to.equal(1);
    });  
    it('should return given value if it is not Nan, null or undefined', function() {
      expect(defaultTo(1, 2)).to.equal(1);
    })
});
  