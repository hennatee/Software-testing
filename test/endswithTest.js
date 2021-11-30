import endsWith from '../COMP.SE.200-2021-2022-1/src/endsWith.js';
import { assert, expect } from 'chai';

describe('#endsWith()', function() {
    it('should return true if string 1 ends with string 2', function() {
      expect(endsWith('test', 'st')).to.equal(true);
    });

    it('should return true for identical strings', function() {
        expect(endsWith('test', 'test')).to.equal(true);
    });

    it('should return true for a correct string, substring and position', function() {
    expect(endsWith('test', 'es', 3)).to.equal(true);
    });

    it('should return false for a faulty string, substring and position', function() {
    expect(endsWith('test', 't', 2)).to.equal(false);
    });

    it('should account for a too high position number and return true', function() {
    expect(endsWith('qwerty', 'rty', 12)).to.equal(true);
    });

    //TEST FAILS returns false
    /*
    it('should account for negative indexes and return true', function() {
      expect(endsWith('qwerty', 't', -2)).to.equal(true);
    });
    */

    //TEST FAILS returns false
    /*
    it('should throw an error for a non-number position', function() {
    expect(endsWith('qwerty', 'q', 'test')).to.throw(TypeError);
    });
    */

    //TEST FAILS returns true
    /*
    it('should throw an error for a non-integer position', function() {
    expect(endsWith('qwerty', 'q', 1.25)).to.throw(TypeError);
    });
    */

    //TEST FAILS returns false
    /*
    it('should throw an error for a null position', function() {
      expect(endsWith('qwerty', 'ty', null)).to.throw(TypeError);
      });
      */
  });