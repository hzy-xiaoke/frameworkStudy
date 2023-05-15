const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const sum = require('../sum.js');

let value = 'Node';

describe('assert demo', () => {
  it('use assert lib', () => {
    assert.typeOf(value, 'string');
    assert.equal(value, 'Node');
    assert.lengthOf(value, 4);
  });
});

describe('expect demo', () => {
  it('use expect lib', () => {
    expect(value).to.be.exist;
    expect(value).to.be.a('string');
    expect(value).to.equal('Node');
    expect(value).to.not.equal('node');
    expect(value).to.have.length(4);
  });
});

describe('should demo', () => {
  it('use should lib', () => {
    value.should.be.a('string');
    value.should.equal('Node');
    value.should.not.equal('node');
    value.should.have.length(4);
  });
});