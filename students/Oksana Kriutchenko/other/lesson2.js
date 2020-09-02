
"use strict"

class Hamburger{
  constructor(size, stuffing, topping){
    this.size = size;
    this.stuffing = stuffing;
    this.topping = topping;
    this.price = 0;
    this.kkal = 0;
    this.getSize();
    this.getStuffing();
    this.addTopping();
  }

  getSize() { 
    if(this.size = 'big'){
        this.price+= 100;
        this.kkal+= 40;

    } else{
        this.price+= 50;
        this.kkal+= 20;
    }
 }
  getStuffing() {
    switch(this.stuffing){
        case 'cheese':
          this.price += 10;
          this.kkal += 20;
         break;
        case 'salad':
          this.price += 20;
          this.kkal += 5;
         break;
        case 'potato':
          this.price += 15;
          this.kkal += 10;
         break;
      }
    }
    
  addTopping(){  
    switch(this.topping){
        case 'seasoning':
           this.price+=15;
           this.kkal+=0;
          break;
        case 'mayonnaise':
           this.price+=20;
           this.kkal+=5;
          break;
        case 'none':
           this.price+=0;
           this.kkal+=0;
          break;
    }
  }
}

const hamburger = new Hamburger('big', 'cheese', 'mayonnaise')
console.log(hamburger) 