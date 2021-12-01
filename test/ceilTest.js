import ceil from '../COMP.SE.200-2021-2022-1/src/ceil.js';
import { expect } from 'chai';


describe('#ceil()', function() {

    it('should return rounded up integer when precision is 0 (default)', function() {
      expect(ceil(1.2345)).to.equal(2);
    });

    it('should set precision to 0 when null is given as a second parameter', function() {
      expect(ceil(1.23, null)).to.equal(2);
    });

    it('should return rounded up number with two decimals when precision is 2', function() {
      expect(ceil(1.2345, 2)).to.equal(1.24);
    });

    it('should return rounded up integer when precision is negative number', function() {
      expect(ceil(1234, -2)).to.equal(1300);
    });

    it('should return rounded up integer when precision is 0 (default) and given number is negative', function() {
      expect(ceil(-2.34)).to.equal(-2);
    });

    it('should return number with two decimals (.00) when given value is integer and precision is 2', function() {
      expect(ceil(2, 2)).to.equal(2.00);
    });

    it('should return 0 when given value is 0', function() {
      expect(ceil(0)).to.equal(0);
    });

    it('should return 0.000 when given value is 0 and precision is 3', function() {
      expect(ceil(0, 3)).to.equal(0.000);
    });

    //returns 0
    it('should throw an error for a null parameter', function() {
      expect(ceil(null)).to.throw();
    });

    //returns 0
    it('should return rounded up integer when given value is 0 and precision is negative number', function() {
      expect(ceil(0, -2)).to.equal(100);
    });
    
});