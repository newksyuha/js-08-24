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

function renderGoodsItem(root, title, price) {
    return `  
    <div class="shop__product product">
        <img class="product__img" src="${root}" alt="Черное">
        <div class="product__groop">
            <p class="product-description">${title}</p>  
            <span class="product__price">${price} Р</span> 
            <button class="product__btn btn">Заказать</button>
        </div>
    </div>`;
};

function renderGoodsList(list) {  
    let arr = list.map(item => renderGoodsItem(
        item.root,
        item.title,
        item.price
    )).join("");
    products.innerHTML = arr;
}
renderGoodsList(getGods());