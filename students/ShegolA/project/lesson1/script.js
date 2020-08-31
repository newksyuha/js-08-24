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
            { title: 'Shoes', price: 250 },
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

    calculateTotalCost () {
        let totalCost=0;
        this.goods.forEach((good) =>{
            console.log(good.price);
            totalCost += good.price;
        });
        console.log(totalCost);
    }
}

//---------------------------------------------------------------------------
let myGoodList = new GoodsList();
console.log(myGoodList);
myGoodList.fetchGoods();
myGoodList.render();
myGoodList.calculateTotalCost()

//--------------------------------------------------------------------------
class Basket {
    constructor() {
        this.basketGoods = [];
    }
}
class BasketItem {
    constructor(title, price, count) {
        this.title = title;
        this.price = price;
        this.count = count;
    }
    summ() {
        return this.price*this.count;
    }
}