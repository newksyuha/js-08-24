const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url, callback) {
  let xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

function makeGETRequestPromise(url) {
  return new Promise((resolve, reject) => {
    let xhr;

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(xhr.responseText)
      }
    }

    xhr.open('GET', url, true);
    xhr.send();
  });
}

class FetchButton {
  constructor(goodsList, btnText, fetchFn, renderFn) {
    this.goodsList = goodsList
    this.text = btnText
    this.fetch = fetchFn
    this.render = renderFn
  }

  create(fetchFrom) {
    const btn = document.createElement('button')

    btn.classList.add('fetch-btn')
    btn.innerHTML = this.text

    btn.addEventListener('click', () => {
      if (this.text.includes('return')) {
        this.fetch.call(this.goodsList)
          .then(() => this.render.call(this.goodsList, fetchFrom))
      } else {
        this.fetch.call(this.goodsList, () => {
          this.render.call(this.goodsList, fetchFrom)
        })
      }
    })
    return btn
  }
}

class GoodsItem {
  constructor(title, price) {
    this.product_name = title;
    this.price = price;
  }

  render() {
    return `<div class="goods-item"><h3>Name: ${this.product_name}</h3><p>Price: ${this.price}&#36;</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this.totalPrice = 0
  }

  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      cb()
    })
  }

  fetchGoodsPromise(cb) {
    makeGETRequestPromise(`${API_URL}/catalogData.json`)
      .then(res => JSON.parse(res))
      .then(res => this.goods = res)
      .then(() => cb())
  }

  fetchGoodsReturnPromise() {
    return makeGETRequestPromise(`${API_URL}/catalogData.json`)
      .then(res => JSON.parse(res))
      .then(res => this.goods = res)
  }

  fetchGoodsFetch(cb) {
    fetch(`${API_URL}/catalogData.json`)
      .then(res => res.json())
      .then(res => this.goods = res)
      .then(() => cb())
  }

  _calcTotalPrice() {
    this.goods.forEach((good) => this.totalPrice += good.price)
  }

  _renderTotalPrice() {
    this._calcTotalPrice()
    return `<div class="total-price"><b>Total price:</b> ${this.totalPrice}&#36;</div><hr>`;
  }

  render(fetchFrom) {
    let listHtml = '';
    const fromHtml = `<div style="width: 100%; text-align: center; font-size: 2em;">${fetchFrom}</div>`
    this.totalPrice = 0
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = fromHtml + listHtml;
    document.querySelector('.goods-list').innerHTML += this._renderTotalPrice();
  }

  renderGoodsPromise(fetchFrom) {
    let listHtmlPromise = ''
    const fromHtml = `<div style="width: 100%; text-align: center; font-size: 2em;">${fetchFrom}</div>`
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtmlPromise += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML += fromHtml + listHtmlPromise;
    document.querySelector('.goods-list').innerHTML += this._renderTotalPrice();
  }

  renderGoodsReturnPromise(fetchFrom) {
    let listHtmlReturnPromise = ''
    const fromHtml = `<div style="width: 100%; text-align: center; font-size: 2em;">${fetchFrom}</div>`
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtmlReturnPromise += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML += fromHtml + listHtmlReturnPromise;
    document.querySelector('.goods-list').innerHTML += this._renderTotalPrice();
  }

  renderGoodsFetch(fetchFrom) {
    let listHtmlFetch = ''
    const fromHtml = `<div style="width: 100%; text-align: center; font-size: 2em;">${fetchFrom}</div>`
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtmlFetch += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML += fromHtml + listHtmlFetch;
    document.querySelector('.goods-list').innerHTML += this._renderTotalPrice();
  }
}

class CartItem {
  constructor() {}
  increaseQuantity() {}
  decreaseQuantity() {}
  calcTotalSum() {}
  calcTotalQuantity() {}
  remove() {}
  render() {}
}

class Cart {
  constructor() {}
  calcTotalPrice() {}
  calcTotalQuantity() {}
  clear() {}
  render() {}
}

const list = new GoodsList();

const btn1 = new FetchButton(list, 'Fetch (http)', list.fetchGoods, list.render)
const btn2 = new FetchButton(list, 'Fetch (promise)', list.fetchGoodsPromise, list.renderGoodsPromise)
const btn3 = new FetchButton(list, 'Fetch (return promise)', list.fetchGoodsReturnPromise, list.renderGoodsReturnPromise)
const btn4 = new FetchButton(list, 'Fetch (fetch)', list.fetchGoodsFetch, list.renderGoodsFetch)

document.querySelector('.btns-wrp').appendChild(btn1.create('From http'))
document.querySelector('.btns-wrp').appendChild(btn2.create('From promise'))
document.querySelector('.btns-wrp').appendChild(btn3.create('From a returned promise'))
document.querySelector('.btns-wrp').appendChild(btn4.create('From fetch'))
