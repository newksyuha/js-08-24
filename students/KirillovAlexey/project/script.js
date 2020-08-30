

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
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 251 },
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
  
  getTotalPrice(){
	  let totalPrice = 0;
    this.goods.forEach(good => {
      totalPrice += good.price;
    });
    document.querySelector('.total-price').innerHTML = totalPrice;
  }
}

//пустые классы для Корзины товаров и Элемента корзины товаров

class CartItem extends GoodsItem{
	constructor (item, amount=1){
		super(item.title, item.price);
		this.amount = amount;
		this.total = item.price*amount;
	}
	
	render() {
    return `<div class="goods-item"><h3>${this.title}</h3>
	<p>${this.price}</p>
	<p>${this.amount}</p>
	<p>${this.total}</p>
	</div>`;
  }
	
}

class Cart {
	constructor() {
		this.items = [];
		this.totalPrice = 0;
	}
	
	
	addItem(item, amount){
		const cartItem = new CartItem(item, amount);
		this.items.push(cartItem);
		this.totalPrice += cartItem.total;
	}
	
	delItem(index){
		let max = this.items.length;

		if (Number.isInteger(index)){
			if (max >= index + 1){
				this.totalPrice -= this.items[index].total; 
				this.items.splice(index, 1);
				 
			} else {
				console.log("out of bounds");
			}
		}			
	}
	
	render(){
		let listHtml = '';
		this.items.forEach(item => {
      listHtml += item.render();
	  
    });
    document.querySelector('.Cart').innerHTML = listHtml;
	}
	
	
}


const list = new GoodsList();
list.fetchGoods();
list.render();
list.getTotalPrice();

/*const cart = new Cart();
cart.addItem(list.goods[0], 2);
cart.addItem(list.goods[1], 4);
cart.render();*/




