//const products = document.querySelector('.shop__list');
function getSumObj(object, expression) {
  return eval(expression.replace(/[a-z]+/gi, ((key) => object[key])));
  }

//New Method fetch  который вернет промис.
/*
function getGoods(url){
  return fetch(url)
    .then((res) => res.json(res)) 
    .then((data) => console.log(data)) 
  } 
  getGoods('https://raw.githubusercontent.com/Binatik/js-08-24/master/students/Serega_Mangushev/backend/Server/goods.json');
*/
const xhr = new XMLHttpRequest(); //API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером.
const root =
  "https://raw.githubusercontent.com/Binatik/js-08-24/master/students/Serega_Mangushev/backend/Server";

/**
 *
 * @param {`*`} request
 * @param {*} root
 * @param {*} url
 * @returns xhr.responseText
 */
function promisifiedXHR(request, root, url) {
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      //Проверяем, что операция полностью завершена.

      if (xhr.readyState === 4) resolve(JSON.parse(xhr.responseText));

      //Если это так, вернем resolve с нужным значением. В нашем случае это xhr.responseText
    };

    xhr.open(request, `${root + url}`, true);

    xhr.send();
  });
}

class ProductСard {
  constructor(item = []) {
    this.id = item.id;
    this.count = item.count;
    this.image = item.image;
    this.name = item.name;
    this.price = item.price;
  }

  getComponent(component) {
    return component;
  }
}
 
class Goods {
  constructor() {
    this.getVariables();
    this.getGoods();
  }

  getVariables() {
    this.products = document.querySelector(".shop__list");
    this.maxNumPrice = document.querySelector(".shop__max-price");
    this.sum = 0;
    this.goods = [];
  }
  getGoods() {
    //Вызываем нашу функцию, которая вернет промис и отдаст запрос с сервера.
    promisifiedXHR("GET", root, "/goods.json").then((goods) => {
      //Полученные данные храним в  this
      this.goods = goods; 
      this.sum = this.goods.reduce((all, cur) => all + getSumObj(cur, 'count * price'), 0)
      this.maxNumPrice.innerHTML = `Общая цена товаров на сумму: ${this.sum} Руб`;
      this.render(); 
      new Basket()
    });
  }

  render() {
    let domTree = this.goods
      .map((item) => {
        const card = new ProductСard(item);
        return card.getComponent([
          ` <div class="shop__product product">
                <img class="product__img" src="${card.image}" alt="Черное">
                <div class="product__group">
                    <p class="product-description">${card.name}</p>  
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
const productСard = new Goods();
     
class Basket{ 
    constructor(){  
        this.goods = productСard.goods 
        this.products = [] //Корзина пуста  
        this.addProduct(2);    
        this.addProduct(1);      
        this.removeProduct(1);
    } 
 
    //Добавляем продукт в корзину.
    addProduct(id){  
            this.products.push(this.goods.find((element) => element.id === id));    
            this.sum = this.goods.reduce((all, cur) => all + getSumObj(cur, 'price'), 0) 
            console.log('Сумма товаров: ' + this.sum);

        } 

    //Удаляем продукт из корзины.
    removeProduct(id){ 
        this.products.splice(this.products.findIndex((element) => element.id === id));
    }  
} 
    