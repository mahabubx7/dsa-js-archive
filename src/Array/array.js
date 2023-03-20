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

  remove(item = null) {
    if (!item) {
      this.items.pop();
      return this.items;
    }
    this.items = this.items.filter((it) => it !== item);
    return this.items;
  }

  removeAll() {
    this.items = [];
    return this.items;
  }

  get(index = null) {
    if (!index) return this.items;
    if (index < 0) return new Error('Invalid array index');
    return this.items[index];
  }

  size() {
    return this.items.length;
  }
}

module.exports = { Array };
