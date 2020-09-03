//Класс каталога
class GoodsList {
  constructor (container = ".goods-list"){
    this.container = container;
    this.data =[];
    this.goods = [];
    this.init();
  }
  init(){
    this.getGoods();
    this.render();
  }

getGoods(){
  this.data = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
  ];
}
render(){
const block =document.querySelector(this.container);
for (let item of this.data){
  const product = new GoodsItem (item);
  this.goods.push(product);
  block.insetrAdjacentHTML ("beforeend", product.render());
  }
}
//Метод сумарной стоимости
GoodsSum(){
  let sum = 0;
  for (let item of this.goods){
    sum +=item.price;
  }
  return sum;
  } 
} 
// Класс каталог

class GoodsItem {
  constructor(product, img){
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = img;
  }
  render(){
    return  `<div class="product-item">
    <img src="${this.img}" alt="${this.title}">
    <div class="desc">
        <h3>${this.title}</h3>
        <p class="price-text">${this.price} руб. </p>
        <button class="buy-btn">Купить</button>
        </div>
        </div>`;
    }
}
 //Класс корзина
 class Cart {
   constructor(){
     this.cartGoods = [];
     this.container = this.container;

   }
   cartText(){}
   cartPrice(){}
   cartCount(){}
   addProduct (id, quantity = 1){}
   removeProduct(id, quantity =1){}
   ClearCart(){}
   render(){}
 }
 //Класс элемент корзины
  class CartItem {
    constructor(product, img){
      this.id;
      this.title;
      this.price;
      this.quantity;
      this.sum;
      this.img;
    }
    render(){}
  }
  const goods = new GoodsList();