import toString from '../COMP.SE.200-2021-2022-1/src/toString.js';
import { expect } from 'chai';

describe('#toString()', function() {
    it('should return string when parameter is already string', function() {
      expect(toString('test')).to.equal('test');
    })
    it('should return empty string when converted from null', function() {
      expect(toString(null)).to.equal('');
    });
    it('should return empty string when converted from undefined', function() {
      expect(toString(undefined)).to.equal('');
    });
    it('should return string when converted from array', function() {
      const numbers = [1, 2, 3];
      const numbersWithNull = [1, 2, null];
      expect(toString(numbers)).to.equal('1,2,3');
      expect(toString(numbersWithNull)).to.equal('1,2,');
    });
    it('should return string when converted from number', function() {
      expect(toString(-3)).to.equal('-3');
      expect(toString(1.234)).to.equal('1.234');
    });
    it('should return string when converted from sign -0', function() {
      expect(toString(-0)).to.equal('-0');
    });
    it('should return string when converted from symbol', function() {
      const symbol = Symbol('test');
      expect(toString(symbol)).to.equal('Symbol(test)');
    });
});