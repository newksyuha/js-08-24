/* Некая сеть фастфуда предлагает несколько видов гамбургеров:
Маленький (50 рублей, 20 калорий).
Большой (100 рублей, 40 калорий).
Гамбургер может быть с одним из нескольких видов начинок (обязательно):
С сыром (+10 рублей, +20 калорий).
С салатом (+20 рублей, +5 калорий).
С картофелем (+15 рублей, +10 калорий).
Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) 
и полить майонезом (+20 рублей, +5 калорий). 
Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
 Можно использовать примерную архитектуру класса со следующей страницы, н
 о можно использовать и свою.*/


 class Hamburger {
  constructor(size, stuffing, topping) { 
      this.size = size;
      this.stuffing = stuffing;
      this.topping= topping;
      this.cost = 0;
      this.kal = 0;
      this.getSize();
      this.getStuffing();
      this.getToppings();
    }

  getToppings() {   
    switch (this.topping) {
      case 'none':
        break;
      case 'flavoring':
        this.cost += 15;
        break;
      case 'mayo':
        this.cost += 20;
        this.kal += 5;
    }
  }
  getSize() {              // Узнать размер гамбургера 
    switch (this.size) {
      case 'big':
       this.cost = 100;
       this.kal = 40;
      break;
      case 'small':
        this.cost = 50;
        this.kal = 20;
      break;  
    }
  }
  getStuffing() {          // Узнать начинку гамбургера 
    switch (this.stuffing) {
      case 'cheese':
       this.cost += 10;
       this.kal += 20;
      break;
      case 'salad':
        this.cost += 20;
        this.kal += 5;
      break;
      case 'potato':
        this.cost += 15;
        this.kas += 10;
      break;
    }
  }
}

/* первый параметр размер - big , small
   второй параметр начинка - cheese, salad, potato
   третий параметр добавка - none, flavoring, mayo 
   */
const gamburger = new Hamburger('small','potato', 'mayo')
console.log('Цена - ', gamburger.cost)
console.log('Калорий - ', gamburger.kal)