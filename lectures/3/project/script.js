class GoodsItem {
  constructor({ title, price }) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `
      <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
      </div>
    `;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this.fetchGoods();
  }

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }

  total() {
    return this.goods.reduce((acc, cur) => acc + cur.price, 0);
  }

  render() {
    const goodsList = this.goods.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
}

const goodsList = new GoodsList();
goodsList.render();


class Basket {
  constructor() {
    this.goods = [];
  }

  static foo () {
    console.log('static foo method');
  }

  fetchGoods() {

  }

  addItem(item) {

  }

  removeItem(id) {

  }

  total() {

  }

  render() {

  }
}

class BasketItem {
  constructor(item, basket) {
    this.item = item;
    this.basket = basket;
  }

  addItem() {
    this.basket.addItem(this.item.id);
  }

  removeItem() {
    this.basket.removeItem(this.item.id);
  }

  add() {
    this.item.quantity += 1;
  }

  render() {

  }
}
