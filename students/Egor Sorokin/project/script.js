class CartElement {
  constructor(catalogElement, count) {
    this.item = catalogElement;
    this.count = count;
  }

  increaseAmount() {
    this.count++;
  }

  reduceAmount(index) {
    if (this.count != 1) {
      this.count--;
    }
  }

  render() {
    return `<div class="cart-item">
            <h3>${this.item.title}</h3>
            <p>${this.item.price}</p>
            <button class="cart-count-button" type="button">-</button><p>${this.count}</p><button class="cart-count-button" type="button">+</button>
            </div>`;
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.price = 0;
  }

  addToCart(item, count) {
    const newItem = new CartElement (item, count);
    this.items.push(newItem);
  }

  removeFromCart(index) {
    this.items.splice(index, 1);
  }

  recalculate() {
    this.price = 0;
    this.items.forEach(element => {this.price = this.price + element.item.price * element.count});
  }

  render() {
    let cartHtml = '';
    this.items.forEach(item => {
      cartHtml += item.render();
    })
    document.querySelector('.cart-list').innerHTML = cartHtml;
  }
}

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }

  calculateTotal() {
    let total = 0;
    this.goods.forEach(good => {
      total += good.price;
    })
    console.log(total);
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();