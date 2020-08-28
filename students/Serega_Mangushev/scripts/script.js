//const products = document.querySelector('.shop__list');
class ProductСard {
  constructor(item = []) { 
    this.root = item.root;
    this.title = item.title;
    this.price = item.price;
  }

  getComponent(component) {
    return component;
  }
}
 
class Goods {
  constructor() {
    this.products = document.querySelector(".shop__list");   
    this.maxNumPrice = document.querySelector(".shop__max-price");
    this.goods = [];
    this.getGoods(); 
    this.calcCard('price');
    this.render();
  }
  getGoods() {
    this.goods = [
      {
        root: "./image/coffee1.webp",
        title: "Шоколадное кофе",
        price: 57,
      },
      {
        root: "./image/coffee2.webp",
        title: "Ванильное кофе",
        price: 39,
      },
      {
        root: "./image/coffee3.webp",
        title: "Черное кофе",
        price: 32,
      },
      {
        root: "./image/coffee3.webp",
        title: "Черное кофе",
        price: 32,
      },
    ];
  }

  calcCard(key) { 
    this.maxPrice = 0;
    this.maxPrice = this.goods.reduce((all, cur) => all + cur[key], 0);
    return this.maxNumPrice.innerHTML =  `Общая цена товаров на сумму: ${this.maxPrice} Руб`;
  } 

  render() {
    let domTree = this.goods
      .map((item) => {
        const card = new ProductСard(item);
        return card.getComponent([
          ` <div class="shop__product product">
                <img class="product__img" src="${card.root}" alt="Черное">
                <div class="product__group">
                    <p class="product-description">${card.title}</p>  
                    <span class="product__price">${card.price} Р</span> 
                    <button class="product__btn btn">Заказать</button>
                </div>
            </div>`,
        ]);
      })
      .join("");
    this.products.innerHTML = domTree;
  }
}
new Goods();

/*
function getGoods() {
     return [{
             root: './image/coffee1.webp',
             title: 'Шоколадное кофе',
             price: 57
         },
         {
             root: './image/coffee2.webp',
             title: 'Ванильное кофе',
             price: 39
         },
         {
             root: './image/coffee3.webp',
             title: 'Черное кофе',
             price: 32
         }, 
         {
            root: './image/coffee3.webp',
            title: 'Черное кофе',
            price: 32
        },
     ];
 } 
 */
 