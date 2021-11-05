import add from '../COMP.SE.200-2021-2022-1/src/add.js';
import { expect } from 'chai';

console.log(add(2,3));

describe('#add()', function() {
  it('should return add numbers', function() {
    expect(add(2,3)).to.equal(5);
  });
});


