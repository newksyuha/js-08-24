const products = document.querySelector('.shop__list');

 function getGods() {
     return [{
             root: './image/coffee1.webp',
             title: 'Шоколадное кофе',
             price: 57
         },
         {
             root: './image/coffee2.webp',
             title: 'Ванильное кофе',
             price: 39
         },
         {
             root: './image/coffee3.webp',
             title: 'Черное кофе',
             price: 32
         },
     ];
 }


const render = {  
    //Вернем dom  в виде большого компонента. 
    goodsItem(root, title, price) {
        return `  
    <div class="shop__product product">
        <img class="product__img" src="${root}" alt="Черное">
        <div class="product__groop">
            <p class="product-description">${title}</p>  
            <span class="product__price">${price} Р</span> 
            <button class="product__btn btn">Заказать</button>
        </div>
    </div>`;
    },
 
    //В переменную запишем результат каждой итерации в массиве.
    goodsList(list) {
        let domTree = list.map(item => this.goodsItem(
            item.root,
            item.title,
            item.price
        )).join(""); 
        //Полученное дерево формируем в  html.
        products.innerHTML = domTree;
    }
} 

//Вызываем наш метод относительно  this объекта.
render.goodsList(getGods());