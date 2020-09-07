'use strict'
const text = "fvjek wncw : 'efeffef efwefw'. aren't. Jeanne d'Arc. 'i say'"
console.log(text)
const ChangeQuotes = (text) => {
    const searchQuotes = /'/
    if (searchQuotes.test(text) === true){
        const a = text.replace(/^'|(\s)'|'\s|'$|'([.])/g, '$1"$2')
        console.log(a)
    } else{
    alert("Нет одинарных кавычек :(")
    }
}
ChangeQuotes(text)

const input_fields = {
    username: /^[a-z\d]{5,20}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    telephone:/(\+7)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g,//+7-(000)-000-0000
}
const validate = (field, regex) => {
    if (regex.test(field.value)){
        field.className = 'valid'
    } else{
        field.className = 'invalid'
        
    }
}
let inputTarget = document.querySelectorAll('input');

inputTarget.forEach(item => item.addEventListener(
    'keyup', e => {
        validate(e.target, input_fields[e.target.attributes.name.value])
    }
));
e.target.attributes.name.value
//взял примерный шаблон валидации в интернете, немного переделал под наше ДЗ, реализация валидации по кнопке не получилось
// пробовал вот так
/*let keys = document.querySelectorAll('input');
document.querySelectorAll('submit_btn').addEventListener('click', (event) => {
    keys.forEach(
    validate(item.target, input_fields[item.target.attributes.name.value]))
    
)}*/
// может я чего не так делаю? или перемудрил?