//const products = document.querySelector('.shop__list');
function getSumObj(object, expression) {
  return eval(expression.replace(/[a-z]+/gi, (key) => object[key]));
}

//New Method fetch  который вернет промис.
/*
function getGoods(url){
  return fetch(url)
    .then((res) => res.json(res)) 
    .then((data) => console.log(data)) 
  } 
  getGoods('https://raw.githubusercontent.com/Binatik/js-08-24/master/students/Serega_Mangushev/backend/Server/goods.json');
*/
const xhr = new XMLHttpRequest(); //API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером.
const root =
  "https://raw.githubusercontent.com/Binatik/js-08-24/master/students/Serega_Mangushev/backend/Server";

/**
 *
 * @param {`*`} request
 * @param {*} root
 * @param {*} url
 * @returns xhr.responseText
 */
function promisifiedXHR(request, root, url) {
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      //Проверяем, что операция полностью завершена.

      if (xhr.readyState === 4) resolve(JSON.parse(xhr.responseText));

      //Если это так, вернем resolve с нужным значением. В нашем случае это xhr.responseText
    };

    xhr.open(request, `${root + url}`, true);

    xhr.send();
  });
}

/*

class ProductСard {
  constructor(item = []) {
    this.id = item.id;
    this.count = item.count;
    this.image = item.image;
    this.name = item.name;
    this.price = item.price;
  }

  getComponent(component) {
    return component;
  }
}

class Goods {
  constructor() {
    this.getVariables();
    this.getGoods();
    document
      .querySelector(".menu__search")
      .addEventListener("input", (event) => {
        this.getFilter(event.target.value);
      });
  }

  getFilter(e) {
    const reg = new RegExp(e, "i");
    console.log(reg);
    this.filter = this.goods.filter((item) => reg.test(item.name));
    console.log(this.filter);
    this.render();
  }

  getVariables() {
    this.products = document.querySelector(".shop__list");
    this.maxNumPrice = document.querySelector(".shop__max-price");
    this.sum = 0;
    this.goods = [];
    this.filter = [];
  }
  getGoods() {
    //Вызываем нашу функцию, которая вернет промис и отдаст запрос с сервера.
    promisifiedXHR("GET", root, "/goods.json").then((goods) => {
      //Полученные данные храним в  this
      this.goods = goods;
      this.filter = goods;
      this.sum = this.goods.reduce(
        (all, cur) => all + getSumObj(cur, "count * price"),
        0
      );
      this.maxNumPrice.innerHTML = `Общая цена товаров на сумму: ${this.sum} Руб`;
      this.render();
      new Basket();
    });
  }

  render() {
    let domTree = this.filter
      .map((item) => {
        const card = new ProductСard(item);
        return card.getComponent([
          ` <div class="shop__product product">
                <img class="product__img" src="${card.image}" alt="Черное">
                <div class="product__group">
                    <p class="product-description">${card.name}</p>  
                    <span class="product__price">${card.price} Р</span> 
                    <button class="product__btn btn">Заказать</button>
                </div>
            </div>`,
        ]);
      })
      .join("");
    this.products.innerHTML = domTree;
  }
}
const productСard = new Goods();
class Basket {
  constructor() {
    this.goods = productСard.goods;
    this.products = []; //Корзина пуста
    this.addProduct(2);
    this.addProduct(1);
    this.removeProduct(1);
  }

  //Добавляем продукт в корзину.
  addProduct(id) {
    this.products.push(this.goods.find((element) => element.id === id));
    this.sum = this.goods.reduce(
      (all, cur) => all + getSumObj(cur, "price"),
      0
    );
    console.log("Сумма товаров: " + this.sum);
  }

  //Удаляем продукт из корзины.
  removeProduct(id) {
    this.products.splice(
      this.products.findIndex((element) => element.id === id)
    );
  }
} 

*/

class Form {
  constructor() {
    this.submitForm = document.querySelector(".contact__form");
    this.rules = {
      userName: /^[А-ЯЁA-Z]{1}[а-яёa-z]{1,23}$/g,
      phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
      email: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
    };
  }

  validator(e) {
    this.inputs = document.querySelectorAll(
      "input[data-check], textarea[data-check]"
    );
    this.inputs.forEach((input) => {
      const paragraph = input.parentElement.children[0];
      if (input.value && input.value.length > 0) this.checkRegValidator(e);
      else {
        paragraph.innerHTML = `Поле не может быть пустым`;
        paragraph.classList.remove("invalid-hidden");
        e.preventDefault();
      }
    });
  }

  checkRegValidator(e) {
    this.inputs.forEach((input, i) => {
      const paragraph = input.parentElement.children[0];
      paragraph.classList.add("invalid-hidden");
      switch (i) {
        case 0:
          if (this.rules.userName.test(input.value)) console.log("Имя верное!");
          else {
            paragraph.innerHTML = `Недопустимое имя`;
            paragraph.classList.remove("invalid-hidden");
            e.preventDefault();
          }
          break;
        case 1:
          if (this.rules.phone.test(input.value)) console.log(true);
          else {
            paragraph.innerHTML = `Телефон должен соответствовать маски`;
            paragraph.classList.remove("invalid-hidden");
            e.preventDefault();
          }
          break;
        case 2:
          if (this.rules.email.test(input.value)) console.log(true);
          else {
            paragraph.innerHTML = `Маил должен быть настоящим`;
            paragraph.classList.remove("invalid-hidden");
            e.preventDefault();
          }
          break;
        default:
          Console.warn("Произошла ошибка отправки формы.");
      }
    });
  }
}
const form = new Form();

form.submitForm.addEventListener("submit", (event) => {
  form.validator(event);
});

//Временная...
//const text = `'В этом тексте будет замена только, если 'кавычка' находится в начале или в конце.'`;
//text.replace(/(^'|'$)/gm, '"');

const bodyApp = new Vue({
  el: "#app",
  data: {
    product: {
      goods: [],
      serchProduct: "", 
      notFound: { 
        title: 'Нам жаль', 
        text: 'Товар не найден',
      },
    }, 

    basket: { 
      isVisibleCart: true,
    },
  },

  created() {
    this.getGoods();
  },

  computed: {
    getFilter() {
      const self = this.product;
      const reg = new RegExp(self.serchProduct, "i"); 
      console.log(self.goods);
      return self.goods.filter((item) => reg.test(item.name)); 
    },
  },

  methods: {
    getGoods() {
      //Вызываем нашу функцию, которая вернет промис и отдаст запрос с сервера.
      promisifiedXHR("GET", root, "/goods.json").then((goods) => {
        //Полученные данные храним в  this
        const self = this.product;
        self.goods = goods;
      });
    },

    sum(express) {
      const self = this.product;
      return self.goods.reduce((all, cur) => all + getSumObj(cur, express), 0);
    },
  },
});
