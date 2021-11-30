import isObject from '../COMP.SE.200-2021-2022-1/src/isObject.js';
import { assert, expect } from 'chai';

describe('#isObject()', function() {

    it('should return false for a null parameter', function() {
      expect(isObject(null)).to.equal(false);
    });

    function passedAsParameter(){
      return;
    }

    it('should return true for a function', function() {
      expect(isObject(passedAsParameter)).to.equal(true);
    });

    it('should return true for an empty object', function() {
      expect(isObject({})).to.equal(true);
    });

    it('should return true for an empty array', function() {
      expect(isObject([])).to.equal(true);
    });

    const re = /ab+c/;

    it('should return true for a regular expression', function() {
      expect(isObject(re)).to.equal(true);
    });

    it('should return false for a non-object parameter', function() {
      expect(isObject(123)).to.equal(false);
    });
});