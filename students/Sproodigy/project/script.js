const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
  {},
];

const renderGoodsItem = (title = 'Unknown', price = 0) => {
  return `<div class="goods-item"><h3>Name: ${title}</h3><p>Price: ${price}&#36;</p></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price))
  console.log(goodsList.toString())
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);
