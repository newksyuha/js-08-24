const goods = [
    { title: 'Пончик - 1', price: 150 },
    { title: 'Пончик - 2', price: 50 },
    { title: 'Пончик - 3', price: 350 },
    { title: 'Пончик - 4', price: 250 },
];

// *******1 вариант который пришел в голову********

/* const renderGoodsItem = (title, price) => {
    let div = document.createElement('div');
    div.className = 'goods-item';
    div.innerHTML = `<h3>${title}</h3><p>${price}</p>`;
    return div;
};
const renderGoodsList = (list) => {
    list.forEach(elem => {
        document.querySelector('.goods-list').append(renderGoodsItem(elem.title, elem.price));
    });
} */

// *****2 вариант - который решил оставить******

/* здесь мы опустили скобки так как передается всего один параметр  () */
/* мы убрали эти -> {} скобки так как внутри записана всего 1 функция, если действие всего одно< то допускается опускать скобки */
const renderGoodsList = list => list.forEach(elem => document.querySelector('.goods-list').innerHTML += `<div class="goods-item"><img src="./img/1.jpeg" alt="#"><h3>${elem.title}</h3><p>${elem.price}rub</p><button>add</button></div>`);
renderGoodsList(goods);

/* Метод Map создал новый массив в который положил 4 результата вызова функции и разделил их запятыми.
 А используя innerHTML мы говорим "выведи все, что найдешь в массиве - строкой". Вот и получаем запятые которые раньше служили как разделитель элементов в массиве
 в коде html  в виде строки. Выход: использовал метод forEach. Можно было использовать reduce   */ //! <3