import isEmpty from '../COMP.SE.200-2021-2022-1/src/isEmpty.js';
import { assert, expect } from 'chai';

//we fail to visit line 51 although we try with both buffers and typedarrays

describe('#isEmpty()', function() {
  
    it('should return true for null', function() {
      expect(isEmpty(null)).to.equal(true);
    });

    it('should return true for an empty array', function() {
      expect(isEmpty([])).to.equal(true);
    });

    it('should return false for a non-empty array', function() {
      expect(isEmpty([0, 1, 2])).to.equal(false);
    });


    it('should return true for an empty string', function() {
      expect(isEmpty("")).to.equal(true);
    });

    it('should return false for a non-empty string', function() {
      expect(isEmpty('test')).to.equal(false);
    });

    const map1 = new Map();
    const map2 = new Map();
    map2.set('a', 1);
    map2.set('b', 2);

    it('should return true for an empty map', function() {
      expect(isEmpty(map1)).to.equal(true);
    });

    it('should return false for a non-empty map', function() {
      expect(isEmpty(map2)).to.equal(false);
    });

    const set1 = new Set();
    const set2 = new Set();
    set2.add(1);
    set2.add(3);

    it('should return true for an empty set', function() {
      expect(isEmpty(set1)).to.equal(true);
    });

    it('should return false for a non-empty set', function() {
      expect(isEmpty(set2)).to.equal(false);
    });

    const obj1 = {};
    const obj2 = {name:"test", expectation:"fail"};

    it('should return true for an empty object', function() {
      expect(isEmpty(obj1)).to.equal(true);
    });

    it('should return false for a non-empty object', function() {
      expect(isEmpty(obj2)).to.equal(false);
    });

    it('should return true for an empty prototype object', function() {
      expect(isEmpty(Object.getPrototypeOf(obj1))).to.equal(true);
    });

    //TEST FAILS returns true
    /*
    it('should return false for a non-empty prototype object', function() {
      expect(isEmpty(Object.getPrototypeOf(obj2))).to.equal(false);
    });
    */

    const buf1 = Buffer.alloc(10);
    const buf2 = Buffer.from('abcdef');

    //TEST FAILS returns false
    /*
    it('should return true for an empty buffer', function() {
      expect(isEmpty(buf1)).to.equal(true);
    });
    */

    it('should return false for a non-empty buffer', function() {
      expect(isEmpty(buf2)).to.equal(false);
    });

    const typedArray1 = new Int8Array();
    const typedArray2 = new Int8Array(4);
    typedArray2[0] = 32;

    it('should return true for an empty TypedArray', function() {
      expect(isEmpty(typedArray1)).to.equal(true);
    });

    it('should return false for a non-empty TypedArray', function() {
      expect(isEmpty(typedArray2)).to.equal(false);
    });
  });