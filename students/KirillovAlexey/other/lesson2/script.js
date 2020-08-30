

class Hamburger {
  constructor(size='small', stuffing='cheese') {
	  this.size = size;
	  
	  switch (size) {
		  case 'small':
			this.price = 50;
			this.calories = 20;
			break;
		default:
		//big
			this.price = 100;
			this.calories = 40;
			break;
	  }
	  
	  
	  this.topping = [];
	  
	  switch (stuffing) {
		  case 'cheese':
		  this.stuffing = new ingredient(stuffing,10,20);
		  break;
		  
		  case 'lettuce':
		  this.stuffing = new ingredient(stuffing,20,50);
		  break;
		  
		  case 'potato':
		  this.stuffing = new ingredient(stuffing,15,10);
		  break;		  
	  }
	  
	  
  }
  addTopping(topping) {  
	switch (topping) {
		case 'spice':
		this.topping.push(new ingredient(topping,15,0));
		break;
		default:
		this.topping.push(new ingredient(topping,20,5));
	}
  }
  removeTopping(topping) { 
	let i;
	for (i = this.topping.length - 1; i >=0; i-=1){
		if (this.topping[i].title === topping){
			console.log('delete ' + this.topping[i].title);
			this.topping.splice(i,1);
			console.log(this.topping);
		}
	}
  }
  getToppings(topping) {
		this.topping.forEach(ing => console.log(ing.title));
  }
  getSize() {       return size;        }
  getStuffing() {    return this.stuffing.title;       }
  calculatePrice() {     
	let total = this.price + this.stuffing.price;
	this.topping.forEach(ing => total += ing.price);
	return total;
  }
  calculateCalories() {   
	let totalC = this.calories + this.stuffing.calories;
	this.topping.forEach(ing => totalC += ing.calories);
	return totalC;
  }
}

class ingredient {
	constructor (title, price, calories) {
		this.title = title;
		this.price = price;
		this.calories = calories;
	}
}

const burger = new Hamburger('big','potato');
burger.addTopping('spice');
burger.addTopping('mayonnaise');
//burger.removeTopping('spice');
console.log(burger.calculatePrice());
console.log(burger.calculateCalories());
console.log(burger);
