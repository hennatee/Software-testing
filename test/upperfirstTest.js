import upperFirst from '../COMP.SE.200-2021-2022-1/src/upperFirst.js';
import { expect } from 'chai';

describe('#upperFirst()', function() {
    it('should return string with capitalized first letter', function() {
      expect(upperFirst('test')).to.equal('Test');
      expect(upperFirst('TEST')).to.equal('TEST');
    });
});