class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `<div class="goods-item"><h3>Name: ${this.title}</h3><p>Price: ${this.price}&#36;</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this.totalPrice = 0
  }

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }

  _calcTotalPrice() {
    this.goods.forEach((good) => this.totalPrice += good.price)
  }

  _renderTotalPrice() {
    this._calcTotalPrice()
    return `<div class="total-price"><b>Total price:</b> ${this.totalPrice}&#36;</div>`;
  }

  render() {
    let listHtml = '';
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
    document.querySelector('.goods-list').innerHTML += this._renderTotalPrice();
  }
}

class CartItem {
  constructor() {}
  increaseQuantity() {}
  decreaseQuantity() {}
  calcTotalSum() {}
  calcTotalQuantity() {}
  remove() {}
  render() {}
}

class Cart {
  constructor() {}
  calcTotalPrice() {}
  calcTotalQuantity() {}
  clear() {}
  render() {}
}

const list = new GoodsList();
list.fetchGoods();
list.render();
