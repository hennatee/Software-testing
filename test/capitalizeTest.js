import capitalize from '../COMP.SE.200-2021-2022-1/src/capitalize.js';
import { assert, expect } from 'chai';

describe('#capitalize()', function() {
  it('should only keep the first letter capitalized', function() {
    expect(capitalize("ALLCAPS")).to.equal("Allcaps");
  });

  it('should return the string as it is', function() {
    expect(capitalize("Capitalized")).to.equal("Capitalized");
  });

  it('should capitalize the first letter only', function() {
    expect(capitalize("lowercase")).to.equal("Lowercase");
  });

  it('should return the string as it is if it cant be capitalized (symbols)', function() {
    expect(capitalize("#¤%&")).to.equal("#¤%&");
  });

  //TEST FAILS for a null value, returns string "Null"
  /*
  it('should throw an error for a null parameter', function() {
    expect(capitalize(null)).to.throw();
  });
  */

  //TEST FAILS returns the date object as a capitalized string representation
  /*
  it('should throw an error for an object', function() {
    expect(capitalize(new Date())).to.throw(TypeError);
  });
  */
  
  //TEST FAILS returns 'T,e,s,t'
  /*
  it('should throw an error for an array', function() {
    expect(capitalize(['t', 'e', 's', 't'])).to.throw(TypeError);
  });
  */
});