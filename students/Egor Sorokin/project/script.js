class CartElement {
  constructor(catalogElement, count) {
    this.item = catalogElement;
    this.count = count;
  }

  increaseAmount() {
    this.count++;
  }

  reduceAmount(index) {
    if (this.count != 1) {
      this.count--;
    }
  }

  render() {
    return `<div class="cart-item">
            <h3>${this.item.product_name}</h3>
            <p>${this.item.price}</p>
            <button class="cart-count-button" type="button">-</button><p>${this.count}</p><button class="cart-count-button" type="button">+</button>
            </div>`;
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.price = 0;
  }

  addToCart(item, count) {
    const newItem = new CartElement (item, count);
    
    let alreadyExist = false;
    
    this.items.forEach(singleItem => {
      if (singleItem.item.id_product === newItem.item.id_product) {
        alreadyExist = true;
      }
    })
    if (!alreadyExist) {
      this.items.push(newItem);
    }
  }

  removeFromCart(index) {
    this.items.splice(index, 1);
  }

  recalculate() {
    this.price = 0;
    this.items.forEach(element => {this.price = this.price + element.item.price * element.count});
  }

  listToLog() {
    this.items.forEach(singleItem => {
      console.log(singleItem.item.product_name);
    })
  }

  render() {
    let cartHtml = '';
    this.items.forEach(item => {
      cartHtml += item.render();
    })
    document.querySelector('.cart-list').innerHTML = cartHtml;
  }
}

class GoodsItem {
  constructor(title, price) {
    this.product_name = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p><button class="addCart" type="button">To Cart</button></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    makeGETRequest(`${API_URL}/catalogData.json`).then((goods) => {
      this.goods = JSON.parse(goods);
    }).then(() => this.render())
  }

  calculateTotal() {
    let total = 0;
    this.goods.forEach(good => {
      total += good.price;
    })
    console.log(total);
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
    let i = 0;
    document.querySelectorAll('.addCart').forEach(button => {
      let a = (index) => {let add = (eventObj) => {cart.addToCart(this.goods[index], 1); cart.recalculate(); cart.render();}; 
        return add;};
      button.addEventListener('click', a(i))
      i++;
    })
  }
}

function makeGETRequest(url) {
  return new Promise((resolve, reject) => {
    var xhr;

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(xhr.responseText);
      } 
    }

    xhr.open('GET', url, true);
    xhr.send();
  });
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const cart = new Cart();
const list = new GoodsList();

list.fetchGoods();

