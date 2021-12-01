import upperFirst from '../COMP.SE.200-2021-2022-1/src/upperFirst.js';
import { expect, assert } from 'chai';


describe('#upperFirst()', function() {

    it('should capitalize only the first letter', function() {
      expect(upperFirst('upperfirst')).to.equal('Upperfirst');
    });

    it('should return string as it is if all letters are already capitalized', function() {
      expect(upperFirst('ALLCAPS')).to.equal('ALLCAPS');
    })

    it('should return string as it is if it cant be capitalized (special characters)', function() {
      expect(upperFirst("#¤%&")).to.equal("#¤%&");
    });

    it('should throw an error if parameter type is not a string', function() {
      assert.throws(function () { upperFirst(3) }, Error);
    });

    it('should throw an error if parameter is null', function() {
      assert.throws(function () { upperFirst(null) }, Error);
    });

    it('should throw an error if parameter is undefined', function() {
      assert.throws(function () { upperFirst(undefined) }, Error);
    });

});