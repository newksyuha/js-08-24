class GoodsItem {
  constructor({ title, price }) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `
       <div class="goods-item">
        <div class="goods-img">
        </div>
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
    this.sumGoodsList();
  }

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  
  //метод подсчета суммы стоимости товаров
  sumGoodsList() {
      let sum = 0;
      this.goods.forEach(items => {
        sum+=items.price
      })
      console.log ('ОБщая сумма товаров - ', sum)
  }
 

  render() {
    const goodsList = this.goods.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
}

class BasketList {
//пустой класс перечня товаров в корзине
}

class BasketItem {
  //пустой класс для отдельных товаров в корзине
}

const goodsList = new GoodsList();
goodsList.render();