const assert = require('assert');
const sum = require('../sum.js');

describe('sum方法测试', () => {
  it('sum() 结果为 0', () => {
    assert.strictEqual(sum(), 0);
  });
  it('sum(1) 结果为 1', () => {
    assert.strictEqual(sum(1), 1);
  });
  it('sum(1,2) 结果为 3', () => {
    assert.strictEqual(sum(1,2), 3);
  });
  it('sum(1,2,3) 结果为 6', () => {
    assert.strictEqual(sum(1,2,3), 6);
  });
});