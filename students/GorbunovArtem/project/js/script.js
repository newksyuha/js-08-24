const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url, callback) {
  return new Promise((resolve, reject) => {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
          callback(JSON.parse(xhr.responseText));
      }
  }
  xhr.open('GET', `${API}${url}`, true);
  xhr.send();
});
};

class GoodsItem {
  constructor({ product_name, price }) {
    this.title = product_name;
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

class GoodsList {
  constructor() {
    this.goods = [];
    this.fetchGoods();
  }

  fetchGoods() {

    sendRequest('/catalogData.json', (goods) => {
      this.goods = goods;
      this.render();
      
    });
  }

  total() {
    return this.goods.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
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

class Basket {
  constructor() {
    this.goods = [];
  }

  static foo () {
    console.log('static foo method');
  }

  /*fetchGoods() {

  }*/

  addItem(item) {
    basket.goods.push
  }

  removeItem(id) {

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

//feedback

const sendFeedBack = () => {
  let name = document.getElementById('name').nodeValue;
  let phone = document.getElementById('mobile').nodeValue;
  let email = document.getElementById('email').nodeValue;
  let msg = document.getElementById('message').nodeValue;
console.log(name);
console.log(phone);
console.log(email);
console.log(msg);
  //let str = textBefore.value;
  //document.getElementById('result').innerHTML = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
  
};
document.getElementById('sendBut').addEventListener('click', sendFeedBack);