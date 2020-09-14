const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) 
{
    return new Promise((resolve, reject) => 
    {
        const xhr = new XMLHttpRequest;

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) 
            {
                if (xhr.status === 200) resolve(JSON.parse(xhr.responseText));
                else reject(xhr.responseText);
            }
        }

        xhr.open('GET', `${API_URL}${url}`, true);
        xhr.send();   
    })
}


class GoodsItem 
{
    constructor({ id_product, product_name, price }) 
    {
        this.id           = id_product
        this.product_name = product_name;
        this.price        = price;
    }

    render() 
    {
        return `
            <div class="goods-item" data-id='${this.id}'>
                <h3>${this.product_name}</h3>
                <p>${this.price}</p>
                <button class='btn_toBasket' name='btn_toBasket'>Buy</button>
            </div>
        `;
    }
}


class GoodsList 
{
    constructor(basket) 
    {
        this.basket        = basket;
        this.goods         = [];
        this.filteredGoods = [];

        this.fetchGoods()
            .then(() => {
                this.render();
            })
            .catch((err) => {
                console.log('[ERROR]', err);
            });
        
        document.querySelector('.goods-list').addEventListener('click', (event) => {
            if (event.target.name === 'btn_toBasket') 
            {
                const id   = event.target.parentElement.dataset.id;
                const item = this.goods.find((goodItem) => goodItem.id_product === parseInt(id));

                this.basket.add_item(item);
            }
        });

        document.querySelector('.search').addEventListener('input', (event) => {
            this.filterGoods(event.target.value);
        })
    }

    fetchGoods() 
    {
        return new Promise((resolve, reject) => 
        {
            makeGETRequest(`/catalogData.json`)
            .then((goods) => 
            {
                this.goods         = goods;
                this.filteredGoods = goods;

                resolve();
            })
            .catch((err) => reject(err))
        }
        );
    }     

    total() 
    {
        return this.goods.reduce((acc, cur) => acc + cur.price, 0);
    }

    filterGoods(value)
    {
        const regexp       = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
    
        this.render();
    }

    render() 
    {
        const goodsList = this.filteredGoods.map(item => {
            const goodsItem = new GoodsItem(item);

            return goodsItem.render();
        });

        document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }   
}


class BasketItem
{
    constructor(item, basket) 
    {
        this.item   = item;
        this.basket = basket;
    }

    addItem()
    {
        this.basket.addItem(this.item.id);
    }

    removeItem()
    {
        this.basket.removeItem(this.item.id);
    }

    add() 
    {
        this.item.quantity += 1;
    }

    /**
     * Создает разметку одной строки позиции товара в корзине.
    */
    render() 
    {
        /*return `
            <div class="basket-item">
                <div>${this.id}</div>
                <div>${this.name}</div>
                <div>${this.price}</div>
                <div>${this.count}</div>
                <button>Delete</button>
            </div>
        `;*/
    }
}


class Basket 
{
    constructor() 
    {
        this.goods = [];
    }

    fetchGoods() 
    {

    }

    /**
     * Добавляет позицию товара в список корзины при нажатии соответствующей кнопки в карточке товара.
     * Если позиция товара существует в списке => увеличивается count.
     */
    add_item(item)
    {
        const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
        
        if (itemIndex !== -1) this.goods[itemIndex].quantity++;
        else this.goods.push({ ...item, quantity: 1 });
        
        console.log(this.goods);  
    }
    
    /**
     * Удаляет позицию товара из корзины при нажатии соответствующей кнопки.
     * Если добавлено несколько позиций, то сначала уменьшается count товара.
     */
    remove_item(id) 
    {    
        const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === id);
        
        if (itemIndex !== -1) this.goods.splice(itemIndex, 1);
    }

    get_basket_items()
    {
        return console.log(this.goods);
    }

    /**
     * Создает структуру корзины.
     */
    create_div(parent=document.main) 
    {
        let div         = document.createElement('div');        
        div.className   = 'basket';
        let div_title   = this.create_title();
        let elem_basket = new Elem_basket(); // ?
        let div_item    = elem_basket.render();
        let div_footer  = this.create_footer();

        parent.appendChild(div);
        div.appendChild(div_title);
        div.appendChild(div_item);
        div.insertAdjacentHTML('afterEnd', div_footer);
    }

    /**
     * Создает разметку заголовка корзины.
     */
    create_title() 
    {
        return `
        <div class="basket-title">
            <div>Id</div>
            <div>Name</div>
            <div>Price</div>
            <div>Amount</div>
        </div>
        `;
    }

    /**
     * Создает разметку футера корзины.
     */
    create_footer() 
    {
        return `
        <div class="basket-footer">
            <div class='foot-left'>Sum total</div>
            <div class='foot-right'>${this.price}</div>
        </div>
        `;
    }

    /**
     * Удаляет корзину, если она пустая.
     */
    remove_basket() 
    {

    }

    /**
     * Суммирует общую стоимость позиций в корзине.
     */
    total() 
    {

    }
}


let basket = new Basket();
let list   = new GoodsList(basket);
