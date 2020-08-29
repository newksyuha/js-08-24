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
    this.getSumProduct(this.goods,'price');
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

  getSumProduct(arr,key) { 
    this.maxPrice = 0;
    this.maxPrice = arr.reduce((all, cur) => all + cur[key], 0);
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
     
class Basket{ 
    constructor(){ 
        
    } 

    openBasket(){ 
        //Открываем корзину.
    } 

    closeBasket(){ 
        //Закрываем корзину.
    } 

    //Еще метод подсчета общей стоимости товаров в корзине, но в планах реализация через getSumProduct 

    getProduct(){ 
        //Купить товар разумеется.
    }
} 

//Могу предположить, что этот класс должен будет быть в Basket
class ElementBasket{ 
    constructor(){ 
        
    } 

    remove(item){ 
        //Удаляем  item (Не обязательно только в корзине)
    } 
}  

//Временная мера и некоторые методы могут в будущем являться функциональщиной. 


/* 
Небольшое пояснение.  Мы можем предположить, что Корзина - это один класс/объект,  
ее составляющая - это  product/item.  
У product  не планируется создавать метод /купить.  
Логично, что мы добавляем собственность корзины  
и уже делаем заказ через корзину, т.е покупая товары 
 - мы покупаем общие товары, которые собственность корзины  
 и логично, что у товара не может быть метода покупки.  
 
 Противоречие: Конечно купить n  товар мы не можем,  
 но нам доступна возможность удалить товар.  
 Товар один и его мы удаляем, это уже не метод корзины,  
 а именно метод товара (Удалить) (Добавить) 
*/    