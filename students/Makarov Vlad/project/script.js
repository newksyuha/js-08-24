
  // const goods = [
    
  // ];
  
  // // const renderGoodsItem = (title = 'name', price = 000) =>  `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
 
  // const renderGoodsList = (list) => {
  //   let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  //   document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
  // }
  
  // renderGoodsList(goods); 

  class GoodsItem{
    constructor({title, price}){
      this.title = title;
      this.price = price;
    }

    render() {
      return `
      <div class="goods-item">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
      </div>
      `;
    }

  }

  class GoodsList{
    constructor(){
      this.goods = [];

    }
    fetchGods(){
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
    }
    render(){
      const goodsList =  this.goods.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
     });
     document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
    }


    finalPrice(){
      let totalPrice = 0;
      for(i = 0; i < this.goods.length; i++){
      totalPrice +=  this.goods[i].price;
      }
      console.log(totalPrice);
      return totalPrice;
    }
  //   finalPrice1(){
  //     let totalPrice = this.goods.forEach(price => {
  //     let price = this.goods.price; 
  //     return price;

  //   });
  // }
  }

  const goodsList = new GoodsList();
  goodsList.fetchGods();
  goodsList.render();

  

  class Basket{
    constructor(){


    }
    basketRender(){

     // Отображение содержимого корзины, по нажатию иконки
    }
    basketFinalPrice(){
      // расчет итоговой стоимости и количество товаров и скидок 
    }
    backetReset(){
      // сброс содержимого корзины 
    }
    basketForm(){
      //отрисовка формы  формы для заполнения заказа: адрес, почта и тд 
    }
    Pay(){
      // кнопка для оплаты с переадресацией на страницу банка 
    }



  }
  class BasketItem{
    constructor()

    basketItemQuantity(){
      //Кол-во товара 
    }
    basketItemAdd(){
      //Добавить данный товар 
    }
    basketItemRemove(){
      //удалить товар 
    }

  }