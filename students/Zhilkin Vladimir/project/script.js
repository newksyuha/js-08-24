class GoodsItem {
	constructor(title, price) {
		this.title = title;
		this.price = price;
	}

	render() {
		return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
	}
}

class GoodsList {
	constructor() {
		this.goods = [];
	}

	fetchGoods() {
		this.goods = [
			{
				title: 'Shirt',
				price: 150
			},
			{
				title: 'Socks',
				price: 50
			},
			{
				title: 'Jacket',
				price: 350
			},
			{
				title: 'Shoes',
				price: 250
			},
    ];
	}
	render() {
		let listHtml = '';
		this.goods.forEach(good => {
			const goodItem = new GoodsItem(good.title, good.price);
			listHtml += goodItem.render();
		});
		document.querySelector('.goods-list').innerHTML = listHtml;
	}
}

const list = new GoodsList();
list.fetchGoods();
list.render();

//1.Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. 
//Продумайте, какие методы понадобятся для работы с этими сущностями.

class Cart {
	constructor() {

	}
	// метод для очистки корзины
	clearCart() {

	}
	// 2.Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
	totalCart() {
		let totalPrice = 0;
	}
	//метод оплаты товаров
	pay() {

	}
}

class CartItem {
	constructor() {

	}
	//удаляет один элемент из корзины
	deleteItem() {

	}
}
