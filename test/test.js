import upperFirst from '../COMP.SE.200-2021-2022-1/src/upperFirst.js';
import toString from '../COMP.SE.200-2021-2022-1/src/toString.js';
import ceil from '../COMP.SE.200-2021-2022-1/src/ceil.js';
import defaultTo from '../COMP.SE.200-2021-2022-1/src/defaultTo.js';
import defaultToAny from '../COMP.SE.200-2021-2022-1/src/defaultToAny.js';
import { expect } from 'chai';


describe('#upperFirst()', function() {
  it('should return string with capitalized first letter', function() {
    expect(upperFirst('test')).to.equal('Test');
    expect(upperFirst('TEST')).to.equal('TEST');
  });
});

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

describe('#ceil()', function() {
  it('should return rounded up integer when precision is 0 (default)', function() {
    expect(ceil(1.2345)).to.equal(2);
    expect(ceil(2.83)).to.equal(3);
  });
  it('should return rounded up number with two decimals when precision is 2', function() {
    expect(ceil(1.2345, 2)).to.equal(1.24);
  });
  it('should return rounded up integer when precision is negative number', function() {
    expect(ceil(1234, -2)).to.equal(1300);
  })
  it('should return rounded up integer when precision is 0 (default) and given number is negative', function() {
    expect(ceil(-2.34)).to.equal(-2);
  });
  it('should return number with two decimals (.00) when given value is integer and precision is 2', function() {
    expect(ceil(2, 2)).to.equal(2.00);
  })
});

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

describe('#defaultToAny()', function() {
  it('should return given value if it is not NaN, null or undefined', function() {
    expect(defaultToAny(1, 2, 3)).to.equal(1);
  });
  it('should return first default value if given value is NaN', function() {
    expect(defaultToAny(NaN, 1, 2)).to.equal(1);
  });
  it('should return first default value if given value is null', function() {
    expect(defaultToAny(null, 1, 2)).to.equal(1);
  });
  it('should return first default value if given value is undefined', function() {
    expect(defaultToAny(undefined, 1, 2)).to.equal(1);
  });
  it('should return second default value if given value is NaN and first default value is NaN', function() {
    expect(defaultToAny(NaN, NaN, 1)).to.equal(1);
  });  
  it('should return second default value if given value is NaN and first default value is null', function() {
    expect(defaultToAny(NaN, null, 1)).to.equal(1);
  });  
  it('should return second default value if given value is null and first default value is NaN', function() {
    expect(defaultToAny(null, NaN, 1)).to.equal(1);
  }); 
  it('should return second default value if given value is undefined and first default value is NaN', function() {
    expect(defaultToAny(undefined, NaN, 1)).to.equal(1);
  }); 
  it('should return second default value if given value is undefined and first default value is null', function() {
    expect(defaultToAny(undefined, null, 1)).to.equal(1);
  }); 
  it('should return second default value if none of the values are valid', function() {
    expect(defaultToAny(null, null, NaN)).to.equal(NaN);
  });
});

 


