const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position < this.getLength() && position > 0) {
      position = position - 1;
      this.chain = [...this.chain.slice(0, position), ...this.chain.slice(position + 1)];
      return this;
    } else {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain.length = 0;
    return res;
  }
};

module.exports = {
  chainMaker
};
