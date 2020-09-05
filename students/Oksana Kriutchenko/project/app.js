"use strict"

/* const goods = [
    {
        //        title: 'Honda NC 750',
        img: 'img/honda_NC_750_XD_2018.jpg',
        price: 12000,
    },
    {
        title: 'Honda New CB500X',
        img: 'img/honda_CB500X.jpg',
        //        price: 8500
    },
    {
        title: 'NC 750 S-1',
        img: 'img/NC_750_S-1.jpg',
        price: 10500,
    },
    {
        title: 'NC 750 XD 2018',
        //        img: 'img/Honda_NC_750_XD_2018-4.jpg',
        price: 11000,
    },
]; */
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;
      
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
    
              if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
              } else {
                reject(xhr.responseText);
              }
    
            }
        }
    
        xhr.open('GET', `${API}${url}`, true);
      
        xhr.send();
      });
    }
class GoodsItem {
    constructor({
        id_product,
        product_name,
        price
    }) {
        this.id_product = id_product;
        this.title = product_name;
        this.price = price;
    }
    render() {
        return `
            <div class="goods-item" data-id="${this.id}">
                <h3>${this.title}</h3>
                <p>${this.price}USD</p>
                <button name="add-to-basket">Купить</button>
            </div>
        `;
    }
};

class GoodsList {
    constructor(basket) {
        this.basket = basket;
        this.goods = [];
        this.filteredGoods = [];
        this.fetchGoods()
        .then(() => {
            this.render();
        })
        .catch((err) => {
            console.log('[ERROR]', err);
        });
        document.querySelector('.goods-list').addEventListener('click', (event) => {
            if (event.target.name === 'add-to-basket') {
              const id = event.target.parentElement.dataset.id;
              const item = this.goods.find((goodsItem) => goodsItem.id_product === parseInt(id));
              this.basket.addItem(item);
            }
          });
      
          document.querySelector('.search').addEventListener('input', (event) => {
            this.filterGoods(event.target.value);
          });
        }
    fetchGoods() {
        return new Promise((resolve, reject) => {
       
        makeGETRequest('/catalogData.json')
        .then((goods) => {
            this.goods = goods;
            this.filteredGoods = goods;
            resolve();
        })
           .catch((err) => {
               reject(err);
           }); 
          });
    }
    total() {
        return this.goods.reduce((acc, cur) => acc + cur.price, 0);
  }    
    filterGoods(value){
        const  regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
        this.render();
    }

    render() {
        const goodsList = this.filteredGoods.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        });
       
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
}
 
class Basket {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {

  }

  addItem(item) {

    const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
    if (itemIndex !== -1) {
      this.goods[itemIndex].quantity++;
    } else {
      this.goods.push({ ...item, quantity: 1 });
    }
    console.log(this.goods);
  }

  removeItem(id) {
    const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === id);
    if (itemIndex !== -1) {
      this.goods.splice(itemIndex, 1);
    }
  }
  getBasketItems() {
    return this.goods;
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

const basket = new Basket();
const goodsList = new GoodsList(basket);

/* class cartButton {
    constructor(){
        
    }

    clearCartButton(){
        //метод, который производит очистку корзины
    }
    sumCartButton(){
        // метод, который считает сумму товаров в корзине
    }
    payCartButton(){
        //метод, который выбирает форму оплаты
    }
}
class elementCartButton {
    constructor(){
        //price     цена
        //quantity  количество
        //name      наименование
    }
    addElementCartButton(){
        //метод, который добавляет товар в корзину
    }

    deleteElementCartButton(){
        //метод удаляющий элемент с корзины
    }
} */

   
  
//Метод подсчета суммарной стоимости продуктов
/* 
    getTotalSumProduct() {
        let totalSum = 0;
        for (let product of this.goods) {
            totalSum += product.price;
        }
        console.log(totalSum);
        return totalSum;
    }

    renderTotalSumProduct() {
        const blockSum =
            document.querySelector('.btn');
         blockSum.insertAdjacentHTML('afterend', `<br><p>Стоимость всех продуктов</p>${this.getTotalSumProduct()}`);
    } */
