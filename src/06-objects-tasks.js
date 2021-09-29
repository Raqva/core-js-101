function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function getArea() { return this.height * this.width; };
}
function getJSON(obj) {
  return JSON.stringify(obj);
}
function fromJSON() {
  throw new Error('Not implemented');
}
const cssSelectorBuilder = {
  element() {
    throw new Error('Not implemented');
  },

  id() {
    throw new Error('Not implemented');
  },

  class() {
    throw new Error('Not implemented');
  },

  attr() {
    throw new Error('Not implemented');
  },

  pseudoClass() {
    throw new Error('Not implemented');
  },

  pseudoElement() {
    throw new Error('Not implemented');
  },

  combine() {
    throw new Error('Not implemented');
  },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
