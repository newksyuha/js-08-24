"use strict";

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
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  goodsPriceSum() {
    /*
    let result = 0;
    for( let i=0; i<this.goods.length; i++ ) {
      result += this.goods[i].price;
    };
    */
   let result = null;
   this.goods.forEach(good => {
    result += good.price;
   });
  console.log(result);
  return result;
  }
}

class Basket {
  constructor() {
    this.button = document.querySelector(".cart-button");
    this.product = {};
  }

 clickByBasket() {
 }

 addProductInBasket() {

} 

 renderProductInBasket() {

}

renderTotalQuantityProductInBasket() {

}

renderTotalSum() {

}

}

class ElementBasket {

  renderImageFronDeletProduct () {

  }

  removeProductOfBasket() {
  }

  renderSendButtonProduct() {

  }

  sendProduct() {

  }

  renderCancelButton() {

  }

  cancelOrder() {
    
  }

}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.goodsPriceSum();
