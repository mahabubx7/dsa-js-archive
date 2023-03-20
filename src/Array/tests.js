const assert = require('assert');
const { Array } = require('./array');

const arr = new Array([]);
arr.add(7);

describe('Array: Initial Tests', () => {
  it('Initial Array should be an object of Array', () => {
    assert(new Array([]) instanceof Array);
  });

  it('Initial Array size should be 0', () => {
    assert(new Array([]).size() === 0);
  });

  it('Initial Array should be empty []', () => {
    const arr = new Array([]);
    assert(typeof arr.items);
  });
});

describe('Array: Add items test', () => {
  it('Array should have the item after insert', () => {
    const arr = new Array([]);
    arr.add(7);
    assert(arr.size() === 1);
    assert(arr.get()[0] === 7);
    arr.add('M');
    assert(arr.size() === 2);
    assert(arr.get()[1] === 'M');
  });

  it('Array should be able to insert at given position', () => {
    const arr = new Array([7, 'm', 0]);
    arr.add('M', 0);
    arr.add('7', 3);
    assert(arr.get()[0] === 'M');
    assert(arr.get()[1] === 7);
    assert(arr.get()[3] === '7');
    assert(arr.get()[4] === 0);
  });
});
