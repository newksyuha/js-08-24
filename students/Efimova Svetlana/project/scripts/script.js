const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Dress'},
    { price: 200 },
  ];
  
  const renderGoodsItem = (title = "T-shirt", price = 100) => 
    `<div class="goods-item"><h3>${title}</h3><div class="goods-item-img"></div><p>${price}</p><button class="cart-button" type="button">Добавить</button></div>`;
  
  const renderGoodsList = (list = "test") => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  
  renderGoodsList(goods);