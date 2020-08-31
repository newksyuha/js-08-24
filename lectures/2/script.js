/* 
Функции-конструкторы

const menuItem = {
  color: 'blue',
  name: 'File',
  makeRed: function() {
    this.color = 'red';
  },
};

function MenuItem (color = 'blue', name) {
  this.color = color;
  this.name = name;
  this.makeRed = function () {
    this.color = 'red';
  };
}

MenuItem.prototype.makeBlue = function () {
  this.color = 'blue';
}

function TopMenuItem (color, name, type) {
  MenuItem.call(this, color, name);
  this.type = type;
  this.name = 'Top Item';
}

TopMenuItem.prototype = Object.create(MenuItem.prototype);

TopMenuItem.prototype.constructor = TopMenuItem;

const item1 = new MenuItem('green', 'Edit');
const item2 = new TopMenuItem('orange', 'Help', 'Top');
const item3 = new TopMenuItem('orange', 'Something', 'Top');

*/ 

// ES2015

class MenuItem {
  constructor (color = 'blue', name) {
    this.color = color;
    this.name = name;
  }

  makeRed() {
    this.color = 'red';
  }
}

class TopMenuItem extends MenuItem {
  #type;

  constructor (color, name, type) {
    super(color, name);
    this.#type = type;
  }

  makeBlue() {
    this.color = 'blue';
  }

  get type() {
    console.log('get type');
    return `Тип меню ${this.#type}`;
  }

  set type(value) {
    console.log('set type');
    this.#type = value;
  }
}

