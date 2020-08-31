class GoodsItem {
    constructor({ title, price,img}) {
      this.title = title;
      this.price = price;
      this.img = img;
    }
  
    render() {
      return `
        <div class="goods-item">
          <h3>${this.title}</h3>
          <p>${this.price}</p>
          <div><img src=${img} width="150px" height="100px"></div>
          <button class="btn" background: #FFBE40;>В корзину</button>
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
  {
    title: "Honda Silver Wing 600",
    img: "img/SW600.jpg",
    price: 600000
},
{
    title: "Suzuki Burgman 650",
    img: "img/Burgman650.jpg",
    price: 680000
},
{
    title: "Yamaha T-MAX",
    img: "img/TMAX.jpg",
    price: 650000
},
{
    title: "BMW C650GT",
    img: "img/C650GT.jpeg",
    price: 700000
},
];
}

//Метод суммы товаров в корзине
sumGoods: function () {
    let sum = 0;
    this.basket.forEach(({price}) => {
        sum += price;
    });
    return this.sumGood = sum;
};
//

//Пустые классы
class BasketGoodsList {
    constructor() {
      this.goods = [];
      this.fetchGoods();
    }

}

class BasketGoodsItem {
    constructor({ title, price}) {
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