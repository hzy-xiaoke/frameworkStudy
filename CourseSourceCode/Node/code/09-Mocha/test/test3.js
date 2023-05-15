const fs = require('fs');
const fsPromise = fs.promises;
const chai = require('chai');
const assert = chai.assert;

describe('异步测试1', () => {
  it('异步读取文件1', (done) => {
    fs.readFile('./1.txt', (err, data) => {
      if (err) {
        done(err);
      } else {
        assert.equal(data, 'Node');
        done();
      }
    });
  });
});

describe('异步测试2', () => {
  it('异步读取文件2', async () => {
    const data = await fsPromise.readFile('./1.txt', 'utf8');
    assert.equal(data, 'Node');
  });
});