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

  it('should return array size', () => {
    assert(new Array([1, 2, 3]).size() === 3);
  });
});

describe('Array: Get items test', () => {
  it('should return item based on index', () => {
    const arr = new Array([7, 6, 5, 4, 3, 2, 1]);
    assert(arr.get(0) === 7);
    assert(arr.get(4) === 3);
    assert(arr.get(6) === 1);
  });

  it('should return error if index not found', () => {
    const arr = new Array([7, 6, 5, 4, 3, 2, 1]);
    assert(arr.get(8) === undefined);
    assert(arr.get(9) === undefined);
  });
});

describe('Array: Add items test', () => {
  it('should have the item after insert', () => {
    const arr = new Array([]);
    arr.add(7);
    assert(arr.size() === 1);
    assert(arr.get(0) === 7);
    arr.add('M');
    assert(arr.size() === 2);
    assert(arr.get(1) === 'M');
  });

  it('should be able to insert at given position', () => {
    const arr = new Array([7, 'm', 0]);
    arr.add('M', 0);
    arr.add('7', 3);
    assert(arr.get(0) === 'M');
    assert(arr.get(1) === 7);
    assert(arr.get(3) === '7');
    assert(arr.get(4) === 0);
  });
});

describe('Array: Remove items test', () => {
  it('should remove item based on index', () => {
    const arr = new Array([7, 6, 5, 4, 3, 2, 1]);
    assert(Number(arr.remove(1)) === 6);
    assert(Number(arr.remove(0)) === 7);
    assert(Number(arr.remove(3)) === 2);
  });

  it('should be able to remove all on demand', () => {
    const arr = new Array([1, 2, 3]);
    assert(arr.removeAll() === true);
    assert(arr.size() === 0);
  });
});
