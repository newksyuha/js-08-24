function makeGETRequest(url) {
  return new Promise((resolve,reject) => {
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
  }) 

}

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



class GoodsItem {
  constructor({id_product, product_name, price }) {
    this.id = id_product;
    this.title = product_name;
    this.price = price;
  }

  render() {
    return `
       <div class="goods-item" data-id="${this.id}">
        <div class="goods-img">
        </div>
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button name="add-to-basket">Buy</button>
      </div>
    `;
  }
}

class GoodsList {
  constructor(basket) {
    this.basket = basket;
    this.goods = [];
    this.fetchGoods()
     .then(() => {
       this.render();
     })
     .catch((err) => {
       console.log(err)
     });

     document.querySelector('.goods-list').addEventListener('click', (event) => {
      if (event.target.name === 'add-to-basket') {
        const id = event.target.parentElement.dataset.id;
        const item = this.goods.find((goodsItem) => goodsItem.id_product === parseInt(id));
        // console.log (item)
      this.basket.addItem(item);
      }
    });

    this.sumGoodsList();
  }

  fetchGoods() {
    return new Promise ((resolve,reject) => {
      makeGETRequest(`/catalogData.json`)
       .then((goods) => {
        this.goods = goods;
        resolve();
      })
       .catch((err) =>{
         reject(err);
       });
    })

  }

 
  //метод подсчета суммы стоимости товаров
  sumGoodsList() {
   // return (this.goods.reduce((acc, cur) => acc + cur.price, 0));
   //   console.log ('Общая сумма товаров - ', sum)
  }
 

  render() {
    const goodsList = this.goods.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
}

class Basket {

constructor() {
  this.goods = [];

  document.querySelector('header').addEventListener('click', (event) => {
    if (event.target.name === 'cart-basket') { //кнопка Корзина
      this.getBasketItems();
      this.toggle();
    }

   
    if (event.target.name === 'remove-to-basket') {
      const id = event.target.parentElement.dataset.id;
      console.log(id);
      this.removeItem(parseInt(id));
    }

  });
   

  }

  toggle () {
    const list = document.querySelector('.cart-list')
    list.classList.toggle('show')
  }

 render() {
 const basketList = this.goods.map(item => { 
      const basketItem = new BasketItem(item);
      return basketItem.render();
    });
    document.querySelector('.cart-list').innerHTML = basketList.join('');
}

  addItem(item) {
    const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
    if (itemIndex !== -1) {
      this.goods[itemIndex].quantity++;
    } else {
      this.goods.push({ ...item, quantity: 1 });
    }
    this.render();
  }

  removeItem(id) {
    const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === id);
    if (itemIndex !== -1) {
      this.goods.splice(itemIndex, 1);
    }
    this.render();
  }

  getBasketItems() {
    return this.goods;
  }
}

class BasketItem {
  constructor({id_product, product_name, price }) {
    this.id = id_product;
    this.title = product_name;
    this.price = price;
  }
  render() {
    return `
       <div class="basket-item" data-id="${this.id}">
        <h6>${this.id}</h6>
        <h6>${this.title}</h6>
        <p>${this.price}</p>
        <button name="remove-to-basket">Remove</button>
      </div>
    `;
  }

}

const basket = new Basket();
const goodsList = new GoodsList(basket);