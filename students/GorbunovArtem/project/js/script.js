
const goods = [
  {
    title: "Honda Silver Wing 600",
    img: "img/SW600.jpg",
    price: 600000
},
{
    title: "Suzuki Burgman 650",
    img: "img/Burgman650.jpg",
    price: 680000
},
{
    title: "Yamaha T-MAX",
    img: "img/TMAX.jpg",
    price: 650000
},
{
    title: "BMW C650GT",
    img: "img/C650GT.jpeg",
    price: 700000
},
];

const renderGoodsItem = (title = "Названия товара нет", img = "Изображение товара не доступно", price = "Цена товара не указана") => {
    return `<div class="goods-item"><h3>${title}</h3><div><img src=${img} width="150px" height="100px"></div><p>${price}</p><button class="btn" background: #FFBE40;>В корзину</button></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.img, item.price)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);
