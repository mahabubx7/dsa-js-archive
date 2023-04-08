class Array {
  constructor(items = []) {
    this.items = items;
  }

  add(item, index = null) {
    if (!index) this.items.push(item);
    if (index < 0) return new Error('Invalid array index');
    if (index === 0) this.items.unshift(item);
    else if (index > 0) {
      const newArr = [
        ...this.items.slice(0, index),
        item,
        ...this.items.slice(index, this.size() - 1),
      ];
      this.items = newArr;
    }

    return this.items;
  }

  remove(index = null) {
    if (index === null || index === undefined) return this.items.pop();
    if (index < 0) return new Error('Invalid array index');
    const arr = [...this.items];
    const toBeRemoved = arr.splice(index, 1);
    this.items = [...arr];
    return toBeRemoved;
  }

  removeAll() {
    this.items = [];
    return this.items.length === 0;
  }

  get(index = null) {
    if (index >= 0) return this.items[index];
    if (index < 0) return new Error('Invalid array index');
    return this.items;
  }

  size() {
    return this.items.length;
  }
}

module.exports = { Array };
