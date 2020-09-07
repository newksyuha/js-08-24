class GoodsItem {
    constructor({ title, image, price, sticker, button }) {
        this.title = title;
        this.image = image;
        this.price = price;
        this.sticker = sticker;
        this.button = button;
    }

    render() {
        return `
            <div class="goods-item">
                <h3>${this.title}</h3>
                <img src="${this.image}">
                <p>${this.price}</p>
                <span>${this.sticker}</span>
                <button>${this.button}</button>
            </div>
        `;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.fetchGoods();
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', image: 'image/1.jpg', sticker: 'hot', price: 150, button: 'добавить в корзину' },
            { title: 'Socks', image: 'image/2.jpg', sticker: '', price: 50, button: 'добавить в корзину' },
            { title: 'Jacket', image: 'image/3.jpg', sticker: '', price: 350, button: 'добавить в корзину' },
            { title: 'Shoes', image: 'image/4.jpg', sticker: 'sale', price: 250, button: 'добавить в корзину' },
        ];

        total() {
            let sum = 0;
            this.goods.forEach(item => {
                sum += item.price;
            })
            return sum;
        }
    }



    render() {
        const goodsList = this.goods.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }
}

const goodsList = new GoodsList();
goodsList.render();