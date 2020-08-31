// Некая сеть фастфуда предлагает несколько видов гамбургеров:
//
// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий).
// ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий).
// ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
// ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.

  class Gamburger {
    constructor(size, nachinka, other) {
        this.size = size;
        this.nachinka = nachinka;
        this.other = other;
    }

      countPriceAndCalories () {
        let price = 0;
        let calories = 0;
        let error = false;
// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий).
        if (this.size==="big") {
            price+=100;
            calories+=40;
        }
        if (this.size==="small") {
            price+=50;
            calories+=20;
        }
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий).
        if (this.nachinka==="cheese") {
            price+=10;
            calories+=20;
        }
        if (this.nachinka==="salat") {
              price+=20;
              calories+=5;
          }
        if (this.nachinka==="potato") {
              price+=15;
              calories+=10;
          }

          // ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
          if (this.other==="priprava") {
              price+=15;
          }
          if (this.other==="mayo") {
              price+=20;
              calories+=5;
          }
          //проверяем на ошибки ввода
          if (this.size!=="big" && this.size!=="small" || this.nachinka!=="cheese" && this.nachinka!=="potato" && this.nachinka!=="salat" || this.other!=="priprava" && this.other!=="mayo" && this.other!==undefined) {
              error = true;
          }
       error===false ? console.log(`${price} roubles, ${calories} calories`) : console.log("error");
      }
}

//---------------------------------------------------------------------------
let myGam = new Gamburger("big", "potato", "mayo");
myGam.countPriceAndCalories();

