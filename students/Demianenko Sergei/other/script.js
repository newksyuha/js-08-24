/*1.Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
2.Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
3.* Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
*/
const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
  const renderGoodsItem = (title = "no name", price = 0) => {
    return `<div class="goods-item">
    <h3>${title}</h3><p>${price}
    </p></div>`;
  };
  
  const renderGoodsList = (list) => {
    
    /*2.упростить или сократить запись функций
    3.*Строковый аргумент, с помощью которого будут соединены в строку все элементы массива. 
    Если аргумент не задан, элементы будут соединены запятыми.*/
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join ("\n");
  }
  
  renderGoodsList(goods);