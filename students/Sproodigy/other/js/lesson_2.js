// Hamburger

class Hamburger {
  constructor(size, stuffing, seasoning, sauce) {
    this.size = [size]
    this.stuffing = [stuffing]
    this.seasoning = [seasoning]
    this.sauce = [sauce]
    this.totalPrice = 0
    this.totalCal = 0
  }

  getSize() {
    return JSON.parse(this.size).name
  }

  get stuffings() {
    return this.stuffing.map(item => JSON.parse(item).name)
  }

  set stuffings(val) {
    if(JSON.parse(val).name !== null) this.stuffing.push(val)
  }

  _removeStuffing(ingredient) {
    const matchInd = this.stuffing.indexOf(ingredient)
    if (matchInd !== -1) this.stuffing.splice(matchInd, 1)
  }

 get seasonings() {
   return this.seasoning.map(item => JSON.parse(item).name)
 }

 set seasonings(val) {
   if(JSON.parse(val).name !== null) this.seasoning.push(val)
 }

 _removeSeasoning(ingredient) {
   const matchInd = this.seasoning.indexOf(ingredient)
   if (matchInd !== -1) this.seasoning.splice(matchInd, 1)
 }

 get sauces() {
   return this.sauce.map(item => JSON.parse(item).name)
 }

 set sauces(val) {
   if(JSON.parse(val).name !== null) this.sauce.push(val)
 }

 _removeSauce(ingredient) {
   const matchInd = this.sauce.indexOf(ingredient)
   if (matchInd !== -1) this.sauce.splice(matchInd, 1)
 }

 _calcIngredientsPrice(ingredients) {
   let sum = 0
   ingredients.forEach(ingredient => sum += JSON.parse(ingredient).price)
   return sum
 }

 _calcIngredientsCal(ingredients) {
   let sum = 0
   ingredients.forEach(ingredient => sum += JSON.parse(ingredient).cal)
   return sum
 }

  calcPrice() {
    this.totalPrice = JSON.parse(this.size).price +
                      this._calcIngredientsPrice(this.stuffing) +
                      this._calcIngredientsPrice(this.seasoning) +
                      this._calcIngredientsPrice(this.sauce)
    return this.totalPrice
  }

  calcCal() {
    this.totalCal = JSON.parse(this.size).cal +
                      this._calcIngredientsCal(this.stuffing) +
                      this._calcIngredientsCal(this.seasoning) +
                      this._calcIngredientsCal(this.sauce)
    return this.totalCal
  }
}

// HamburgerUI

class HamburgerUI {
  constructor() {
    this.sizes = [
      {"name": "small", "price": 50, "cal": 20},
      {"name": "big", "price": 100, "cal": 40},
    ]

    this.stuffings = [
      {"name": "cheese", "price": 10, "cal": 20},
      {"name": "salad", "price": 20, "cal": 5},
      {"name": "potato", "price": 15, "cal": 10},
    ]

    this.seasonings = [
      {"name": "fennel", "price": 15, "cal": 0},
      {"name": "red pepper", "price": 20, "cal": 0},
    ]

    this.sauces = [
      {"name": "mayonaise", "price": 20, "cal": 5},
      {"name": "ketchup", "price": 30, "cal": 10},
    ]

    this.hamb = null
  }

  _selectIngredients(ingredients = [], name, type) {
    const wrapper = document.createElement('div')
    const select = document.createElement('select')
    const label = document.createElement('label')
    const emptyOption = document.createElement('option')

    wrapper.classList.add('select-wrp')

    label.innerText = `${type} a ${name}: `
    label.setAttribute('for', `${name}Select`)

    select.id = `${name}Select`
    select.classList.add('select', `${name}`)

    ingredients.forEach(item => {
      const option = document.createElement('option')

      option.value = JSON.stringify(item)
      option.innerText = item.name.toUpperCase()

      select.appendChild(option)
    })

    emptyOption.value = JSON.stringify({"name": null, "price": 0, "cal": 0})
    select.appendChild(emptyOption)
    wrapper.appendChild(label)
    wrapper.appendChild(select)

    return wrapper
  }

  _createBtn() {
    const btn = document.createElement('button')

    btn.innerText = 'Create hamburger'
    btn.classList.add('btn', 'btn_create')
    btn.addEventListener('click', () => {
      const size = document.querySelector('.size').value
      const stuffing = document.querySelector('.stuffing').value
      const seasoning = document.querySelector('.seasoning').value
      const sauce = document.querySelector('.sauce').value

      this.hamb = new Hamburger(size, stuffing, seasoning, sauce)

      this.hamb.calcPrice()
      this.hamb.calcCal()
      this.hamb.getSize()
      this.hamb.stuffing

      document.querySelector('.btn_create').remove()
      document.querySelectorAll('.ingredients').forEach(item => {
        item.classList.toggle('hidden')
      })
      document.querySelector('.main-lesson').appendChild(this._addIngredientsBtn())
      document.querySelector('.main-lesson').appendChild(this._removeIngredientsBtn())
      document.querySelector('.main-lesson').appendChild(this._renderHamburgerData())
    })
    return btn
  }

  _addIngredientsBtn() {
    const btn = document.createElement('button')

    btn.innerText = 'Add ingredients'
    btn.classList.add('btn', 'btn_add')
    btn.addEventListener('click', () => {
      const stuffing = document.querySelectorAll('.stuffing')[1].value
      const seasoning = document.querySelectorAll('.seasoning')[1].value
      const sauce = document.querySelectorAll('.sauce')[1].value
      const hambData = document.querySelector('.hamburger-data')

      this.hamb.stuffings = stuffing
      this.hamb.seasonings = seasoning
      this.hamb.sauces = sauce

      document.querySelector('.hamburger-data').innerHTML = this._renderHamburgerData().innerHTML
    })
    return btn
  }

  _removeIngredientsBtn() {
    const btn = document.createElement('button')

    btn.innerText = 'Remove ingredients'
    btn.classList.add('btn', 'btn_remove')
    btn.addEventListener('click', () => {
      const stuffing = document.querySelectorAll('.stuffing')[2].value
      const seasoning = document.querySelectorAll('.seasoning')[2].value
      const sauce = document.querySelectorAll('.sauce')[2].value
      const hambData = document.querySelector('.hamburger-data')

      this.hamb._removeStuffing(stuffing)
      this.hamb._removeSeasoning(seasoning)
      this.hamb._removeSauce(sauce)

      document.querySelector('.hamburger-data').innerHTML = this._renderHamburgerData().innerHTML
    })
    return btn
  }

  _renderPanel(type, visibility = 'shown') {
    let elem = `${type.toLowerCase()}Ingredients`

    elem = document.createElement('div')

    elem.classList.add('ingredients', `${visibility}`)

    if ((type === 'Add') || (type === 'Remove')) {
      elem.appendChild(this._selectIngredients(this.stuffings, 'stuffing', `${type}`))
      elem.appendChild(this._selectIngredients(this.seasonings, 'seasoning', `${type}`))
      elem.appendChild(this._selectIngredients(this.sauces, 'sauce', `${type}`))
    } else {
      elem.appendChild(this._selectIngredients(this.sizes, 'size', `${type}`))
      elem.appendChild(this._selectIngredients(this.stuffings, 'stuffing', `${type}`))
      elem.appendChild(this._selectIngredients(this.seasonings, 'seasoning', `${type}`))
      elem.appendChild(this._selectIngredients(this.sauces, 'sauce', `${type}`))
    }

    document.querySelector('.main-lesson').appendChild(elem)
  }

  _renderHamburgerData() {
    const wrapper = document.createElement('div')
    const size = document.createElement('div')
    const totalPrice = document.createElement('div')
    const totalCal = document.createElement('div')
    const totalIngredients = document.createElement('div')
    const obj = {}

    size.innerHTML = `<b>Size:</b> ${this.hamb.getSize()}<hr class="hr_full-width">`
    totalPrice.innerHTML = `<b>Total price:</b> ${this.hamb.calcPrice()}&#36;<hr class="hr_full-width">`
    totalCal.innerHTML = `<b>Total calories:</b> ${this.hamb.calcCal()} kkal<hr class="hr_full-width">`

    for (const item of this.hamb.stuffings) {
      if (item === null) continue
      if (!obj[item]) obj[item] = 1
      else obj[item] += 1
    }

    for (const item of this.hamb.seasonings) {
      if (item === null) continue
      if (!obj[item]) obj[item] = 1
      else obj[item] += 1
    }

    for (const item of this.hamb.sauces) {
      if (item === null) continue
      if (!obj[item]) obj[item] = 1
      else obj[item] += 1
    }

    totalIngredients.innerHTML = '<b>Total ingredients:</b> <br>'
    for (const item in obj) {
      totalIngredients.innerHTML += `${item} * ${obj[item]}<br>`
    }

    wrapper.classList.add('hamburger-data')
    wrapper.appendChild(size)
    wrapper.appendChild(totalPrice)
    wrapper.appendChild(totalCal)
    wrapper.appendChild(totalIngredients)

    return wrapper
  }

  render() {
    this._renderPanel('Choose')
    this._renderPanel('Add', 'hidden')
    this._renderPanel('Remove', 'hidden')
    document.querySelector('.main-lesson').appendChild(this._createBtn())
  }
}

const ui = new HamburgerUI()
ui.render()
